"use client"

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Course } from '@/model/Course';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Card, CardHeader, Chip, Spacer } from '@nextui-org/react';
import { CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { useWindowSize } from '@react-hook/window-size'
import CircularProgress from '@mui/material/CircularProgress';
import { Sparkle } from 'lucide-react';
import Partners from '@/components/Partener';
import { useParams } from "next/navigation";
import { PhoneCallIcon, StarsIcon } from 'lucide-react';
import { StarIcon } from '@heroicons/react/20/solid';
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import { string } from 'zod';


function CourseDetails() {
    
  const searchParams  = useSearchParams()
  const [course, setCourse] = useState<Course | null>(null)
  const [loading, setLoading] = useState(true)
  const { data: session, status } = useSession()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const router = useRouter()

  const fetchCourseDetails = useCallback(async() => {
    setLoading(true)
    console.log("Initiating fetchCourseDetails")

    try {
      console.log("Fetching course details try block")

      const id = searchParams.get('id')

      console.log("Course id: ", id)

      if(!id){
        toast({
          title: "Error",
          description: "Course id not found",
          variant: "destructive"
        })
      }

      toast({
        title: "Success",
        description: "Course id found",
        variant: "success"
      })

      const response = await axios.get<ApiResponse>(`/api/get-course-details?id=${id}`)

      console.log("Response: ", response.data)

      if(response.data.course !== undefined){
        console.log("Course found: ", response.data.course)
        setCourse(response.data.course || [])

        toast({
          title: "Success",
          description: "Course found Successfully",
          variant: "success"
        })
      }else{
        console.log("Course not found :( ")

        toast({
          title: "Error",
          description: "Course not found",
          variant: "destructive"
        })
      }
    } catch (error) {
      console.log("Error in fetchCourseDetails: ", error)

      const axiosError = error as AxiosError<ApiResponse>

      console.log("axiosError: ", axiosError)

      if(axiosError.response){
        toast({
          title: "Error",
          description: axiosError.response.data.message,
          variant: "destructive"
        })
      }
      toast({
        title: "Error",
        description: axiosError.message,
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }, [setCourse, searchParams])

  useEffect(() => {

    

      if(!searchParams.get('id')){
        console.log("Course id not found")
        toast({
          title: "Error",
          description: "Course id not found",
          variant: "destructive"
        })
      }
    fetchCourseDetails()
    setLoading(false)
  },[fetchCourseDetails, searchParams])


  if(loading){
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    )
  }

  return (
    <div>
      <h1>
          Details Page Test
      </h1>
      
      <div>
        <div className='flex flex-col justify-center items-center my-8 bg-white'>

        <div className='flex justify-around bg-gray-200 max-w-0.7 w-full rounded-2xl min-h-[400px]'>

            <div className='flex-col items-center justify-around p-8 w-3/5'>

                <Chip color="primary" className='bg-green-400 px-3 py-2 rounded-lg'>
                  {course?.tag}
                </Chip>

                <br />

                <h1 className='bg-gradient-to-r from-orange-400  to-red-600 inline-block text-transparent bg-clip-text text-4xl font-bold font-sans'>
                   {course?.name}
                </h1>
                <br />
                <br />
                <p className='bgired-100 max-w-fit text-lg'>
                    {course?.description}
                </p>

                <br />

                <div className='flex bg-gray-50 justify-between p-4 rounded-lg'>
                    <div>
                        <p className='text-gray-800'>Type</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>Degree</h3>
                    </div>
                    <div>
                      <p className='text-gray-800'>Start Date</p>
                      <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>{course?.startDate?.toString()}</h3>
                    </div>
                    <div>
                        <p className='text-gray-800'>End Date</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>{course?.endDate?.toString()}</h3>
                    </div>
                    <div>
                        <p className='text-gray-800'>Duration</p>
                        <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>{course?.duration}</h3>
                    </div>
                </div>
                <br />
                <div className='flex justify-center gap-8'>
                    <Button className='border-2 border-blue-700 rounded-lg p-2 hover:bg-orange-400 hover:text-white'>
                        Download Syllabus
                    </Button>
                    <Button className='bg-orange-400 hover:bg-orange-500 text-white font-bold rounded-lg p-2 min-w-44' onClick={() => redirect(`/payment?courseId=${searchParams.get("id")}`)}>
                        Enroll Now
                    </Button>
                </div>


            <br />
            <div className='ml-3 text-sm text-slate-900 gap-4 flex-col flex ' >
                <p className='text-xl flex gap-3'>
                ₹ {course?.price}
                </p>
                <p className='text-base flex gap-3'>
                    <StarIcon className='w-4'/>
                    Hurry! 327 people have already applied in the last 1 month
                </p>
                <p className='flex gap-3'>
                    <PhoneCallIcon size={16} />
                    For enquiries call: 1800 210 2020
                </p>
            </div>
               
            </div>
            <div className='flex justify-center items-center'>
                <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdvESU1dghCfTr2vPBLxudX-UhHT1vW4htQ&s"
                alt='Loading image'
                className='rounded-3xl bg-clip-border w-[500px]'
                width={500}
                height={200}
                />
            </div>

        </div>
           
        </div>

        <div className='p-4 bg-gray-100 px-5'>

          <div className='mx-5'>
            <div className='flex justify-center items-center'>
            <h1 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-3xl font-bold font-sans'>
                About The Course
            </h1>
            </div>
            <div className='flex'>
            <div className='bg-gray-50 text-blue-600 p-3 rounded-md w-3/5'>
              <p className='text-xl font-bold'>
                {course?.about?.title}
              </p>
              <p className='text-base text-gray-600'>
                {course?.about?.aboutDetails}
              </p>
              <div className='grid grid-cols-2 m-4'>
                {
                  course?.about?.aboutDetails.map((detail, index) => (
                    <div key={index} className='flex gap-2'>
                      <FontAwesomeIcon icon={faCircleCheck} className='text-green-600'/>
                      <h1>{detail}</h1>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='bg-gray-50 text-blue-600 div-3 text-2xl font-bold rounded-md w-2/5 h-1/5'>
               <Image 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FAuSwgzuz-CeH4_GEzIEQRScYeh3i3M9RQ&s' 
               alt='/' 
               className='w-full h-full' 
                width={500}
                height={200}
               />
            </div>
            </div>

            <br />
            <p className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-xs font-bold font-sans'>
                Key Highlights Of LJMUs MS In Data Science
            </p>
            
            <div>
            <h1 className='text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
                What does this course have to offer?
            </h1>

            <div>
              {course?.courseOfferings?.map((offering, index) => (
                <div key={index} className='flex gap-2'>
                  <FontAwesomeIcon icon={faCircleCheck} className='text-green-600'/>
                  <h1>{offering.title}</h1>
                  {offering.details.map((detail, index) => (
                    <div key={index} className='flex gap-2'>
                      <FontAwesomeIcon icon={faCircleCheck} className='text-green-600'/>
                      <h1>{detail}</h1>
                    </div>
                  ))}
               </div>
              ))}
            </div>


          </div>
        </div>

        <br />

        <div>
        <div className="flex flex-col px-4">


      {/* <div>
        <Syllabus/>
  </div> */}
      <h1 className='text-2xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
         What our learners have achieved
      </h1>
      <div className='grid grid-cols-2 bg-gray-200 justify-between p-4 rounded-lg w-1/2'>
          <div>
              <p className='text-gray-800'>Avg. Salary Hike</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>40%</h3>
          </div>
          <div>
              <p className='text-gray-800'>Hiring Partners</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>300+</h3>
          </div>
          <div>
              <p className='text-gray-800'>Career Transitions</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>100+</h3>
          </div>
          <div>
              <p className='text-gray-800'>Avg. Outcome Achieved</p>
              <h3 className='bg-gradient-to-r from-amber-400 via-orange-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl font-bold font-sans'>90%</h3>
          </div>
      </div>

      <br />

      <div className="flex items-center justify-center gap-5 pt-10 pb-4">
      <div className="max-w-screen-lg p-4 bg-gray-100">
      <div className="flex justify-center items-center p-5">
      <h1 className="text-4xl font-bold uppercase bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Master these Tools</h1>
      </div>
     
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
     
      </div>
      </div>
      </div>

      <div className="flex items-center justify-center gap-5 pt-10 pb-4">
      <div className="max-w-screen-xl p-4 bg-gray-50">
      <div className="flex justify-center items-center p-5">
      <h1 className="text-4xl font-bold uppercase bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Our Mentors</h1>
      </div>
      
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
     
      </div>
      </div>
      </div>

      <div className="flex items-center justify-center gap-5 pt-10 pb-4">
      <div className="max-w-screen-lg p-4 bg-gray-100">
      <div className="flex justify-center items-center p-5">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">Our Alumni are placed at...</h1>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
     
      </div>
      </div>
      </div>

      <div className='flex flex-col justify-center items-center'>
    <h1 className='text-3xl font-bold bg-gradient-to-r from-amber-300 via-orange-500 to-red-600 text-transparent bg-clip-text font-body bg-blue-100 w-fit p-2 rounded-md mt-3'>
        Get Certified
    </h1>
    <div className="flex flex-col md:flex-row justify-between items-center">
    {/* Left side content */}
    <div className="w-2/3 p-4">
        {/* Content here */}
        <h2 className="text-base font-bold mb-4">Once you compliete the course video, assignments and quizzes you will be able to generate the certificate</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, debitis?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, debitis?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, debitis?</li>
        </ul>
    </div>
    {/* Right side image */}
    <div className="w-1/3">
        <Image 
          src="https://skilledup.tech/assets/img/team/certificate.jpg" 
          alt="Image" 
          width={500}
          height={200} 
          />
    </div>
    </div>
    </div>


    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CourseDetails