import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import footerLogo from '../assets/logo.png'
import { faGlobe, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerbg from '../assets/support-bg-1.png'

const Footer = () => {
  return (

    <footer className="bg-blue-950 text-white  pt-10" >
      {/* <Image class
      src={footerbg}
      alt='footerbg'
      height={800}
      width={1400}
      /> */}
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 lg:w-1/4 px-4">
        <div className='flex-shrink-0'>
                        <a href="/">
                       <Image 
                       src={footerLogo}
                       alt="footer logo"
                       width={250}
                       height={250}
                       />
                        </a>
                    </div>
                    <p className='m-5 text-lg text-violet-300 hover:text-white'> 
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <div className='flex p-5 gap-4  flex-wrap'>
                        <FaLinkedin className='text-white hover:bg-indigo-900 bg-blue-900 p-2 rounded-full text-4xl' />
                        <FaTwitter className='text-white hover:bg-indigo-900 bg-blue-900 p-2 rounded-full text-4xl' />
                        <FaInstagram className='text-white hover:bg-indigo-900 bg-blue-900 p-2  rounded-full  text-4xl' />
                        <FaFacebook className='text-white hover:bg-indigo-900 bg-blue-900 p-2  rounded-full  text-4xl' />
                      </div>
                      </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <h2 className="text-white text-3xl font-semibold mb-4  p-2 ">Quick Links</h2>
          <ul className="text-xl grid grid-rows-3 gap-2">
            <li><a href="/about-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Latest Course</a></li>
            <li><a href="/contact-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Job Portal</a></li>
            <li><a href="/faq" className='m-5 text-lg text-violet-300  hover:text-orange-500 transition transform hover:-translate-x-1'>Job Assistance</a></li>
            <li><a href="/terms" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Live Classes</a></li>
            <li><a href="/career" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-2'>Career</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 lg:w-1/4">
          <h2 className="text-white text-3xl font-semibold mb-4  p-2 ">Explore</h2>
          <ul className="text-xl grid grid-rows-3 gap-2">
            <li><a href="/about-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>About Us</a></li>
            <li><a href="/contact-us" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Contact Us</a></li>
            <li><a href="/faq" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>FAQ</a></li>
            <li><a href="/terms" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>T & C</a></li>
            <li><a href="/privacy" className='m-5 text-lg text-violet-300 hover:text-orange-500 transition transform hover:-translate-x-1'>Privacy Policy</a></li>
           
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4">
          <h2 className="text-white text-3xl font-semibold mb-4 p-2 ">Contact Us</h2>
            <p className='m-5 text-lg text-violet-300 hover:text-white transition transform hover:-translate-x-1'><FontAwesomeIcon className='text-orange-500 gap-2' icon={faLocationDot} /> {' '} Office No - 111 & 112, NB Plaza, Greater Noida West, Uttar Pradesh, India - 201306</p>
            <p className='m-5 text-lg text-violet-300 hover:text-white transition transform hover:-translate-x-1'> <FontAwesomeIcon className='text-orange-500 gap-2' icon={faPhone}/> {' '} 0120 6053422</p>
          <div className='m-5 text-lg text-violet-300 hover:text-white transition transform hover:-translate-x-1'>
            <Link href="/" ><FontAwesomeIcon className='text-orange-500 gap-2' icon={faGlobe} /> {' '} www.skilledUp.com</Link>
            <br />
            <Link href="/"><FontAwesomeIcon className='text-orange-500 gap-2' icon={faMessage} /> {' '} info@skilledup.tech</Link>
          </div>

            <form action="submit" className='flex gap-2'>
              <input type="email" placeholder="Enter your email" className="bg-transparent text-violet-300 font-bold border solid border-indigo-600 rounded-md w-60" />
              <input type="submit" value="Subscribe" 
              className="bg-gradient-to-r p-3 from-orange-300 via-orange-500  to-orange-600 text-white font-bold rounded-md   cursor-pointer" />
            </form>
          </div>

        <div className="w-full md:w-1/3 lg:w-1/4 px-4">
          {/* Add your content here */}
        </div>
      </div>
         <div className='bg-indigo-950'>  
      <p className="text-center text-lg mt-5">© Copyright skilledUp. All Rights Reserved </p>
     <span className='flex justify-center text-lg  mb-[-3rem] '>Designed by skilledUp</span>
         </div>
    </footer>
    
  );
};

export default Footer;