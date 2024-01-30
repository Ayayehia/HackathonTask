import UnderlineButton from "./UnderlineButton";
const TeamButton = () => {
  return (
    <main className="flex w-full justify-start items-center mt-[93px] gap-9 mb-[184px]">
      <button
        type="button"
        className="rounded-xl bg-[#00FF95] px-7 py-3 text-lg  font-medium text-black shadow-sm "
      >
        Edit Your Info
      </button>
      <UnderlineButton Text=" Remove This Client" />
    </main>
  );
};

export default TeamButton;
