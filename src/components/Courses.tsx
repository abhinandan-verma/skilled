"use client";

import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { Message } from '@/model/User';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { isAcceptingMessageSchema } from '@/schemas/acceptMessageSchema';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { User } from 'next-auth';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Key, Loader2, RefreshCcw } from 'lucide-react';
import { MessageCard } from '@/components/MessageCard';
import { Course } from '@/model/Course';
import { set } from 'mongoose';
import Image from 'next/image';
import { Card, CardHeader } from '@nextui-org/react';
import { CardContent } from './ui/card';


function Courses() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { data: session } = useSession()


  const fetchCourses = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get<ApiResponse>('/api/get-courses')

      if(response.data.courses !== undefined){

        setCourses(response.data.courses)

        console.log("response: ", response.data.courses)

        toast({
          title: "Courses Found",
          description: "Retrieved all Courses successfully",
        })
      }else{
        toast({
          title: "Error",
          description: "No courses found",
          variant: "destructive",
        })

        console.log("No courses found")
      }

    } catch (error) {
      console.log("error in fetching courses: ", error)
      const axiosError = error as AxiosError<ApiResponse>

      toast({
        title: "Error",
        description: axiosError.response?.data.message || axiosError.message,
        variant: "destructive"
      })

    } finally {
      setLoading(false)
    }
  },[setCourses, setLoading])


  const filterCourses = courses.filter((course) => {
    course.categories.includes(selectedCategory)
  })

 
    

  return (
    <div>
      <h1>Courses Check</h1>
      <Button onClick={fetchCourses}>
      {
        loading ? (
          <>
            <Loader2 className='mr-3 h-4 w-4 animate-spin'/> Fetching Courses...
          </>
        ) : ('Fetch Courses')
      }      
      </Button>

      <Separator />

      <div className="grid grid-cols-3 gap-4 w-full p-5 bg-blue-100">
        {
          filterCourses.map((course, index) => (

            <Card key={course.name} className='rounded-2xl bg-white max-w-sm ' 
            
            >
              <CardHeader className='w-full p-0 rounded-2xl' >
                <Image
                  src={course.imageUrl}
                  alt='Loading Image...'
                  width={500}
                  height={200}
                  className=' w-full rounded-2xl'
                >
                </Image>
      
            </CardHeader>
            <CardContent className='flex flex-col justify-start  pr-5 pl-5 mt-5 text-start font-bold'>
      
              <h1 className='text-3xl font-extrabold font-sans ml-2'>
                {course.name}
              </h1>
              <p className='ml-2'>
                {course.description} 
              </p>
      
                <div className='flex flex-row justify-between items-center mt-2 ml-2'>
                  <p className='text-xs'>
                    Instructor: {course.mentors}
                  </p>
                  
                </div>
      
              <div className='flex justify-between  mb-2 rounded-2xl p-3 w-full'>
      
              <h2 className='font-bold font-sans text-2xl text-blue-700'>
              &#8377;{course.price}
                </h2>
              <p className='text-center'>
                  {course.duration}
              </p>
              </div>
      
                <div className='flex flex-row justify-between p-1 mb-1'>
            
                <p className='text-xs'>
                  Starts On: {course.startDate.toString()}
                </p>
                  <p className=' text-xs'>
                    Ends On: {course.endDate.toString()}
                  </p>
                </div>
              
      
              <div className='flex flex-row justify-center mb-2 items-center'>
                  <Button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-7 w-full hover:bg-blue-700 hover:text-white'
                    onClick={() => router.push(`/courses/${course.id}`)}
                  >
                    Enroll Now
                  </Button>
      
      
              </div>
              <div className='flex flex-row justify-between items-center'>
                  <Button className='bg-transparent text-blue hover:text-white hover:bg-blue-500  px-8 py-1 border-blue-600 border-solid border-2 rounded-md font-sm   '>
                    Explore
                </Button>
                <Button className='bg-gradient-to-r from-indigo-500  to-blue-500 text-white px-6 hover:bg-blue-700'>
                    Share as Gift
                </Button>
              </div>
            </CardContent>
          </Card> 
          ))
        }
      </div>

    </div>
  )
}

export default Courses