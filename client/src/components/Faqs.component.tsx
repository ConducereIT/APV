import { IoIosArrowDown } from "react-icons/io";
import { FaqConfig } from "../config/FaqConfig";

export default function Faqs() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-10 mt-24 text-4xl font-bold">Întrebări Frecvente</h1>
      </div>
      <div className="flex justify-center ">
        <div className="lg:w-1/2 md:w-2/3 mx-5 md:mx-0 shadow-2xl ">
          {FaqConfig.map((question, index) => (
            <div
              className="group flex flex-col border-b border-black border-opacity-15 bg-white bg-grey-100 "
              tabIndex={index}
              key={index}
            >
              <div className="flex cursor-pointer items-center justify-between border-dotted border-opacity-20 border-[1.2px] border-black p-4 duration-500 hover:bg-[#aff1f3]">
                <span className=" text-xl text-gray-600 group-hover:translate-x-2 duration-500 ">
                  {question.question}
                </span>
                <IoIosArrowDown
                  size={20}
                  className="transition-all duration-500 group-focus:-rotate-180 max-w-10 min-w-10"
                />
              </div>
              <div className="text-gray-500 invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:p-4 group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-700">
                {question.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
