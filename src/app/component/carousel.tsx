import React from "react";
import { Carousel } from "@/components/ui/carousel"; // Assuming Carousel from ShadCN is imported
import Card from "./card";
import Image from "next/image";
const carouselData = [
  {
    id: 1,
    profileImage: "Images/member.svg",
    name: "James Nduku",
    role: "Software Developer",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    stars: 1,
  },
  {
    id: 2,
    profileImage: "Images/member 2.svg",
    name: "Erick Kipkemboi ",
    role: "Scrum Master",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    stars: 1,
  },
  {
    id: 3,
    profileImage: "Images/member 3.svg",
    name: "Stephen Kerubo ",
    role: "UI/UX Designer",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    stars: 1,
  },
];

const carousel = () => {
  return (
    <div className=" lg:w-[1152px] sm:w-[360px] sm:p-0 flex flex-col gap-12 ">

      <Carousel>
        <div className="flex gap-6">

          {carouselData.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-full
                sm:w-full
                 lg:w-[33%]
              ${index > 0 ? "hidden lg:block" : ""}`}
            >
              <Card data={item} />
            </div>
          ))}
        </div>
      </Carousel>


      <div className="w-full flex justify-between items-center mt-4">
        <Image src="/icon/Slider Dots.svg" width={111} height={49} alt="Dots" />
        <Image src="/icon/Slider Buttons.svg" width={111} height={49} alt="Arrows" />
      </div>
    </div>
  );
}

export default carousel