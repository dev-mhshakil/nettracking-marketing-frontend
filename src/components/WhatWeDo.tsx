import { ArrowRight } from "lucide-react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="w-[335px] md:w-[1170px] mx-auto mt-0 md:mt-24">
      <div className="w-[335px] md:w-[605px] mx-auto">
        <h1 className="text-[26px] md:text-[42px] mt-[40px] font-bold text-center text-white">
          Creative solutions to expand your business!
        </h1>
        <div className="w-[282px] md:w-[466px] h-[48px] mx-auto mt-2">
          <p className="text-[12px] md:text-[16px] text-[#696B76] text-center">
            Nettracking is designed with an integrated tracking system that
            allows customers to track their package
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-[40px] md:mt-24">
        <div className="w-[335px] md:w-[575px] h-[288px] md:h-[539px] px-[20px] py-[30px] md:p-[50px] bg-[#1E2029] rounded-3xl">
          <div className="flex gap-4">
            <button className="px-[10px] md:px-4 py-[7px] md:py-3 bg-[#2A2C34] rounded-md text-[8px] md:text-[14px] font-semibold text-white">
              Founder
            </button>
            <button className="px-[10px] md:px-4 py-[7px] md:py-3 bg-[#2A2C34] rounded-md text-[8px] md:text-[14px] font-semibold text-white">
              Blogger
            </button>
            <button className="px-[10px] md:px-4 py-[7px] md:py-3 bg-[#2A2C34] rounded-md text-[8px] md:text-[14px] font-semibold text-white">
              Marketer
            </button>
            <button className="px-[10px] md:px-4 py-[7px] md:py-3 bg-[#2A2C34] rounded-md text-[8px] md:text-[14px] font-semibold text-white">
              Agency
            </button>
          </div>
          <div className="mt-[30px] md:mt-24">
            <h1 className="w-[316px] text-[18px] md:text-[30px] font-semibold text-white">
              Track The Results Of Your Work
            </h1>
            <p className="w-[221px] md:w-[380px] text-[10px] md:text-[16px] text-[#696B76] mt-[10px] md:mt-4">
              The tracking system sends customers notifications on shipping date
              status, shipping notification, delivery confirmation, package
              delivered with time and date, etc.
            </p>
            <div className="mt-10">
              <button className="w-[115px] md:w-[186px] flex items-center bg-[#FF664F] py-2 md:py-3 px-2 md:px-6 rounded-md text-[9px] md:text-[14px] font-semibold text-white">
                Explore Platform
                <span>
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[335px] md:w-[575px] h-[314px] md:h-[539px] bg-[#1E2029] rounded-3xl">
          <Image
            src="/images/whatwedo.png"
            width={575}
            height={539}
            alt="what we do"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
