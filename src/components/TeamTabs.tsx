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
const TeamTabs = () => {
  return (
    <div>
      <Tabs defaultValue="myTeam" className=" text-white ">
        <TabsList className="flex gap-12 justify-start mt-[60px] ">
          <TabsTrigger
            className="data-[state=active]:text-[#00FF95] data-[state=active]:underline-offset-8 data-[state=active]:underline px-0 text-3xl"
            value="myTeam"
          >
            Your Team
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-[#00FF95] data-[state=active]:underline-offset-8 data-[state=active]:underline px-0 text-3xl"
            value="JoinATeam"
          >
            Join A Team
          </TabsTrigger>
        </TabsList>
        <TabsContent value="myTeam">
          <TrackCard
            number={numberofTeam}
            title="AI Track"
            code="Team Code: TR3QZA13XX1"
            subTitle="Team Number One"
          />
          <TeamMembers people={people} />
        </TabsContent>

        <TabsContent value="JoinATeam">Join a Team.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamTabs;
