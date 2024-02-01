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
      className="flex flex-col justify-center items-start p-8 pb-10  rounded-2xl mt-12"
      style={{
        background:
          "linear-gradient(253deg, rgba(255, 122, 122, 0.56) 14.23%, #2A0FD3 101.22%)",
      }}
    >
      <div className="flex justify-between w-full text-2xl  tracking-wider mb-2">
        <h3>{title}</h3>
        <h4> {number} members</h4>
      </div>
      <div className="flex flex-col ">
        <h4 className=" text-4xl  font-bold mb-5">{subTitle}</h4>
        <p className=" text-xl ">{code}</p>
      </div>
    </div>
  );
};

export default TrackCard;
