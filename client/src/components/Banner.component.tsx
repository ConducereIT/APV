import React, { useRef, useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";
import { motion, useAnimation } from "framer-motion";

interface BannerProps {
  video: string;
  LseBanner: string;
  firstTitle: string;
  secondTitle: string;
  maiputernici: boolean;
}

const Banner: React.FC<BannerProps> = ({
  video,
  LseBanner,
  firstTitle,
  secondTitle,
  maiputernici,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    const isInView = ref.current
      ? ref.current.getBoundingClientRect().top < window.innerHeight
      : false;
    if (isInView) {
      isInViewControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInViewControls, slideControls]);

  const text = [
    "Mai puternici împreună!",
    "Amintiri de neuitat!",
    "Proiecte de succes!",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [text.length]);

  return (
    <>
      <div className="mt-24"></div>

      <Parallax
        className="md:rounded-lg md:mb-40 w-full md:w-[98%] mt-2 md:mx-auto md:mt-7 h-1/6 "
        strength={250}
      >
        <Background className="relative w-screen h-screen filter">
          <video
            src={video}
            className="object-none h-full w-full hidden sm:block "
            autoPlay={true}
            muted={true}
            loop={true}
          />
          <img
            src={LseBanner}
            alt="LSE Banner"
            className="object-cover h-screen w-screen block sm:hidden"
          />
        </Background>
        <div
          ref={ref}
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-xl lg:items-center"
        >
          <div className="mx-auto max-w-xl text-center mt-40 ">
            <motion.div
              className="bg-black/40 rounded-xl"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={isInViewControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="text-3xl font-extrabold sm:text-5xl lg:p-4 text-gray-200 ">
                {firstTitle}
              </h1>
              <h2 className="text-3xl font-extrabold text-teal-600 sm:text-5xl sm:pb-5 pb-2">
                {secondTitle}
              </h2>
              {maiputernici ? (
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="mt-4 sm:text-md/relaxed text-white"
                  key={text[currentIndex]}
                >
                  ”{text[currentIndex]}”
                </motion.p>
              ) : (
                <div className="mt-32 sm:text-md/relaxed text-white"> </div>
              )}
            </motion.div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Banner;
