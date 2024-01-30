import TeamButton from "./Buttons/TeamButton";
import UnderlineButton from "./Buttons/UnderlineButton";
import { useState } from "react";

interface Person {
  name: string;
  imageUrl: string;
}

interface TeamMembersProps {
  people: Person[];
}
const TeamMembers: React.FC<TeamMembersProps> = ({ people }) => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const handleMemberClick = (index: number | null) => {
    setSelectedMember(index);
  };

  return (
    <main className="mt-[77px]">
      <h2 className="font-medium text-3xl font-inter shadow-md">
        Team Members:
      </h2>
      <ul role="list" className="grid    grid-cols-1  ">
        {people.map((person, index) => (
          <>
            <li key={person.name}>
              <div className={`flex items-center gap-[20px] mt-[19px] `}>
                <img
                  className="h-16 w-16 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <span className="flex justify-between w-full">
                  <div>
                    <h3
                      className={`text-base font-semibold cursor-pointer text-white ${
                        selectedMember === index ? "text-[#00FF95]" : ""
                      }`}
                      onClick={() => handleMemberClick(index)}
                    >
                      {person.name}
                    </h3>
                  </div>
                  {selectedMember === index && (
                    <UnderlineButton Text=" Set Your Role" />
                  )}
                </span>
              </div>
            </li>
          </>
        ))}
      </ul>
      <TeamButton />
    </main>
  );
};

export default TeamMembers;
