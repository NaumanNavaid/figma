"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Header from './component/header'
import Navbar from './component/navbar'
import Image from 'next/image'
import Courses from './component/courses'
import Team from './component/team'
import Footer from './component/footer'
import Testimonial from './component/testimonial' 

const Home  = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='h-screen w-screen'> 
       <Header />
         <Navbar />
         <div className='lg:flex m-0 lg:flex-row sm:flex-col'>
            <div className='md:pt-40 sm:py-20 sm:pl-6 flex-col  '>
                <h1 className='md:pl-20 sm:pl-0   sm:text-[40px] md:text-[54px] font-bold'>
                     Learn new skills <br />online with ease
                 </h1>
                 <p className=' md:pl-[69px] sm:pl-0 sm:m-0 sm:mt-2  text-lg font-normal  sm:w-[360px] lg:w-[520px] h-[54px] m-4 '>
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
 
                <div className='flex-row space-x-4 md:pl-20 mt-10'>
                   <button className='bg-black text-white rounded-md px-4 py-2'>Start learning now</button>
                    <button className='rounded-md px-4 py-2 border border-black'>Explore Courses</button>
                </div>
           </div >


<div className='lg:pl-[235px] lg:mt-0  sm:mt-5 sm:pl-0'>
<Image
src="/Images/figma.svg"
width={640}
height={900}
alt='figma'
className='lg:h-auto lg:w-[640px] sm:w-full sm:h-auto object-contain'
/>
</div>
</div>
<div className='flex lg:flex-row sm:flex-col h-[228px] bg-[#F7F7F7] items-center justify-between'>
<div className='font-bold text-2xl sm:hidden lg:flex'>
Trusted by 2000+ companies <br /> worldwide.
</div>
<div className='font-bold text-lg sm:flex mt-8 lg:hidden'>
Trusted by the world&#39;s best companies <br />[social proof to build credibility]
</div>
<div className='sm:mb-16'>
   <Image
   src="/icon/Logos.svg"
   width={800}
   height={100}
   alt='Logos'
   className='sm-h[100px]'
   />

</div>
</div>

