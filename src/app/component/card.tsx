import React from "react";

interface CardProps {
  data: {
    profileImage: string; // URL for profile image
    name: string;
    role: string;
    description: string;
    stars: number; // Number of stars to display
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="lg:w-[343px] h-[322px] bg-white border  border-black flex flex-col gap-6 p-8">
      {/* Stars Section - Use images */}
      <div className="flex ">
        {[...Array(data.stars)].map((_, index) => (
          <img
            key={index}
            src="/icon/Stars.svg" // Replace with your actual star image path
            alt={`Star ${index + 1}`}
            className="w-[116px] h-[19px]"
          />
        ))}
      </div>

      <div className="text-start ">
        
        <p className=" text-black font-normal text-lg ">{data.description}</p>
      </div>

      <div className="flex items-start ">
        <img
          src={data.profileImage}
          alt={data.name}
          className="w-14 h-14 "
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