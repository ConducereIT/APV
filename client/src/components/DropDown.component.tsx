import React from "react";

interface DropdownProps {
  text: string;
  url?: string;
  subText?: Record<number, { text: string; url: string }>;
}

const Dropdown: React.FC<DropdownProps> = (props): JSX.Element => {
  const { text, url, subText } = props;

  return (
    <div className="relative inline-block group  my-auto">
      <button
        onClick={() => (window.location.href = `${url}`)}
        className="liHeader text-center h-16 center mx-4 text-md font-normal my-auto text-[#656372] hover:text-[#00B9AE]  transform transition-transform"
        style={{ marginBottom: '-4px' }} // pentru a compensa spațiul adăugat de umbra butonului
      >
        {text}
      </button>
      {subText ? (
        <div className="hidden ml group-hover:block  w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 fixed">
            <div className="h-1  rounded-full w-full bg-[#08E4D5]"></div>
          <div className=" ">
            {/* Utilizați subText aici pentru a afișa opțiunile */}
            {subText &&
              Object.values(subText).map((option, index) => (
                <a
                  key={index}
                  href={option.url}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {option.text}
                </a>
              ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
