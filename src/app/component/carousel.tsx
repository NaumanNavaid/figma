


"use client"
import { Carousel, CarouselContent, CarouselItem} from '@/components/ui/carousel'
import { type CarouselApi } from "@/components/ui/carousel"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const carousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
 
  return (
    <div className="lg:w-[1152px] sm:w-[360px] md:w-[640px] sm:p-0 flex flex-col gap-12 ">
      <Carousel setApi={setApi} opts={{loop : true}}>          
        <CarouselContent>
          <CarouselItem className="lg:basis-1/3"> 
          <div className="lg:w-[343px] h-[322px] md:w-[300px] md:h-[330px] bg-white border border-black flex flex-col gap-6 p-8">
              <div className="flex">
                <Image
                  src="/icon/Stars.svg" 
                  alt="Star"
                  width={116}
                  height={19}
                />
              </div>

              <div className="text-start">
                <p className="text-black font-normal text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex items-start">
                <Image
                  src="Images/member.svg"
                  alt="James Nduku"
                  width={56}
                  height={56}
                />   
                <div className="ml-4">
                  <p className="font-semibold text-base text-black">James Nduku</p>
                  <p className="text-base text-black font-normal">Software Developer</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/3">   
          <div className="lg:w-[343px] h-[322px] md:w-[300px] md:h-[330px] bg-white border border-black flex flex-col gap-6 p-8">
          <div className="flex">
                <Image
                  src="/icon/Stars.svg" 
                  alt="Star"
                  width={116}
                  height={19}
                />
              </div>

              <div className="text-start">
                <p className="text-black font-normal text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex items-start">
                <Image
                  src="Images/member 2.svg"
                  alt="Erick Kipkemboi"
                  width={56}
                  height={56}
                />   
                <div className="ml-4">
                  <p className="font-semibold text-base text-black">Erick Kipkemboi</p>
                  <p className="text-base text-black font-normal">Scrum Master</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/3">   
          <div className="lg:w-[343px] h-[322px] md:w-[300px] md:h-[330px] bg-white border border-black flex flex-col gap-6 p-8">
          <div className="flex">
                <Image
                  src="/icon/Stars.svg" 
                  alt="Star"
                  width={116}
                  height={19}
                />
              </div>

              <div className="text-start">
                <p className="text-black font-normal text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex items-start">
                <Image
                  src="Images/member 3.svg"
                  alt="Stephen Kerubo"
                  width={56}
                  height={56}
                />   
                <div className="ml-4">
                  <p className="font-semibold text-base text-black">Stephen Kerubo</p>
                  <p className="text-base text-black font-normal">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/3"> 
          <div className="lg:w-[343px] h-[322px] md:w-[300px] md:h-[330px] bg-white border border-black flex flex-col gap-6 p-8">
              <div className="flex">
                <Image
                  src="/icon/Stars.svg" 
                  alt="Star"
                  width={116}
                  height={19}
                />
              </div>

              <div className="text-start">
                <p className="text-black font-normal text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex items-start">
                <Image
                  src="Images/member.svg"
                  alt="James Nduku"
                  width={56}
                  height={56}
                />   
                <div className="ml-4">
                  <p className="font-semibold text-base text-black">James Nduku</p>
                  <p className="text-base text-black font-normal">Software Developer</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/3">   
          <div className="lg:w-[343px] h-[322px] md:w-[300px] md:h-[330px] bg-white border border-black flex flex-col gap-6 p-8">
          <div className="flex">
                <Image
                  src="/icon/Stars.svg" 
                  alt="Star"
                  width={116}
                  height={19}
                />
              </div>

              <div className="text-start">
                <p className="text-black font-normal text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex items-start">
                <Image
                  src="Images/member 2.svg"
                  alt="Erick Kipkemboi"
                  width={56}
                  height={56}
                />   
                <div className="ml-4">
                  <p className="font-semibold text-base text-black">Erick Kipkemboi</p>
                  <p className="text-base text-black font-normal">Scrum Master</p>
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem className="lg:basis-1/3">   
          <div className="lg:w-[343px] h-[322px] md:w-[300px] md:h-[330px] bg-white border border-black flex flex-col gap-6 p-8">
          <div className="flex">
                <Image
                  src="/icon/Stars.svg" 
                  alt="Star"
                  width={116}
                  height={19}
                />
              </div>

              <div className="text-start">
                <p className="text-black font-normal text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              </div>

              <div className="flex items-start">
                <Image
                  src="Images/member 3.svg"
                  alt="Stephen Kerubo"
                  width={56}
                  height={56}
                />   
                <div className="ml-4">
                  <p className="font-semibold text-base text-black">Stephen Kerubo</p>
                  <p className="text-base text-black font-normal">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <div className="w-full flex justify-between items-center mt-4">       
        <div>
          <Image
            src="/icon/Slider Dots.svg"
            alt='Dots'
            width={111}
            height={49}
          />
        </div>
        <div className='flex gap-4 mr-4'>
          <button onClick={() => api?.scrollTo(current - 1)}>
            <Image
              src="/icon/leftbutton.svg"
              width={48}
              height={49}
              alt='Left arrow'   
            />
          </button>
          <button onClick={() => api?.scrollTo(current + 1)}>
            <Image
              src="/icon/righbutton.svg"
              width={48}
              height={49}
              alt='Right arrow'   
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default carousel
