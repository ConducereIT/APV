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
      <div className="md:pb-5 my-10">
        <h1 className="md:text-3xl text-xl font-bold flex justify-center uppercase hover:text-black text-black pb-10">
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
                  className="w-full h-auto hover:scale-110 duration-300"
                  src={sponsor.image}
                  alt="Poza membru"
                  loading="lazy"
                  width={100}
                  height={100}
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
