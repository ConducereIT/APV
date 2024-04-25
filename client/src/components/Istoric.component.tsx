import React, { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

interface CarouselItem {
  photo: string;
  text: string;
  name: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setTimer((prevTimer) => prevTimer + 1000);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (timer >= 2500 && timer <= 3000) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
    if (timer >= 3000) {
      setTimer(0);
    }
  }, [timer, items.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setTimer(0);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
    setTimer(0);
  };

  return (
    <>
      <div
        id="istoric"
        className="flex flex-col h-full sm:h-1/6 md:h-full items-center justify-center pt-10"
      >
        <h2 className="font-bold md:text-5xl w-full font-barlow align-middle text-pretty text-center mb-4">
          ISTORIC
        </h2>
        <div
          className="relative w-full max-w-screen-lg h-screen md:h-96 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {items.map((item: CarouselItem, index: number) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }}
            >
              <div className="h-full md:h-full max-w-screen-lg flex items-center justify-center flex-col md:flex-row">
                <div className="w-5/6 md:w-1/3 p-2 overflow-hidden h-screen md:h-full aspect-w-1 aspect-h-1 rounded-lg">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg flex justify-center">
                    <img
                      src={item.photo}
                      alt={item.text}
                      className="w-[70%] md:w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
                <div className="w-full h-screen md:w-2/3 px-4 text-black flex flex-col justify-between rounded-lg ">
                  <div className="mb-10">
                    <span className="text-2xl w-1/6 md:w-full font-bold">
                      {item.name}
                    </span>
                    <p className="overflow-visible h-1/6 md:full text-lg ">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-5/6 md:w-full justify-center mb-60 ">
          <div
            className="bg-white rounded-none p-4 w-10 h-3 md:w-20 md:h-14 flex items-center justify-center hover:bg-gray-200 shadow-md cursor-pointer mb-4"
            onClick={goToPrevSlide}
          >
            <FaAngleLeft className="text-xl" />
          </div>
          <div
            className="bg-white rounded-none p-4 w-10 h-3 md:w-20 md:h-14 flex items-center justify-center hover:bg-gray-200 shadow-md cursor-pointer ml-0 mb-4"
            onClick={goToNextSlide}
          >
            <FaAngleRight className="text-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
