import React from 'react'
import CarouselComponent from './carousel'

function testimonial() {return (

    <div className='md:px-16 md:py-28 sm:py-12 sm:px-0 h-[831px] mb-4 bg-[#F7F7F7] flex flex-col sm:text-center lg:text-start  '>
       <div className='mb-14'>
        <h1 className='font-bold text-5xl mb-6 sm:hidden lg:flex'>Customer testimonials</h1>
        <h1 className='lg:hidden font-bold mb-6 text-4xl'>What Our Student Say</h1>
     
       <p className='font-normal text-lg pr-1 mb-'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
       
        <CarouselComponent/>
  
 
   










    </div>
  )
}

export default testimonial