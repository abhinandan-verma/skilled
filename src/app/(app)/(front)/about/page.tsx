import React from 'react'
import Image from 'next/image'
import aboutimg from '../../assets/certificate_b.jpeg'
import aboutone from '../../assets/About-one.png'
import abouttwo from '../../assets/about-two.png'
import aboutthree from '../../assets/about3.png'
import Nav from '@/components/Nav/Navbar'
import Footer from '@/components/Footer'


function page() {
  return (
    <div>
      <div className="bg-gray-100">
        <Image src={aboutimg}
          alt="About"
          className="h-80 w-full object-cover" />
        <div className="text-white text-4xl font-bold absolute top-28 left-24 underline decoration-2 underline-offset-8">
          About Us
        </div>
        <h2 className="text-white text-xl font-semibold absolute top-44 left-10 right-1/2">
          Skilledup started as an educational company, It provides technical training and certifications to students/professionals and prepares them for job opportunities.
        </h2>
        <div>
          <div className="bg-gray-200 rounded-full p-96  mx-80 my-2 shadow-xl">
            <div className="flex items-center justify-center absolute top-96 mt-7 left-1/3 ml-16 h-96 w-96 rounded-full bg-gradient-to-b from-blue-300 to-blue-500">
              <h1 className="underline decoration-2 underline-offset-8 text-white text-4xl font-bold absolute left-18 bottom-60">OUR MISSION</h1>
              <Image src={aboutthree}
                alt="ourmission"
                className="h-24 w-24 absolute bottom-24 right-34" />
            </div>
            <div className="text-lg font-medium p-4 absolute top-96 mt-20 left-3 right-2/3 mr-10 border-t-4 border-b-2 border-blue-500">
              Our goal is to make affordable education and experiential skills accessible to everyone regardless of their disparate economic and educational backgrounds. We empower students to make a bright career for their own future.
            </div>
            <div className="absolute right-1/2 top-96 mt-80 h-96 w-96 rounded-full bg-gradient-to-b from-green-300 to-green-500">
              <h1 className="underline decoration-2 underline-offset-8 text-white text-4xl font-bold absolute left-36 bottom-60">TEAM</h1>
              <Image
                src={abouttwo}
                alt="team"
                className="h-28 w-64 absolute bottom-24 right-16" />
            </div>
            <div className="text-lg font-medium p-4 mt-52 absolute left-3 right-2/3 mr-16 border-t-4 border-b-2 border-green-300">
              We consist of very passionate, smart and hardworking team members. They research on new technology innovate new ides and explore them. Every team member is very supportive and create a good team work.
            </div>
            <div className="flex items-center justify-center absolute left-1/2 top-96 mt-80 h-96 w-96 rounded-full bg-gradient-to-b from-orange-300 to-orange-500">
              <h1 className="underline decoration-2 underline-offset-8 text-white text-4xl font-bold absolute left-18 bottom-60">OUR VISION</h1>
              <Image
                src={aboutone}
                alt="ourvision"
                className="h-28 w-28 absolute bottom-24 right-32" />
            </div>
            <div className="text-lg font-medium p-4  absolute right-3 left-2/3 ml-16 border-t-4 border-b-2 border-orange-500">
              To create a network enabling digital inclusion of Bharat driven by continuous innovation and integrating new services in platform.
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
    
  )
}

export default page