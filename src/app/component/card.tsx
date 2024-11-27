import React from "react";
import Image from "next/image";
interface CardProps {
  data: {
    profileImage: string; 
    name: string;
    role: string;
    description: string;
    stars: number; 
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="lg:w-[343px] h-[322px] bg-white border  border-black flex flex-col gap-6 p-8">
 
      <div className="flex ">
        {[...Array(data.stars)].map((_, index) => (
          <Image
            key={index}
            src="/icon/Stars.svg" 
            alt={`Star ${index + 1}`}
           width={116}
           height={19}
          />
        ))}
      </div>

      <div className="text-start ">
        
        <p className=" text-black font-normal text-lg ">{data.description}</p>
      </div>

      <div className="flex items-start ">
        <Image
          src={data.profileImage}
          alt={data.name}
          width={56}
          height={56}
        />
        <div className="ml-4 ">
          <p className="font-semibold  text-base text-black">{data.name}</p>
          <p className="text-base text-black font-normal">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;