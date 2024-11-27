import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const header = () => {
  return ( 
   <div> 
    <div className=' sm:hidden  lg:flex justify-between pr-16 pl-[62px] py-4 bg-[#F7F7F7]
 h-14 '>
      <div className='flex text-sm '>
        Phone Number: 956 742 455 678
        <span className="mx-4 border-l border-[#676767] h-5"></span>
        Email:info@ddsgnr.com
      </div>
      <div className='flex  h-6 space-x-4'>
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
  
      </div>
  )
}

export default header