<div className="mb-[64px] text-center">
  <div className="lg:m-20 sm:m-5 lg:px-40 sm:px-0 flex-col">
    <h1 className="font-bold lg:text-[48px] sm:mb-3 sm:text-[32px] text-center">
      Explore Courses By Category
    </h1>
    <p className="text-lg">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </p>
  </div>

 
  <div className="lg:grid lg:grid-cols-3 lg:gap-6 flex sm:flex-col sm:gap-8 items-center justify-center bg-white">
    <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
      <Image src="/courses/course 1.svg" width={100} height={100} alt="course 1" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Design & Development
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
      <Image src="/courses/course 2.svg" width={100} height={100} alt="course 2" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Marketing
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className="flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4">
      <Image src="/courses/course 3.svg" width={100} height={100} alt="course 3" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Development
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${
            !showAll ? "hidden lg:block" : ""
          }`}>
      <Image src="/courses/course 4.svg" width={100} height={100} alt="course 4" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Communication
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${
            !showAll ? "hidden lg:block" : ""
          }`}>
      <Image src="/courses/course 5.svg" width={100} height={100} alt="course 5" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Digital Marketing
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${
            !showAll ? "hidden lg:block" : ""
          }`}>
      <Image src="/courses/course 6.svg" width={100} height={100} alt="course 6" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Self Development
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${
            !showAll ? "hidden lg:block" : ""
          }`}>
      <Image src="/courses/course 7.svg" width={100} height={100} alt="course 7" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Business
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${
            !showAll ? "hidden lg:block" : ""
          }`}>
      <Image src="/courses/course 8.svg" width={100} height={100} alt="course 8" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Finance
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>

    <div className={`flex sm:w-[320px] lg:w-[411px] h-[132px] bg-[#F7F7F7] rounded-md p-4 ${
            !showAll ? "hidden lg:block" : ""
          }`}>
      <Image 
         src="/courses/course 9.svg" 
         width={100} 
         height={100} 
         alt="course 9" />
      <div className="lg:p-6 sm:pl-4 sm:p-0 sm:pt-6">
        <Link href="#" className="font-semibold lg:text-xl sm:text-base">
          Consulting
        </Link>
        <p className="font-normal lg:text-lg sm:text-sm">50+ Courses Available</p>
      </div>
    </div>
  </div>
  <button
       className="sm:ml-[140px] mt-14 sm:block lg:hidden border py-3 px-6 rounded-[5px] border-black "
        onClick={() => setShowAll(!showAll)} >
      {showAll ? "Hide All" : "View All"} Courses
   </button>

  <button 
  className=" mt-14 border py-3 px-6 rounded-[5px] border-black sm:hidden lg:block">
    
     View All Courses
  </button>
</div>

<div className="py-28 lg:px-16 lg:block sm:hidden">
  
  <div>
    <p className="flex items-center justify-center font-bold text-5xl">Our Achievements</p>
    <p className="text-lg text-center mt-8 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
      Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
  </div>

  
  <div className="m-4 py-2 gap-6 flex">
  
    <div className="w-72 h-20 text-center">
      <p className="font-bold text-5xl mb-2">200+</p>
      <p className="font-normal text-base">Courses</p>
    </div>

  
    <div className="w-72 h-20 text-center">
      <p className="font-bold text-5xl mb-2">50K</p>
      <p className="font-normal text-base">Mentors</p>
    </div>

    
    <div className="w-72 h-20 text-center">
      <p className="font-bold text-5xl mb-2">370K</p>
      <p className="font-normal text-base">Students</p>
    </div>

    
    <div className="w-72 h-20 text-center">
      <p className="font-bold text-5xl mb-2">100+</p>
      <p className="font-normal text-base">Recognition</p>
    </div>
  </div>
</div>





  

<div className="py-28 lg:px-16 text-center sm:px-0">
  
  <div>
    <p className="flex items-center justify-center font-bold lg:text-5xl sm:text-3xl sm:mb-10">
      Our Achievements
    </p>
    <p className="lg:hidden sm:block sm:mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
    </p>
    <p className="text-lg lg:flex lg:text-center sm:hidden mt-8 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
    </p>
  </div>

  
  <div className="lg:m-4 lg:mx-24 py-2 lg:gap-24 lg:w-[1100px] h-[96px] sm:gap-4 lg:flex lg:flex-row sm:grid-cols-2 sm:grid sm:w-[300px] sm:h-[176px] sm:text-center sm:justify-center sm:mx-8">
    
    <div className="lg:w-[296px] lg:h-20 sm:w-44 sm:h-20 text-center sm:text-start">
      <p className="font-bold lg:text-5xl mb-2 sm:text-2xl">200+</p>
      <p className="font-normal text-base">Courses</p>
    </div>

    
    <div className="lg:w-[296px] lg:h-20 sm:w-44 sm:h-20 lg:text-center">
      <p className="font-bold lg:text-5xl mb-2 sm:text-2xl">50K</p>
      <p className="font-normal text-base">Mentors</p>
    </div>

  
    <div className="lg:w-[296px] lg:h-20 sm:w-44 sm:h-20 lg:text-center sm:text-start">
      <p className="font-bold lg:text-5xl mb-2 sm:text-2xl">370K</p>
      <p className="font-normal text-base">Students</p>
    </div>

    
    <div className="lg:w-[296px] lg:h-20 sm:w-44 sm:h-20 lg:text-center">
      <p className="font-bold lg:text-5xl mb-2 sm:text-2xl">100+</p>
      <p className="font-normal text-base">Recognition</p>
    </div>
  </div>
</div>



<Courses/>
<Team/>
<Testimonial />
<Footer/>















</div> )
}

export default Home 