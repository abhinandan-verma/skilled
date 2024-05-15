"use clients"
import Image from 'next/image'
import banner from '../assets/banner-img.png'
import React, { useEffect, useState } from 'react'
import { Button } from "./ui/button"
import { courses } from '../data/test.json';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import bgimg from '../assets/banner-bg.png'
import bannerbook from '../assets/banner-book.png'
import bannervideo from '../assets/banner-video.png'
import bannerstar from '../assets/banner-star.png'
import bannstar from '../assets/banner-star2.png'
import bannercap from '../assets/banner-cap.png'
import bannermap from '../assets/banner-map.png'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function HeroSection() {

  return (
    <div>
      <div className='bg-blue-900 min-w-full flex flex-col justify-center items-center pb-5 pt-10 md:pt-64 sm:pt-64 lg:pt-36 min-w-screen-lg'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='lg:w-1/2 items-center p-5 lg:px-20'>
            <h1 className='text-orange-500 text-4xl lg:text-5xl font-black mb-3 text-center lg:text-left'>A Better Learning Journey</h1>
            <p className='text-white text-center lg:text-left font-medium'>
              SkilledUp offers a range of classes designed to help you learn new skills at your own pace. Get access to expert instruction and community support.
            </p>
            <div className='mt-5 lg:mt-10 flex flex-col gap-4 w-full max-w-lg bg-white p-5 lg:p-10 border rounded-lg'>
              <h1 className='text-black text-bold text-center lg:text-left text-xl lg:text-3xl mb-3'>Get Personalised Courses</h1>
              <select className='border-2 border-blue-500 p-2 rounded-lg text-blue-600'>
                <option className='text-blue-600'>Select your Course</option>
                <option>Data Scientist</option>
                <option>Machine Learning </option>
                <option>Full Stack Developer</option>
                <option>Web Developer</option>
                <option>App Developer</option>
              </select>
              <select className='border-2 border-blue-600 p-2 rounded-lg text-blue-600'>
                <option>Select Qualification</option>
                <option>Working Professional</option>
                <option>Post-Graduate</option>
                <option>Graduate</option>
                <option>Undergraduate</option>
                <option>Senior Secondary or Below</option>
              </select>
              <Button className='bg-gradient-to-r from-blue-500 via-blue-600 to-red-600 w-full'>
                Get Started
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 bg-[url('/assets/banner-bg.png')]">
            <Image className='border-xl border-orange-500 border-solid bg-orange-500 rounded-full p-5 lg:p-8 mx-6 lg:mx-12'
              src={banner}
              alt='Loading image'
              width={500}
              height={500}
            />
            <Image className=' absolute top-45 right-50 bottom-0 hidden md:block'
              src={bannerstar}
              alt='banner-star'
            />
            <Image className=' absolute top-36 right-56 bottom-0 hidden md:block'
              src={bannermap}
              alt='banner-star'
            />
            <Image className=' absolute top-60 right-62 bottom-0 hidden md:block'
              src={bannercap}
              alt='banner-cap'
            />
            <Image className=' absolute top-40 right-1/3 bottom-0 hidden md:block'
              src={bannstar}
              alt='banner-star'
            />
            
            <Image className='absolute top-260 right-40 bottom-0 hidden md:block'
              src={bannerbook}
              alt='banner-book'
            />
            <Image className='absolute top-0 right-0 bottom-0 '
              src={bgimg}
              alt='banner-bg'
            />
          </div>
        </div>
        <div className='items-center justify-center flex bg-gradient-to-r from-blue-500 from-10% via-blue-600 via-30% to-red-500 to-90% p-1 w-full lg:w-3/6 rounded-3xl mb-3'>
          <div className='rounded-3xl p-5 lg:p-10 bg-white shadow-lg h-auto lg:h-40 flex gap-5 lg:gap-11 w-full justify-center items-center'>
            <h1 className='bg-gradient-to-r from-blue-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl lg:text-4xl font-bold '>
              50+
              <p className='text-black text-xl lg:text-2xl'>Courses</p>
            </h1>
            <div className='h-8 lg:h-16 w-0.5 bg-gray-300'></div>
            <h1 className='p-5 lg:p-10 bg-gradient-to-r from-blue-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl lg:text-4xl font-bold '>
              8000+
              <p className='text-black text-xl lg:text-2xl'>Learners</p>
            </h1>
            <div className='h-8 lg:h-16 w-0.5 bg-gray-300'></div>
            <h1 className='bg-gradient-to-r from-blue-600 to-red-600 inline-block text-transparent bg-clip-text text-2xl lg:text-4xl font-bold '>
              1000+
              <p className='text-black text-xl lg:text-2xl'>Certified</p>
            </h1>
          </div>
        </div>
      </div>


    </div>

  )
}

export default HeroSection