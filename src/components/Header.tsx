const Header: React.FC = () => {
  return (
    <>
      <div className="w-full h-60 bg-[#1c2630] flex p-3 pt-2 pb-2 rounded-[15px] justify-between flex">
        <img src="/images/logo-white.svg" alt="logo-white"></img>
        <div className="bg-[hsl(225,23%,24%)] p-[12px] rounded-[10px] flex items-center justify-center">
          <img src="/images/icon-sun.svg" alt="lcon-sun"></img>
        </div>
      </div>
    </>
  );
};

export default Header;
