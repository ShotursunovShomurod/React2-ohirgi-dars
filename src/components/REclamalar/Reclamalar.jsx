const Reclamalar = ({ title, bg }) => {
  return (
    <div
      className=" rounded-[10px] bg-cover bg-right"
      style={{
        backgroundImage: `url("${bg}")`,
      }}
    >
      <div className="flex flex-col items-start gap-[40px] justify-center h-full md:p-[60px_0_55px_30px] lg:p-[60px_0_55px_30px]">
        <h1 className="font-bold font-quicksand text-[20px] leading-[28.8px] text-[#253D4E] lg:w-[244.65px] text-left">
          {title}
        </h1>
        <button className="border w-[100px] bg-[#32ffa0] text-white font-quicksand py-[4px] font-bold rounded-[4px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Reclamalar;
