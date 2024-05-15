import React from 'react'
import salary from '../assets/salary.png'
import job from '../assets/job.png'
import  diagram from '../assets/diagram.png'
import repost from '../assets/repost.png'
import Image from 'next/image'

function Achiever() {
    const dummyAlumni = [

        {
          id: 1,
          image: "https://cdn.pwskills.com/assets/uploads/company_logos/be07f8d6-bbd5-4367-99fe-ad54a227757a.png",
        },
        {
          id: 2,
          image: "https://cdn.pwskills.com/assets/uploads/company_logos/611c4925-47b6-4506-845a-97d8539e4813.png",
        },
        {
          id: 3,
          image: "https://cdn.pwskills.com/assets/uploads/company_logos/31dd96fc-5b48-46e4-8357-3f8d1921f48e.png",
        },
        {
          id: 4,
          image: "https://cdn.pwskills.com/assets/uploads/company_logos/148a59bf-aa54-429c-af90-0d55cd8097a3.jpeg",
        },
        {
          id: 5,
          image: "https://cdn.pwskills.com/assets/uploads/company_logos/7c9090ad-3044-4685-b6e9-19de64546ca0.png",
        },
        {
            id: 6,
            image: "https://cdn.pwskills.com/assets/uploads/company_logos/9facebda-2c81-4d0d-a3ae-598d5bcaafc5.png",
          },
          {
            id: 7,
            image: "https://cdn.pwskills.com/assets/uploads/company_logos/b2d5c985-3e04-4a32-aab2-c0deb87dfb5f.png",
          },
          {
            id: 8,
            image: "https://cdn.pwskills.com/assets/uploads/company_logos/9207eab7-b14e-4bda-9743-6b2ee1729a68.png",
          },
          {
            id: 9,
            image: "https://cdn.pwskills.com/assets/uploads/company_logos/8ee223de-0021-4c71-89dc-aa2c122d5bae.png",
          },
          {
            id: 10,
            image: "https://cdn.pwskills.com/assets/uploads/company_logos/dad8fba5-8d38-4d07-99b5-949b8e6e40d0.png",
          },
        // Add more dummy data as needed
      ];
  return (
    <div>
        <div className="flex  items-center justify-center gap-5 pt-10 pb-4">
    <div className=" max-w-screen-lg p-5">
    <div className="flex justify-center items-center p-8">
    <h1 className="text-3xl font-bold bg-black  text-transparent bg-clip-text">Our Achievers <span className='bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text'>are placed at...</span></h1>
    </div>
   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
   {dummyAlumni.map((skill) => (
      <div key={skill.id} className="border h-4/6 w-4/6 border-gray-300 p-3 rounded-3xl bg-white flex flex-col justify-center items-center">
        <img src={skill.image} alt='/' className='h-full w-full' />
      </div>
     
    ))}
    </div>

    <div className=' flex  flex-col md:flex-row justify-center items-center gap-5 '>
       <div className='flex  z-30 card border rounded-xl py-3 md:w-1/4 w-2/3  bg-blue-300 '>
       <Image className='bg-white rounded-lg border m-3 p-1 text-start '
       src={diagram}
       alt="diagram" 
       width={50}
       height={50}
       />
       <div className='text-start'>
       <h1  className='text-3xl font-extrabold'>55%</h1>
       <p className='text-md text-400 text-gray-600 '>Average salary Hike</p>
       </div>
       </div>
       <div className='flex  z-30 card border rounded-xl py-3 md:w-1/4 w-2/3  bg-yellow-300'>
       <Image className='bg-white rounded-lg border m-3 P-1 text-start '
       src={salary}
       alt="salary" 
       width={50}
       height={50}
       />
       <div className='text-start'>
       <h1  className='text-3xl font-extrabold'>15 Lakh</h1>
       <p className='text-md text-400 text-gray-600 '>Highest Package</p>
       </div>
       </div>
      
       <div className='flex  z-30 card border rounded-xl py-3 md:w-1/4 w-2/3  bg-green-300'>
       <Image className='bg-white rounded-lg border m-3 p-1 text-start '
       src={repost}
       alt="repost" 
       width={50}
       height={50}
       />
       <div className='text-start '>
               <h1 className='text-3xl font-extrabold'>3000+</h1>
       <p className='text-md  text-gray-600 '>Career Transforms</p>
       </div>
       </div>
       <div className='flex  z-30 card border rounded-xl bg-orange-300 py-3 md:w-1/4 w-2/3 '>
       <Image  className='bg-white rounded-lg border m-3 text-start '
       src={job}
       alt="job" 
       width={50}
       height={50}
       />
       <div className='text-start mx-2'>
       <h1 className='text-3xl font-extrabold'>100+</h1>
       <p className='text-md text-400 text-gray-600 '>Hiring Partner</p>
       </div>
       </div>
      </div>


    </div>
        </div>
</div>
  )
}

export default Achiever