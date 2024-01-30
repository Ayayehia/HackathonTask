const TitleDescriptionSection = () => {
  // lg:ml-[384px] mt-[76px]
  return (
    <div className="flex flex-col gap-2 text-white  mt-[76px]">
      <span className="flex">
        <h2 className="text-gray-300 text-shadow-md font-inter font-semibold text-4xl pr-4">
          Example Hackathon
        </h2>
        <p className="border border-green-400 bg-green-400 shadow-md p-2 rounded-xl w-[99px] h-[35px] text-black flex items-center justify-center">
          confirmed
        </p>
      </span>
      <h3 className="text-white font-inter text-xl font-normal leading-normal">
        JUNE 10-12, 2024
      </h3>
      <p className="text-white font-inter text-base font-normal leading-normal">
        DUBAI, UAE
      </p>
    </div>
  );
};

export default TitleDescriptionSection;
