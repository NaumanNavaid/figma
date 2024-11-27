import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
const footer = () => {

  return (
 <div className='lg:p-20  sm:px-8'>
   <div>
     <div className='  lg:text-start flex lg:flex-row lg:justify-between sm:text-center mb-20  sm:flex-col'>
       <div>
          <h1 className='font-bold text-base sm:mb-4'>Subscribe to our newsletter</h1>
          <p className='font-normal text-base sm:mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
          <div>
             <div className='gap-4 flex lg:flex-row mb-3 sm:flex-col sm:items-center ' >
               <input type="email"   required placeholder="Enter your email" className='p-3 border border-black sm:w-[280px] md:h-[48px] rounded-[5px] mr-2 sm:mr-0 sm:' />
                <Button variant="MyStyle" className=' h-[48px] sm:w-[280px] px-6 py-3  rounded-[5px]'>Subscribe</Button>
             </div>
           <div className='sm:w-[280px] sm:text-xs'>
           By subscribing you agree to with our <span className='underline  decoration-black'>Privacy Policy</span>
           </div>
        </div>
    
       </div>

     <div className=' lg:text-start lg:items-start flex justify-between mb-20 lg:flex-row sm:flex-col sm:items-center  sm:text-center'>
       <Link href="/"  >
         <Image
        src="/icon/Ddsgnr.svg"
        width={132}
        height={42}
        alt='Ddsgnr'
        className='lg:mb-0 sm:mb-8'
         />
        </Link>
       <div className='flex-col gap-4 lg:mb-0 sm:mb-8'>
          <h1 className='font-semibold mb-4 '>Courses</h1>
           <div>
              <p className='py-2'>Business</p>
              <p className='py-2'>Development</p>
              <p className='py-2'>Technology</p>
              <p className='py-2'>Design</p>
              <p className='py-2'>Programming</p>


            </div>







         </div>
       <div className='flex-col gap-4 lg:mb-0 sm:mb-8'>
          <h1 className='font-semibold mb-4 '>Resources</h1>
           <div>
              <p className='py-2'>Career</p>
              <p className='py-2'>Resume</p>
              <p className='py-2'>Learning</p>
              <p className='py-2'>Interview Preparation</p>
              <p className='py-2'>Jobs</p>


            </div>
        </div>
       <div className='flex-col gap-4 '>
          <h1 className='font-semibold mb-4 '>About Us</h1>
           <div>
              <p className='py-2'>Contact</p>
              <p className='py-2'>Help/Support</p>
              <p className='py-2'>FAQ</p>
              <p className='py-2'>Terms and Conditions</p>
              <p className='py-2'>Partners</p>


            </div>
         </div>

       </div>

     <div className='  border-t border-black'>
        <div className=' mt-8 flex justify-between lg:flex-row sm:flex-col'>
          <div className='flex gap-6 lg:flex-row sm:flex-col sm:text-center  '>
             <p>2023 Ddsgnr. All right reserved.</p>
             <div className='gap-6 lg:text-start flex sm:text-xs lg:text-sm sm:flex-row   sm:text-center  '>
             <p className='underline  decoration-black'>Privacy Policy</p>
             <p className='underline  decoration-black'>Terms of Service</p>
             <p className='underline  decoration-black'>Cookies Settings </p>
           </div>
           </div>
           <div className='flex lg:mt-0 sm:items-center sm:justify-center  sm:mt-4 h-6 space-x-4'>
           <Link href="#">
             <Image
               src="/icon/Facebook.svg"
               width={24}
              height={24}
              alt='facebook' />
           </Link>
           <Link href="#">
             <Image
              src="/icon/Instagram.svg"
              width={24}
              height={24}
              alt='facebook' />
           </Link>
           <Link href="#">
              <Image
               src="/icon/Twitter.svg"
               width={24}
               height={24}
               alt='facebook' />
          </Link>
        <Link href="#">
          <Image
            src="/icon/LinkedIn.svg"
            width={24}
            height={24}
            alt='facebook' />
        </Link>
      </div>




         </div>
       
      <div>









      </div>
      
      
      
      
      
      
      
      
      
      
       </div>
   </div>
</div>  )
}

export default footer