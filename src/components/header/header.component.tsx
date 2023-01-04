import HollowMoon from "../SVGs/hollowMoon";

const Header = () => {
  return (
    <header className="shadow-md bg-white">
      <div className="w-[95%] mx-auto py-6 flex justify-between">
        <div>
          <p className="font-bold text-lg cursor-pointer">
            Where in the world?
          </p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-lg">
            <HollowMoon />
          </span>
          <span className="">Dark Mode</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
