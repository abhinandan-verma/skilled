import React from 'react'
import Image from 'next/image'
import certificatebg from '../../assets/certificate_b.jpeg'

function page() {
  return (
    <div>
        <div  className="flex justify-center items-center h-60">
      <Image className="h-64 w-full mt-10"
      src={certificatebg}
      alt='certificatebg'
      />
        </div>
      <div>
        <div className=" border-gray-500 p-16 shadow-2xl">
        <form className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-900 rounded-lg shadow-xl  mx-72 py-10 mb-1">
          {/* <div className="text-2xl font-bold text-center mt-14 pr-56 mb-5" >
            {/* <label htmlFor="Program Name">Program Name</label> */}
          {/* </div>  */}
          <div className='px-32 '>
            <select className="w-full h-12 border-4 rounded-lg p-2">
              <option value="Select Program"> Select Program</option>
              <option value="Data Science Pro">Data Science Pro</option>
              <option value="MySQL Quiz Competition">MySQL Quiz Competition</option>
              <option value="Power BI Workshop">Power BI Workshop</option>
              <option value="Full Stack Data Science">Full Stack Data Science</option>
              <option value="Python MasterClass">Python MasterClass</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Business Analytics">Business Analytics</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="MySQL Expert">MySQL Expert</option>
              <option value="Full Stack Business Analytics">Full Stack Business Analytics</option>
              <option value="Data Science MasterClass">Data Science MasterClass</option>
            </select>
          </div>
          {/* <div className="text-2xl font-bold text-center mt-14 mb-5">
            {/* <label htmlFor="Email">E-mail Address</label> */}
          {/* </div>  */}
          <div className="Email input px-32 mt-10 ">
            <input className="w-full h-12  border-4 rounded-lg" type="Email" id="Email" placeholder="Enter your Email" />
          </div>
          <div className="button flex items-center justify-center gap-5 mt-10 text-center">
            <button className="bg-blue-900 text-white py-2 px-6 font-semibold rounded">Show Certificate</button>
            <button className="bg-blue-900 text-white py-2 px-16 font-semibold rounded">Share</button>
          </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default page