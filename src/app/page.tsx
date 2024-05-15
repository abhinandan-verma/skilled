"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ApiResponse } from '@/types/ApiResponse';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Course } from '@/model/Course';
import Image from 'next/image';
import { Card, CardHeader, Spacer } from '@nextui-org/react';
import { CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { useWindowSize } from '@react-hook/window-size'
import CircularProgress from '@mui/material/CircularProgress';
import { Sparkle } from 'lucide-react';
import Nav from '@/components/Nav/Navbar';
import DetailSection from '@/components/DetailSection';
import Achiever from '@/components/Achiever';
import Support from '@/components/Support';
import Mentor from '@/components/Mentor';
import { Testimonial } from '@/components/Testimonial';


function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedTime, setSelectedTime] = useState<string>('All')
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  const [filteredByTimeCourses, setFilteredByTimeCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [windowWidth] = useWindowSize()
  const [route, setRoute] = useState<string>('/')


  const fetchCourses = useCallback(async () => {
    setLoading(true)
    console.log("fetching courses")
    try {

      console.log("fetching courses try block")

      const response = await axios.get<ApiResponse>('/api/get-courses')

      console.log("response: ", response.data.courses)

      if(response.data.courses !== undefined){

        setCourses(response.data.courses)
        setFilteredCourses(response.data.courses)

        console.log("response: ", response.data.courses)

        toast({
          title: "Courses Found",
          description: "Retrieved all Courses successfully",
          variant: "success"
        })

      }else{
        toast({
          title: "Error",
          description: "No courses found",
          variant: "success",
        })

        console.log("No courses found")
      }
      
    } catch (error) {
      console.log("error fetching courses: ", error)

      toast({
        title: "Error",
        description: "Error fetching courses",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  },[])


  useEffect(() => {
    fetchCourses()
  },[fetchCourses])

  useEffect(() => {
    if(selectedCategory === 'All'){
      setFilteredCourses(courses)
    }else{
      setFilteredCourses(courses.filter((course) => course.categories.includes(selectedCategory)))
    }
  }, [selectedCategory, courses])


  useEffect(() => {
    let now = new Date();
    let newFilteredByTimeCourses: Course[] = [];
  
    if (selectedTime === 'All') {
      newFilteredByTimeCourses = filteredCourses;
    } else if (selectedTime === 'Live') {
      newFilteredByTimeCourses = filteredCourses.filter((course) => {
        let startDate = new Date(course.startDate);
        let endDate = new Date(course.endDate);
        return startDate <= now && now <= endDate;
      });
    } else if (selectedTime === 'Upcoming') {
      newFilteredByTimeCourses = filteredCourses.filter((course) => {
        let startDate = new Date(course.startDate);
        return now < startDate;
      });
    } else if (selectedTime === 'Bootcamp') {
      newFilteredByTimeCourses = filteredCourses.filter((course) => {
        let endDate = new Date(course.endDate);
        return now > endDate;
      });
    }
  
    setFilteredByTimeCourses(newFilteredByTimeCourses)
    
  }, [selectedTime, filteredCourses]);   

  return (
   <main className=''>
     
    <HeroSection/>
    <DetailSection/>


    <Spacer className='h-[50px]'/>

    {/* Upper Tabbar with timing filter */}
    <div className='w-full p-1 sticky top-32' style={{ position: windowWidth > 1024 ? 'sticky' : 'static', top: 0, zIndex: 10 }} id='timebar'>
      <div className="flex gap-1  justify-between ">
        {
          ['All','Live', 'Upcoming', 'Bootcamp'].map(time => (
            <Button 
            variant="default"
            key={time}
            className={`py-2 px-4 rounded-lg w-full  ${
              selectedTime === time
                ? 'bg-blue-900 text-white hover:bg-blue-900'
                : 'text-gray-600 hover:bg-blue-900 hover:text-white bg-gray-300'
            }`}
            onClick={() => {
              console.log("time: ", time)
              
              setSelectedTime(time)
            }}
            >
              {time}
            </Button>
          )) 
        }
      </div>
    </div>

    <div className='lg:flex  bg-blue-100 p-1'>
    <div className='top-0 sticky z-10 bg-white p-1 lg:w-[250px] md:mr-5' id='sidebar'>
      <div className="flex lg:flex-col gap-2 lg:m-0 mb-5 justify-between " style={{ position: windowWidth > 1024 ? 'sticky' : 'static', top: 0, zIndex: 10 }}>
        {
          ['All','Programming', 'JavaScript', 'Python'].map(category => (
            <Button 
            variant="default"
            key={category}
            className={`py-2 px-4 rounded-lg w-full  ${
              selectedCategory === category
                ? 'bg-blue-900 text-white hover:bg-blue-900'
                : 'text-gray-600 hover:bg-blue-900 hover:text-white bg-gray-300'
            }`}
            onClick={() => {
              console.log("category: ", category)
             setSelectedCategory(category)
            }}
            >
              {category}
            </Button>
          )) 
        }
      </div>
    </div>

    {/* Main content area with course grid */}
    <div className="w-full  overflow-x-scroll lg:overflow-x-auto ">
        <div className="lg:grid lg:grid-cols-3 flex  gap-3 justify-center w-fit lg:w-full">
          
          {loading ? (
            <div className='flex justify-center items-center'>
              <CircularProgress color='success'/> 
              <br />
              <p>Loading Courses...</p>
            </div>
          ) : filteredByTimeCourses.length > 0 ? (
            filteredByTimeCourses.map(course => (
              <Card key={course?.name} className='rounded-2xl bg-white lg:max-w-sm w-fit mt-3' >
                <CardHeader className='w-full p-0 rounded-2xl' >
                  <Image
                    src={course.imageUrl}
                    alt='Loading Image...'
                    width={300}
                    height={160}
                    className=' w-full rounded-tl-2xl rounded-tr-2xl '
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
                      {/* Instructor: {course.mentors[0]} */}
                    </p>
                    
                  </div>
        
                <div className='flex justify-between  mb-2 rounded-2xl p-3 w-full'>
        
                <h2 className='font-bold font-sans text-2xl text-blue-700'>
                &#8377;{course.price || 0}
                  </h2>
                <p className='text-center'>
                    {course.duration || 0}
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
        
                <div className='flex flex-row justify-between items-center'>
                    <Button className=' text-orange-600 hover:bg-white px-12 py-2 bg-white border-orange-600 border-solid  border-2 rounded-md font-lg font-bold'
                    onClick={() => {
                      router.push(`/courses?id=${course._id}`)
                      toast({
                        title: "Course " + course.name,
                        description: "Navigating to course page",
                        variant: "success"
                      })
                    }}
                    >
                      Explore
                  </Button>
                  <Button className='bg-gradient-to-r from-orange-300  to-orange-600 text-white px-12 py-2 font-bold'>
                      Enroll Now
                  </Button>
                </div>
              </CardContent>
              
            </Card> 
            ))
          ) : (
            <div className='flex justify-center items-center flex-col text-lg bg-blue-300 w-full'>
              <h1 className='text-blue-600 text-2xl font-bold  p-5 w-full'>
                We are trying our Best to found Best Courses for you
                </h1>
              <p>but it seems, No courses were found</p>
              <br />
             
              <p className='text-bold bg-blue-500 text-white font-bold p-3 rounded-md flex gap-2 bg-opacity-70'>
              <Sparkle/> Try changing the filters
              </p>

            </div>
          )}
        </div>
    </div>
    </div>

    <Support/>
    <Mentor/>
    
    <Achiever/>
    <Testimonial/>

   </main>
  )
}

export default Home