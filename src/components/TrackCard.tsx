const TrackCard = ({ number }: number | string) => {
  console.log(number, "number passed as prop");
  return (
    <div
      className="flex flex-col  h-197  pr-4 justify-center items-start  rounded-15 pt-8  pl-8 rounded-2xl mt-12"
      style={{
        background:
          "linear-gradient(253deg, rgba(255, 122, 122, 0.56) 14.23%, #2A0FD3 101.22%)",
      }}
    >
      <span className="flex justify-between w-full text-2xl ">
        <h4 className="font-inter leading-normal ">AI Track</h4>
        <h4 className="font-inter leading-normal"> {number} members</h4>
      </span>
      <span className="flex flex-col ">
        <h2 className="font-inter text-4xl leading-normal">Team Number One</h2>
        <p className="font-inter text-xl mb-[18px]">Team Code: TR3QZA13XX1</p>
      </span>
    </div>
  );
};

export default TrackCard;
