import fridge from "../../public/img/fridge.png";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex p-[50px] w-[60%] justify-center items-center">
        <h1>What's in your fridge ?</h1>
        <img src={fridge} className="h-[400px]" />
      </div>
      <div className="w-[60%] border-1 border-black flex justify-between pl-[20px] pr-[6px] py-[6px] rounded-[20px]">
        <input
          className="flex-1 focus:outline-none"
          placeholder="Search for ingredients"
        ></input>
        <button className="px-[20px] py-[6px] bg-[#FFBA00] rounded-[14px] text-white font-medium">
          Find recipes
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
