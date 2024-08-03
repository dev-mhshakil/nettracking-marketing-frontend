import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="w-335px md:w-full h-[275px] md:h-[343px] mx-auto mt-[50px] md:mt-[140px]">
      <div className="w-[375px] md:w-[600px] h-[168px] md:h-[229px] mx-auto">
        <h1 className="w-[335px] md:w-[600px] mx-auto text-[26px] md:text-[42px] font-bold text-center mb-3 text-white">
          Content marketing solution & <br className="md:hidden" /> idea of your
          business
        </h1>
        <p className="w-[260px] md:w-[464px] mx-auto text-[12px] md:text-[20px] text-[#87888D] text-center mb-3">
          Nettracking is a content marketing solution that tracks the
          effectiveness of your blog,
        </p>
        <div className="flex gap-4 justify-center w-[189px] md:w-[338px] mx-auto">
          <button className="w-[115px] md:w-[186px] flex items-center bg-[#FF664F] py-2 md:py-3 px-2 md:px-6 rounded-md text-[9px] md:text-[14px] font-semibold text-white">
            Explore Platform
            <span>
              <ArrowRight size={16} />
            </span>
          </button>
          <button className="w-[75px] md:w-[136px] bg-[#22222B] py-3 px-2 md:px-6 rounded-md text-[9px] md:text-[14px] font-semibold text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
