
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CoursesCategory = () => {
  const [showAll, setShowAll] = useState(false);

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
      <div className="lg:grid bg-white lg:grid-cols-3 lg:gap-6 flex sm:flex-col sm:gap-8 items-center justify-center">
        {/* Course 1 */}
        <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
          <Image src="/courses/course 1.svg" width={100} height={100} alt="course 1" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Design & Development
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 2 */}
        <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
          <Image src="/courses/course 2.svg" width={100} height={100} alt="course 2" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Marketing
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 3 */}
        <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
          <Image src="/courses/course 3.svg" width={100} height={100} alt="course 3" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Development
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 4 */}
        <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${!showAll ? "hidden lg:block" : ""}`}>
          <Image src="/courses/course 4.svg" width={100} height={100} alt="course 4" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Communication
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 5 */}
        <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${!showAll ? "hidden lg:block" : ""}`}>
          <Image src="/courses/course 5.svg" width={100} height={100} alt="course 5" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Digital Marketing
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 6 */}
        <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${!showAll ? "hidden lg:block" : ""}`}>
          <Image src="/courses/course 6.svg" width={100} height={100} alt="course 6" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Self Development
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 7 */}
        <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${!showAll ? "hidden lg:block" : ""}`}>
          <Image src="/courses/course 7.svg" width={100} height={100} alt="course 7" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Business
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 8 */}
        <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${!showAll ? "hidden lg:block" : ""}`}>
          <Image src="/courses/course 8.svg" width={100} height={100} alt="course 8" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Finance
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>

        {/* Course 9 */}
        <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${!showAll ? "hidden lg:block" : ""}`}>
          <Image src="/courses/course 9.svg" width={100} height={100} alt="course 9" />
          <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
            <Link href="#" className="font-semibold lg:text-xl sm:text-base">
              Consulting
            </Link>
            <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-14">
        <button
          onClick={() => setShowAll(!showAll)}
          className="sm:ml-[80px] border py-3 px-6 rounded-[5px] border-black lg:hidden"
        >
          {showAll ? "Hide All " : "View All "} Courses
        </button>
        <div className="flex items-center justify-center">
        <button className="sm:hidden lg:grid border py-3 px-6 rounded-[5px] border-black">
          View All Courses
        </button>
        </div>
      </div>
    </div>
  );
};

export default CoursesCategory;

