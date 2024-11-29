"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Team= () => {

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="bg-[#F7F7F7]">
\
      <div className="py-28 px-16 sm:items-center">
        <h1 className="font-bold lg:text-5xl sm:text-3xl text-center mb-10">
          Our Team
        </h1>
        <p className="text-center text-lg font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="sm:items-center flex sm:flex-col lg:grid lg:grid-cols-3 gap-16">

        <div className="w-[395px] h-[210px] justify-items-center">
          <Image src="/Images/team1.svg" width={80} height={80} alt="" />
          <h1 className="mt-5 mb-1 font-semibold text-xl">James Nduku</h1>
          <p className="font-normal text-lg mb-5">Marketing Coordinator</p>
          <div className="flex gap-[14px]">
            <Link href="#">
              <Image src="/icon/LinkedIn.svg" width={24} height={24} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <Image src="/icon/Twitter.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src="/icon/Dribble.svg" width={24} height={24} alt="Dribble" />
            </Link>
          </div>
        </div>

        <div className="w-[395px] h-[210px] justify-items-center">
          <Image src="/Images/team2.svg" width={80} height={80} alt="" />
          <h1 className="mt-5 mb-1 font-semibold text-xl">Joseph Munyambu</h1>
          <p className="font-normal text-lg mb-5">Nursing Assistant</p>
          <div className="flex gap-[14px]">
            <Link href="#">
              <Image src="/icon/LinkedIn.svg" width={24} height={24} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <Image src="/icon/Twitter.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src="/icon/Dribble.svg" width={24} height={24} alt="Dribble" />
            </Link>
          </div>
        </div>

     
        <div className="w-[395px] h-[210px] justify-items-center">
          <Image src="/Images/team3.svg" width={80} height={80} alt="" />
          <h1 className="mt-5 mb-1 font-semibold text-xl">Joseph Ngumbau</h1>
          <p className="font-normal text-lg mb-5">Medical Assistant</p>
          <div className="flex gap-[14px]">
            <Link href="#">
              <Image src="/icon/LinkedIn.svg" width={24} height={24} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <Image src="/icon/Twitter.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src="/icon/Dribble.svg" width={24} height={24} alt="Dribble" />
            </Link>
          </div>
        </div>

        <div
          className={`w-[395px] h-[210px] justify-items-center ${
            !showAll ? "hidden lg:block" : ""
          }`}
        >
          <Image src="/Images/team4.svg" width={80} height={80} alt="" />
          <h1 className="mt-5 mb-1 font-semibold text-xl">Erick Kipkemboi</h1>
          <p className="font-normal text-lg mb-5">Web Designer</p>
          <div className="flex gap-[14px]">
            <Link href="#">
              <Image src="/icon/LinkedIn.svg" width={24} height={24} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <Image src="/icon/Twitter.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src="/icon/Dribble.svg" width={24} height={24} alt="Dribble" />
            </Link>
          </div>
        </div>

        <div
          className={`w-[395px] h-[210px] justify-items-center ${
            !showAll ? "hidden lg:block" : ""
          }`}
        >
          <Image src="/Images/team5.svg" width={80} height={80} alt="" />
          <h1 className="mt-5 mb-1 font-semibold text-xl">Stephen Kerubo</h1>
          <p className="font-normal text-lg mb-5">President of Sales</p>
          <div className="flex gap-[14px]">
            <Link href="#">
              <Image src="/icon/LinkedIn.svg" width={24} height={24} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <Image src="/icon/Twitter.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src="/icon/Dribble.svg" width={24} height={24} alt="Dribble" />
            </Link>
          </div>
        </div>

        <div
          className={`w-[395px] h-[210px] justify-items-center ${
            !showAll ? "hidden lg:block" : ""
          }`}
        >
          <Image src="/Images/team6.svg" width={80} height={80} alt="" />
          <h1 className="mt-5 mb-1 font-semibold text-xl">John Leboo</h1>
          <p className="font-normal text-lg mb-5">Dog Trainer</p>
          <div className="flex gap-[14px]">
            <Link href="#">
              <Image src="/icon/LinkedIn.svg" width={24} height={24} alt="LinkedIn" />
            </Link>
            <Link href="#">
              <Image src="/icon/Twitter.svg" width={24} height={24} alt="Twitter" />
            </Link>
            <Link href="#">
              <Image src="/icon/Dribble.svg" width={24} height={24} alt="Dribble" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button
          variant={"MyStyle"}
          onClick={() => setShowAll(!showAll)}
          className=" w-20 h-10 px-6 py-2 lg:hidden "
        >
          {showAll ? "Hide All" : "View All"}
        </Button>
      </div>
    </div>
  );
};

export default Team;