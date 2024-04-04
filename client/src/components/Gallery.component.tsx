import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import gallery_image1 from "../assets/gallery1.jpg";
import gallery_image2 from "../assets/gallery2.jpg";
import gallery_image3 from "../assets/gallery3.jpg";
import gallery_image4 from "../assets/gallery4.jpg";
import gallery_image5 from "../assets/gallery5.jpg";
import gallery_image6 from "../assets/gallery6.jpg";

function Gallery() {
  const poze = [
    { image: gallery_image1 },
    { image: gallery_image2 },
    { image: gallery_image3 },
    { image: gallery_image4 },
    { image: gallery_image5 },
    { image: gallery_image6 },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const openFullscreen = (index: number) => {
    setCurrentImageIndex(index);
  };

  const closeFullscreen = () => {
    setCurrentImageIndex(null);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && currentImageIndex !== null) {
        closeFullscreen();
      } else if (event.key === "ArrowLeft" && currentImageIndex !== null && currentImageIndex > 0) {
        setCurrentImageIndex((prevIndex) => (prevIndex !== null ? prevIndex - 1 : 0));
      } else if (event.key === "ArrowRight" && currentImageIndex !== null && currentImageIndex < poze.length - 1) {
        setCurrentImageIndex((prevIndex) => (prevIndex !== null ? prevIndex + 1 : 0));
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentImageIndex, poze.length]);

  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Galerie foto</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-4 sm:mx-8 md:mx-20 my-20">
        {poze.map(({ image }, index) => (
          <div key={index} className="flex flex-wrap justify-center">
            <div className="flex aspect-w-1 flex-wrap aspect-h-1 gap-0">
              <img
                onClick={() => openFullscreen(index)}
                className="h-auto max-w-full rounded-lg object-cover object-center cursor-pointer transition duration-300 transform hover:scale-105"
                src={image}
                alt="gallery-photo"
              />
            </div>
          </div>
        ))}
      </div>
      {currentImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <img
            src={poze[currentImageIndex].image}
            alt="fullscreen-image"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute top-0 right-0 p-4 cursor-pointer">
            <FaTimes onClick={closeFullscreen} className="text-white text-2xl" />
          </div>
          {currentImageIndex > 0 && (
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 cursor-pointer">
              <FaArrowLeft onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex !== null ? prevIndex - 1 : 0))} className="text-white text-2xl" />
            </div>
          )}
          {currentImageIndex < poze.length - 1 && (
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 cursor-pointer">
              <FaArrowRight onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex !== null ? prevIndex + 1 : 0))} className="text-white text-2xl" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Gallery;
