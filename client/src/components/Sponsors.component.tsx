import React from "react";

interface Sponsor {
  link: string;
  image: string;
}

interface SponsorsProps {
  sponsors: Sponsor[];
  grid: number;
  title: string;
}

const Sponsors: React.FC<SponsorsProps> = ({ sponsors, grid, title }) => {
  let content: string;

  if (grid === 5) {
    content = "grid md:grid-cols-5 grid-cols-2 md:gap-10 md:mx-7";
  } else if (grid === 3) {
    content =
      "grid grid-cols-2 md:grid-cols-3 place-items-center sm:grid-cols-3 md:gap-10 md:mx-7";
  } else {
    content = "";
  }

  return (
    <>
      <div className="md:pb-5 my-28">
        <h1 className="text-3xl md:text-5xl font-barlow-condensed leading-normal font-bold flex justify-center uppercase text-[#1D1A3F] pb-10">
          {title}
        </h1>
        <div className={`${content}`}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="m-2 md:m-0 max-w-sm overflow-hidden cursor-pointer duration-300 bg-gray-100 hover:shadow-xl hover:shadow-black/40"
            >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="object-cover hover:scale-110 duration-300"
                  src={sponsor.image}
                  alt="Sponsor"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
