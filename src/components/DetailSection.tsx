import React from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
 import imgbook from '../assets/icon-book.png'
 import imglight from '../assets/icon-light.png'
 import imgwebinar from '../assets/icon-webinar.png'
 import imgneural from '../assets/icon-neural.png'
 import Image from 'next/image'

function DetailSection() {
  return (
<> 


<h3 className='mx-5 my-3 text-black font-bold text-xl md:text-2xl lg:text-3xl'>Key Features</h3>

<div className='flex flex-wrap justify-center gap-5 mb-5'>

  <div className="card flex flex-col rounded-lg border bg-white p-5 shadow-md w-full md:w-80 transition-transform hover:-translate-y-2 hover:shadow-lg">
    <Image className='rounded-2xl bg-blue-900 hover:bg-orange-500 p-2' src={imgbook} alt="icon-book" width={70} height={70} />
    <h3 className="text-black font-bold my-2 text-lg md:text-xl lg:text-2xl">
      <a href="#">Exclusive Coach</a>
    </h3>
    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit</p>
    <a className="text-blue-900 font-bold hover:text-orange-500 my-2" href="#">Read More</a>
  </div>

  <div className="card flex flex-col rounded-lg border bg-white p-5 shadow-md w-full md:w-80 transition-transform hover:-translate-y-2 hover:shadow-lg">
    <Image className='rounded-2xl bg-blue-900 p-2' src={imglight} alt="icon-light" width={70} height={70} />
    <h3 className="text-black font-bold my-2 text-lg md:text-xl lg:text-2xl">
      <a href="#">Creative Minds</a>
    </h3>
    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit</p>
    <a className="text-blue-900 font-bold hover:text-orange-500 my-2" href="#">Read More</a>
  </div>

  <div className="card flex flex-col rounded-lg border bg-white p-5 shadow-md w-full md:w-80 transition-transform hover:-translate-y-2 hover:shadow-lg">
    <Image className='rounded-2xl bg-blue-900 p-2' src={imgwebinar} alt="icon-webinar" width={70} height={70} />
    <h3 className="text-black font-bold my-2 text-lg md:text-xl lg:text-2xl">
      <a href="#">Video Tutorials</a>
    </h3>
    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit</p>
    <a className="text-blue-900 font-bold hover:text-orange-500 my-2" href="#">Read More</a>
  </div>

  <div className="card flex flex-col rounded-lg border bg-white p-5 shadow-md w-full md:w-80 transition-transform hover:-translate-y-2 hover:shadow-lg">
    <Image className='rounded-2xl bg-blue-900 p-2' src={imgneural} alt="icon-neural" width={70} height={70} />
    <h3 className="text-black font-bold my-2 text-lg md:text-xl lg:text-2xl">
      <a href="#">Worlds Record</a>
    </h3>
    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit</p>
    <a className="text-blue-900 font-bold hover:text-orange-500 my-2" href="#">Read More</a>
  </div>

</div>

  </>


  )
}

export default DetailSection
