interface TrackCardProps {
  number: number;
  title: string;
  code: string | number;
  subTitle: string;
}

const TrackCard: React.FC<TrackCardProps> = ({
  number,
  title,
  code,
  subTitle,
}) => {
  console.log(number, "number passed as prop");
  return (
    <div
      className="flex flex-col h-[197px] w-full justify-center items-start  rounded-15 px-8 rounded-2xl mt-12"
      style={{
        background:
          "linear-gradient(253deg, rgba(255, 122, 122, 0.56) 14.23%, #2A0FD3 101.22%)",
      }}
    >
      <div className="flex justify-between w-full text-2xl font-medium tracking-wider">
        <h3>{title}</h3>
        <h4> {number} members</h4>
      </div>
      <div className="flex flex-col ">
        <h4 className=" text-4xl leading-normal font-bold">{subTitle}</h4>
        <p className=" text-xl  mb-[18px]">{code}</p>
      </div>
    </div>
  );
};

export default TrackCard;
