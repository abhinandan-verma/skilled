import React from 'react'
import Image from 'next/image'
import chatbg from '../assets/cta-bg-1.jpg'
import ctalogo from '../assets/cta-logo.png'
import ctashape from '../assets/cta-shape-1.png'
import { Button } from '@nextui-org/react'
import bannershape from '../assets/banner-1-shape-1.png'
import ctaimg from '../assets/cta-1.png'
import ctaicon from '../assets/cta-icon.png'
import supportbg from '../assets/support-bg-1.png'

function Support() {
  return (
    <div>
        <div className='relative bg-blue-900 w-full py-52 my-5 lg:grid flex items-center justify-center  '>
            <Image
            src={ctaicon}
            alt='ctaicon'
            width={400}
            height={400}
            className='absolute top-0 left-0 '
            />
            <Image  
             className='absolute top-20 left-28'
            src={ctalogo}
            alt='ctalogo'
            />
            <Image  
            className=' absolute top-52 lg:left-1/4 right-32'
            src={bannershape}
            alt='bannershape'
            />
            <Image  className=' absolute top-5 right-0 left-0'
            src={supportbg}
            alt='supportbg'
            />
            <Image
            className='absolute top-28 left-1/3 '
            src={ctashape}
            alt='ctashape'
            />
            <div className='absolute top-36 bottom-0 left-32'>
            <h1 className='text-white text-3xl font-extrabold m-1'>Talk To Our Counseller</h1>
            <p className='text-white text-sm font-bold m-2'>Get Expert Advice our Counsellor will connect to you within 24 hours.</p>
            <Button href=''
            className='bg-orange-500  text-lg font-bold py-4 text-white rounded-lg m-1 px-4'
            >Get Connected Now</Button>

            </div>
            <Image  className=' absolute right-24  top-8 bottom-0 bg-orange-500 rounded-full p-5  hidden md:block'
            src={ctaimg}
            alt='cta1'
            width={350}
            height={350}
            />

        </div>
    </div>
  )
}

export default Support