"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CoursesCategory = () => {
  const [showAllSm, setShowAllSm] = useState(false);

  return (
    <div className="mb-[64px] text-center">
      {/* Header Section */}
      <div className="lg:m-20 flex-col sm:px-0 lg:px-40 sm:m-5">
        <h1 className="font-bold lg:text-[48px] sm:mb-3 sm:text-[32px] text-center">
          Explore Courses By Category
        </h1>
        <p className="text-lg">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      {/* Courses Section */}
      <div className="lg:grid bg-white lg:grid-cols-3 lg:gap-6 sm:flex sm:flex-col sm:gap-8 items-center justify-center">
        {/* First 3 Courses (Always Visible) */}
        <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
          <Image src="/courses/course 1.svg" width={100} height={100} alt="Design & Development" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Design & Development
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
          <Image src="/courses/course 2.svg" width={100} height={100} alt="Marketing" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Marketing
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
          <Image src="/courses/course 3.svg" width={100} height={100} alt="Development" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Development
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Additional Courses (Controlled by showAllSm) */}
        <div className={`
          flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 
          ${showAllSm ? 'sm:flex' : 'sm:hidden'} lg:flex
        `}>
          <Image src="/courses/course 4.svg" width={100} height={100} alt="Communication" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Communication
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className={`
          flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 
          ${showAllSm ? 'sm:flex' : 'sm:hidden'} lg:flex
        `}>
          <Image src="/courses/course 5.svg" width={100} height={100} alt="Digital Marketing" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Digital Marketing
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className={`
          flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 
          ${showAllSm ? 'sm:flex' : 'sm:hidden'} lg:flex
        `}>
          <Image src="/courses/course 6.svg" width={100} height={100} alt="Self Development" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Self Development
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className={`
          flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 
          ${showAllSm ? 'sm:flex' : 'sm:hidden'} lg:flex
        `}>
          <Image src="/courses/course 7.svg" width={100} height={100} alt="Business" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Business
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className={`
          flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 
          ${showAllSm ? 'sm:flex' : 'sm:hidden'} lg:flex
        `}>
          <Image src="/courses/course 8.svg" width={100} height={100} alt="Finance" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Finance
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        <div className={`
          flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 
          ${showAllSm ? 'sm:flex' : 'sm:hidden'} lg:flex
        `}>
          <Image src="/courses/course 9.svg" width={100} height={100} alt="Consulting" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Consulting
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>
      </div>


      <div className="mt-14 flex items-center justify-center">
        <button
          onClick={() => setShowAllSm(!showAllSm)}
          className="sm:ml-[80px] border py-3 px-6 rounded-[5px] border-black sm:block lg:block"
        >
          {showAllSm ? "Hide" : "View All"} Courses
        </button>
      </div>
    </div>
  );
};

export default CoursesCategory;