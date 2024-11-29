"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";


const Navbar = () => {
   const[isClick ,setisClick] = useState(false);
  
   const toggleMenu =() =>{
 setisClick(!isClick) ;

   }

  return (
    <div className="mt-3 sm:mt-0 w-screen flex items-center justify-between px-6 lg:px-16 h-[72px] bg-[#F7F7F7] border-t border-b border-[#676767] relative z-10">

      <Image src="/icon/Ddsgnr.svg" width={132} height={42} alt="Ddsgnr" />

      <ul className="hidden lg:flex space-x-16">
        <li>
          <Link href="#" className="text-black hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Courses
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Achievement
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Testimonial
          </Link>
        </li>
      </ul>

      
      <div className="hidden lg:flex gap-6">
        <Link href="#" className="border px-4 py-2 rounded border-black hover:bg-gray-200 text-center">
          Login
        </Link>
        <Link href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-center">
          Sign Up
        </Link>
      </div>
      <button 
         className="lg:hidden flex items-center justify-center w-10 h-10 "
          onClick={toggleMenu} >
          <Image
          src={isClick ? "/icon/close.svg" : "/icon/open.svg"}  
          alt={isClick ?"Close" : "Open"}
          height={24}
          width={24}
          />
      </button>

      {isClick && (
         <div  className="absolute top-full left-0 w-full bg-[#F7F7F7] shadow-lg border-t border-[#676767] z-20">
            
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <Link href="#" className="text-black hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Courses
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Achievement
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            About Us
          </Link>
        </li>
        <li>
          <Link href="#" className="text-black hover:underline">
            Testimonial
          </Link>
        </li>
      </ul>

      
      <div className=" flex flex-col space-y-4">
        <Link href="#" className="border px-4 py-2 rounded border-black hover:bg-gray-200 text-center">
          Login
        </Link>
        <Link href="#" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-center">
          Sign Up
        </Link>
      </div>
         </div>
        

      )}
     
    </div>
  )}
export default Navbar
