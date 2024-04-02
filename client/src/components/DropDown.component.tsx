import React, { useState } from "react";

interface DropdownProps {
  text: string;
  url?: string;
  subText?: Record<number, { text: string; url: string }>;
}

interface ISubText{
  text: string;
  url: string;
}

const Dropdown: React.FC<DropdownProps> = (props): JSX.Element => {
  const { text, url, subText } = props;
  const [isHover, setIsHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openCourse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="relative  group  my-auto hidden lg:block">
        <button
          onClick={() => (window.location.href = `${url}`)}
          className={`liHeader text-center h-16 center mx-4 text-md font-normal my-auto text-[#656372] hover:text-[#00B9AE]  transform transition-transform`}
        > 
        <h1 className={`${!isHover ? "text-[#656372]" : "text-[#00B9AE] " }`}> {text} </h1>
        </button>
        {subText ? (
          <div className="hidden ml group-hover:block  w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 fixed">
              <div className="h-1  rounded-full w-full bg-[#08E4D5]"></div>
            <div 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            >
              {subText &&
                Object.values(subText).map((option: ISubText) => (
                  <a
                    key={option.text}
                    href={option.url}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <h1 className="text-[#656372] hover:text-[#00B9AE] ">{option.text}</h1>
                  </a>
                ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="block lg:hidden mt-3">
        <div className="relative min:h-20 ">
          <button
            onClick={() => openCourse()}
            className=" h-full text-center max:h-10 flex relative"
          >
          <button
              onClick={() => (window.location.href = `${url}`)}
              className={`liHeader z-40 h-full center mx-4 text-md font-normal my-auto flex relative text-[#656372] hover:text-[#00B9AE] transform transition-transform`}
          >
              <h1 className={`text-xl ${!isHover ? "text-[#656372]" : "text-[#00B9AE] "} relative top-1/2 transform -translate-y-1/2`}>{text}</h1>
          </button>
          {subText ?           
            <div className="relative  left-56 top-5 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className={`text-black h-10 w-10 scale-150 ${isOpen ? "hidden" : "block"} cursor-pointer`}>+</h1>
              <h1 className={`text-black h-10 w-10 scale-150 ${isOpen ? "block" : "hidden"}`}>-</h1>
            </div>
          : 
            <>
            </>
          }
      </button>
        {
          subText && isOpen ?  
            <div className="  min:h-10 ml-5">
              {subText &&
              Object.values(subText).map((option: ISubText) => (
                <a
                  key={option.text}
                  href={option.url}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <h1 className="text-[#656372] hover:text-[#00B9AE] ">{option.text}</h1>
                </a>
                ))
                }
              </div>
              :
              <>
              </>
          }
          </div>
      </div>
    </>
  );
};

export default Dropdown;
