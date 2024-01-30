import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../@/components/ui/tabs";
import TrackCard from "./TrackCard";
import TeamMembers from "./TeamMembers";
import image from "../assets/Logo.png";
//Team Member Data
const people = [
  {
    name: "You ",

    imageUrl: image,
  },

  {
    name: "Nahla Mohamed",

    imageUrl: image,
  },
  {
    name: "Rana Nader",

    imageUrl: image,
  },
];
const numberofTeam = people.length;
console.log(numberofTeam);
const TeamTabs = () => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px] text-white ">
        <TabsList className="flex gap-12 justify-start mt-[60px] ">
          <TabsTrigger
            className="focus:text-[#00FF95] focus:underline-offset-8 focus:underline"
            value="Your Team"
          >
            Your Team
          </TabsTrigger>
          <TabsTrigger
            className="focus:text-[#00FF95] focus:underline-offset-8 focus:underline"
            value="Join A Team"
          >
            Join A Team
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Your Team">
          <TrackCard number={numberofTeam} />
          <TeamMembers people={people} />
        </TabsContent>

        <TabsContent value="Join A Team">Join a Team.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamTabs;
