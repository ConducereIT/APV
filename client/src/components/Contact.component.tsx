interface Member {
  nume: string;
  position: string;
  email: string;
  phone: string;
  image: string;
}

interface ContactTeamProps {
  members: Member[];
  grid: number;
}

export default function ContactTeam({ members, grid }: ContactTeamProps) {
  const gridClass =
    grid === 2
      ? "grid-cols-2 md:grid-cols-2 md:gap-20 md:mx-7"
      : "grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-10 md:gap-10 md:mx-7";

  return (
    <div className="md:pb-5 my-10">
      <div className={`grid ${gridClass}`}>
        {members.map((member, index) => (
          <div
            key={index}
            className="m-2 p-10 max-w-sm rounded-xl border-4 border-teal-800 bg-teal-100 hover:bg-blue-200/90 overflow-hidden duration-300 hover:shadow-xl hover:shadow-black/40"
          >
            <img
              className="w-full h-auto rounded-full border-4 border-teal-800"
              src={member.image}
              alt="Poza membru"
              loading="lazy"
              width={100}
              height={100}
            />
            <div className="px-6 py-4">
              <div className="mb-2 flex justify-center">
                <p className="font-bold text-xl md:text-3xl text-center text-black hover:text-black">
                  {member.nume}
                </p>
              </div>
              <div className="flex justify-center">
                <p className="md:text-2xl font-semibold text-gray-700 hover:text-gray-700 opacity-80 text-center">
                  {member.position}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <p className="md:text-lg font-semibold text-gray-700 hover:text-gray-700 opacity-80 text-center">
                  {member.email}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <p className="md:text-2xl font-semibold text-gray-700 hover:text-gray-700 opacity-80 text-center">
                  {member.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
