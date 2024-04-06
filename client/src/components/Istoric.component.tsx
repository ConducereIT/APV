import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1000); 
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer >= 4500 && timer <= 5000) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }
    if (timer >= 7000) {
      setTimer(0);
    }
  }, [timer, items.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setTimer(0); 
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setTimer(0); 
  };

  return (
    <div className="flex flex-col sm:h-1/6 items-center justify-center">
      <h2 className="font-bold text-5xl align-middle text-pretty text-center mb-4">ISTORIC</h2>
      <div className="relative w-full max-w-screen-lg h-96 overflow-hidden">
        {items.map((item: CarouselItem, index: number) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
            }}
          >
            <div className="w-full max-w-screen-lg h-96 flex items-center justify-center flex-col md:flex-row">
              <div className="w-full md:w-1/3 p-2 overflow-hidden h-48 md:h-full aspect-w-1 aspect-h-1 rounded-lg">
                <div className="aspect-w-1 aspect-h-1 rounded-lg">
                  <img
                    src={item.photo}
                    alt={item.text}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3 p-4 text-black flex flex-col justify-between rounded-lg ml-4">
                <div className="mb-10">
                  <span className="text-xl font-bold">{item.name}</span>
                  <p className="overflow-visible">{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-60 ">
        <div className="bg-white rounded-none p-3 w-20 h-14 flex items-center justify-center hover:bg-gray-200 shadow-md cursor-pointer mb-4" onClick={goToPrevSlide}>
          <FaAngleLeft className="text-xl" />
        </div>
        <div className="bg-white rounded-none p-3 w-20 h-14 flex items-center justify-center hover:bg-gray-200 shadow-md cursor-pointer ml-0 mb-4" onClick={goToNextSlide}>
          <FaAngleRight className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
