"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Courses = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mb-28">
  
      <div className="px-16 py-16 text-center">
        <h1 className="font-bold text-[56px]">Courses</h1>
        <p className="m-4 mb-3">Your Ultimate Guide to Learning</p>
      </div>

      <div className="flex justify-center gap-6 text-center">
        <Link className="hover:underline hover:text-black hover:underline-offset-1" href={'#'}>Popular</Link>
        < Link className="hover:underline hover:text-black hover:underline-offset-1" href={'#'}>Recommended</Link>
        <Link  className="hover:underline hover:text-black hover:underline-offset-1" href={'#'}>Best Price</Link>
      </div>

   
      <div className="mt-14 mb-14 lg:grid lg:grid-cols-3 gap-12 sm:flex sm:flex-col sm:justify-center sm:items-center">
 
        <div className="bg-[#F7F7F7] lg:w-[416px] lg:h-[580px] sm:w-[300px] sm:h-[500px]">
          <Image
            src="/Images/course 1.svg"
            width={416}
            height={300}
            alt="UX/UI Design 201"
            className="lg:w-[416px] sm:w-[300px]"
          />
          <div className="px-4">
            <div className="flex justify-between font-semibold text-base mt-6 mb-2">
              <p>Design</p>
              <p className="flex gap-1 mr-4">
              <Image src="/icon/Star.svg" width={24} height={24} alt="star" />
                5.0
              </p>
            </div>
            <div>
              <Link href="#" className="font-bold text-2xl">
                UX/UI Design 201
              </Link>
              <p className="font-normal text-base lg:text-base sm:w-[280px] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4 h-10">
                <button className="border border-black py-2 px-5 rounded font-normal text-base">
                  Enroll Now
                </button>
                <p className="py-2 px-5 font-medium text-base">$400</p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="bg-[#F7F7F7] lg:w-[416px] lg:h-[580px] sm:w-[300px] sm:h-[500px]">
          <Image
            src="/Images/course 2.svg"
            width={416}
            height={300}
            alt="Introduction to Python"
          />
          <div className="px-4">
            <div className="flex justify-between font-semibold text-base mt-6 mb-2">
              <p>Programming</p>
              <p className="flex gap-1 mr-4">
              <Image src="/icon/Star.svg" width={24} height={24} alt="star" />
                5.0
              </p>
            </div>
            <div>
              <Link href="#" className="font-bold text-2xl">
                Introduction to Python
              </Link>
              <p className="font-normal text-base lg:text-base sm:w-[280px] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4 h-10">
                <button className="border border-black py-2 px-5 rounded font-normal text-base">
                  Enroll Now
                </button>
                <p className="py-2 px-5 font-medium text-base">$400</p>
              </div>
            </div>
          </div>
        </div>

     
        <div className="bg-[#F7F7F7] lg:w-[416px] lg:h-[580px] sm:w-[300px] sm:h-[500px]">
          <Image
            src="/Images/course 3.svg"
            width={416}
            height={300}
            alt="Data Analysis for Beginners"
          />
          <div className="px-4">
            <div className="flex justify-between font-semibold text-base mt-6 mb-2">
              <p>Business</p>
              <p className="flex gap-1 mr-4">
              <Image src="/icon/Star.svg" width={24} height={24} alt="star" />
                5.0
              </p>
            </div>
            <div>
              <Link href="#" className="font-bold text-2xl">
                Data Analysis for Beginners
              </Link>
              <p className="font-normal text-base lg:text-base sm:w-[280px] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4 h-10">
                <button className="border border-black py-2 px-5 rounded font-normal text-base">
                  Enroll Now
                </button>
                <p className="py-2 px-5 font-medium text-base">$400</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className={`bg-[#F7F7F7] lg:w-[416px] lg:h-[580px] sm:w-[320px] sm:h-[500px] ${
            !showAll ? "hidden lg:block" : ""
          }`}>
          <Image
            src="/Images/course 4.svg"
            width={416}
            height={300}
            alt="Art Specialization"
          />
          <div className="px-4">
            <div className="flex justify-between font-semibold text-base mt-6 mb-2">
              <p>Art</p>
              <p className="flex gap-1 mr-4">
              <Image src="/icon/Star.svg" width={24} height={24} alt="star" />
                5.0
              </p>
            </div>
            <div>
              <Link href="#" className="font-bold text-2xl">
                Art Specialization
              </Link>
              <p className="font-normal text-base lg:text-base sm:w-[280px] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4 h-10">
                <button className="border border-black py-2 px-5 rounded font-normal text-base">
                  Enroll Now
                </button>
                <p className="py-2 px-5 font-medium text-base">$400</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-[#F7F7F7] lg:w-[416px] lg:h-[580px] sm:w-[320px] sm:h-[500px] ${
            !showAll ? "hidden lg:block" : ""
          }`}>
          <Image
            src="/Images/course 5.svg"
            width={416}
            height={300}
            alt="Rule of Law"
          />
          <div className="px-4">
            <div className="flex justify-between font-semibold text-base mt-6 mb-2">
              <p>Law</p>
              <p className="flex gap-1 mr-4">
              <Image src="/icon/Star.svg" width={24} height={24} alt="star" />
                5.0
              </p>
            </div>
            <div>
              <Link href="#" className="font-bold text-2xl">
                Rule of Law
              </Link>
              <p className="font-normal text-base lg:text-base sm:w-[280px] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4 h-10">
                <button className="border border-black py-2 px-5 rounded font-normal text-base">
                  Enroll Now
                </button>
                <p className="py-2 px-5 font-medium text-base">$400</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className={`bg-[#F7F7F7] lg:w-[416px] lg:h-[580px] sm:w-[320px] sm:h-[500px] ${
            !showAll ? "hidden lg:block" : ""
          }`}>
          <Image
            src="/Images/course 6.svg"
            width={416}
            height={300}
            alt="Introduction to Webflow"
          />
          <div className="px-4">
            <div className="flex justify-between font-semibold text-base mt-6 mb-2">
              <p>Tech</p>
              <p className="flex gap-1 mr-4">
              <Image src="/icon/Star.svg" width={24} height={24} alt="star" />
                  5.0
              </p>
            </div>
            <div>
              <Link href="#" className="font-bold text-2xl">
                Introduction to Webflow
              </Link>
              <p className="font-normal text-base lg:text-base sm:w-[280px] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <div className="flex gap-4 h-10">
                <button className="border border-black py-2 px-5 rounded font-normal text-base">
                  Enroll Now
                </button>
                <p className="py-2 px-5 font-medium text-base">$400</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="flex items-center justify-center">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="border border-black rounded-md py-2 px-4 ">
           {showAll ? "Hide All " : "View All "}
           Courses
          
          </button>
      </div>
    </div>
  );
};

export default Courses;
