import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="w-[335px] md:w-[1440px] mx-auto">
      <div className="">
        <h1 className="text-[42px] text-center font-bold">Our pricing plan</h1>
        <p className="text-[16px] text-[#696B76] text-center">
          online sales tracker that tracks the success of your online sales
          efforts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] w-[335px] md:w-[1170px] mx-auto mt-[72px]">
        <div className="w-[321px] h-[452px] mx-auto bg-[#1E2029] px-[40px] pt-[50px] pb-[40px] rounded-2xl">
          <div className="mb-[42px]">
            <p className="text-[20px] font-medium">Free</p>
            <h2 className="text-[34px] font-bold">
              $00{" "}
              <span className="text-[16px] text-[#8C8F93]">3 months trial</span>
            </h2>
          </div>
          <div>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#04AA69]" /> <span>B2B marketing</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#04AA69]" />
              <span>Cloud based solution</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#04AA69]" />{" "}
              <span>Marketing strategies</span>
            </p>
            <p className="flex gap-3 mb-10">
              <Check className="text-[#04AA69]" />{" "}
              <span>Automated follow up</span>
            </p>
            <button className="px-[30px] py-[14px] bg-[#04AA69] rounded-lg">
              Start free trial
            </button>
          </div>
        </div>

        <div className="w-[321px] h-[452px] mx-auto bg-[#1E2029] px-[40px] pt-[50px] pb-10 rounded-2xl">
          <div className="mb-[42px]">
            <p className="text-[20px] font-medium">Basic</p>
            <h2 className="text-[34px] font-bold">
              $29{" "}
              <span className="text-[16px] text-[#8C8F93]">3 months trial</span>
            </h2>
          </div>
          <div>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#FF7661]" /> <span>B2B marketing</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#FF7661]" />
              <span>Cloud based solution</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#FF7661]" />{" "}
              <span>Marketing strategies</span>
            </p>
            <p className="flex gap-3 mb-10">
              <Check className="text-[#FF7661]" />{" "}
              <span>Automated follow up</span>
            </p>
            <button className="px-[30px] py-[14px] bg-[#FF7661] rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-[321px] h-[452px] mx-auto bg-[#1E2029] px-[40px] pt-[50px] pb-10 rounded-2xl">
          <div className="mb-[42px]">
            <p className="text-[20px] font-medium">Premium</p>
            <h2 className="text-[34px] font-bold">
              $99{" "}
              <span className="text-[16px] text-[#8C8F93]">3 months trial</span>
            </h2>
          </div>
          <div>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#855AFF]" /> <span>B2B marketing</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#855AFF]" />
              <span>Cloud based solution</span>
            </p>
            <p className="flex gap-3 mb-4">
              <Check className="text-[#855AFF]" />{" "}
              <span>Marketing strategies</span>
            </p>
            <p className="flex gap-3 mb-10">
              <Check className="text-[#855AFF]" />{" "}
              <span>Automated follow up</span>
            </p>
            <button className="px-[30px] py-[14px] bg-[#855AFF] rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
