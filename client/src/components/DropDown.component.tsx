import React from 'react';

interface DropdownProps {
  text: string;
  url?: string;
  subText?: Record<number, { text: string; url: string }>;
}

const Dropdown: React.FC<DropdownProps> = (props) : JSX.Element => {
  const { text, url, subText } = props;

  return (
    <div className="relative inline-block text-left group">
      <button className=" liHeader ml-7 text-md my-auto text-[#656372] hover:text-[#00B9AE] font-semibold focus:outline-none ">
        {text}
      </button>
      <div className="hidden group-hover:block origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          {/* Utilizați subText aici pentru a afișa opțiunile */}
          {subText && Object.values(subText).map((option, index) => (
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
    </div>
  );
};

export default Dropdown;
