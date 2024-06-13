import Image from "next/image";

const InputBar = () => {
  return (
    <div className="flex flex-row items-center bg-white w-96 h-12">
      <div className="ml-4 flex items-center min-w-5 h-full">
      <Image 
        className="flex-shrink-0"
        src="/magnifying_glass_search_icon.svg"
        width={50}
        height={50}
        alt="Magnifying search icon"
      />
      </div>
      <input className="h-full w-full focus:outline-none placeholder:text-sm"title="Country Search" placeholder="Search for a country..."></input>
    </div>
  );
};

export default InputBar;
