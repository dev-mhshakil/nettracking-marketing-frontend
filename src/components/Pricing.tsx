import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="w-[335px] md:w-[1440px] mx-auto mt-[80px]">
      <div className="">
        <h1 className="text-[26px] md:text-[42px] text-center font-bold text-white">
          Our pricing plan
        </h1>
        <p className="text-[12px] md:text-[16px] text-[#696B76] text-center mt-3">
          online sales tracker that tracks the success of your online sales
          efforts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] w-[335px] md:w-[1170px] mx-auto mt-[72px]">
        <div className="w-[321px] h-[452px] mx-auto bg-[#1E2029] px-[40px] pt-[50px] pb-[40px] rounded-2xl">
          <div className="mb-[42px]">
            <p className="text-[20px] font-medium text-white">Free</p>
            <h2 className="text-[34px] font-bold text-white">
              $00{" "}
              <span className="text-[16px] text-[#8C8F93]">3 months trial</span>
            </h2>
          </div>
          <div>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#04AA69]" />{" "}
              <span className="text-white">B2B marketing</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#04AA69]" />
              <span className="text-white">Cloud based solution</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#04AA69]" />{" "}
              <span className="text-white">Marketing strategies</span>
            </p>
            <p className="flex gap-3 mb-10">
              <Check className="text-[#04AA69]" />{" "}
              <span className="text-white">Automated follow up</span>
            </p>
            <button className="px-[30px] py-[14px] bg-[#04AA69] rounded-lg text-white">
              Start free trial
            </button>
          </div>
        </div>

        <div className="w-[321px] h-[452px] mx-auto bg-[#1E2029] px-[40px] pt-[50px] pb-10 rounded-2xl">
          <div className="mb-[42px]">
            <p className="text-[20px] font-medium text-white">Basic</p>
            <h2 className="text-[34px] font-bold text-white">
              $29{" "}
              <span className="text-[16px] text-[#8C8F93]">3 months trial</span>
            </h2>
          </div>
          <div>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#FF7661]" />{" "}
              <span className="text-white">B2B marketing</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#FF7661]" />
              <span className="text-white">Cloud based solution</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#FF7661]" />{" "}
              <span className="text-white">Marketing strategies</span>
            </p>
            <p className="flex gap-3 mb-10">
              <Check className="text-[#FF7661]" />{" "}
              <span className="text-white">Automated follow up</span>
            </p>
            <button className="px-[30px] py-[14px] bg-[#FF7661] rounded-lg text-white">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-[321px] h-[452px] mx-auto bg-[#1E2029] px-[40px] pt-[50px] pb-10 rounded-2xl">
          <div className="mb-[42px]">
            <p className="text-[20px] font-medium text-white">Premium</p>
            <h2 className="text-[34px] font-bold text-white">
              $99{" "}
              <span className="text-[16px] text-[#8C8F93]">3 months trial</span>
            </h2>
          </div>
          <div>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#855AFF]" />{" "}
              <span className="text-white">B2B marketing</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#855AFF]" />
              <span className="text-white">Cloud based solution</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#855AFF]" />{" "}
              <span className="text-white">Marketing strategies</span>
            </p>
            <p className="flex gap-3 mb-10">
              <Check className="text-[#855AFF]" />{" "}
              <span className="text-white">Automated follow up</span>
            </p>
            <button className="px-[30px] py-[14px] bg-[#855AFF] rounded-lg text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
