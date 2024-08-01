import BookIcon from "./icons/BookIcon";
import EditIcon from "./icons/EditIcon";
import MonitorIcon from "./icons/MonitorIcon";
import StatisticsIcon from "./icons/StatisticsIcon";
import TrackIcon from "./icons/TrackIcon";

const Features = () => {
  return (
    <div className="w-[375px] md:w-[1170px] h-[755px] md:h-[825px] mx-auto">
      <div className="">
        <h1 className="text-center text-[26px] md:text-[42px] font-bold mb-4">
          Key features
        </h1>
        <div className="w-[288px] md:w-[522px] h-[52px] mx-auto">
          <p className="text-[#808188] text-[12px] md:text-[18px] text-center">
            NetTracking™ has quickly become the go-to content marketing solution
            for over 600 clients around the world
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 px-[20px] py-[40px] md:p-[100px] bg-[#1E2029] w-[375px] md:w-[1170px] h-[600px] md:h-[611px] mt-12 md:mt-24">
        <div className="w-[160px] md:w-[250px] h-[170px] md:h-[193px]">
          <div className="w-[40px] md:w-[61px] h-[40px] md:h-[61px] flex items-center justify-center bg-[#0F161B] p-2 md:p-4 rounded-full">
            <BookIcon />
          </div>
          <div className="w-[160px] md:w-full mt-3 md:mt-6">
            <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Real-Time Email ALerts
            </h2>
            <div className="w-[160px] md:w-[250px] h-[72px]">
              <p className="text-[12px] md:text-[16px] text-[#696B76]">
                NetTracking™ is a very powerful Web 2.0 site search engine
                allows you to find email allerts
              </p>
            </div>
          </div>
        </div>
        <div className="w-[160px] md:w-[250px] h-[170px] md:h-[193px]">
          <div className="w-[40px] md:w-[61px] h-[40px] md:h-[61px] flex items-center justify-center bg-[#0F161B] p-2 md:p-4 rounded-full">
            <MonitorIcon />
          </div>
          <div className="w-[160px] md:w-full mt-3 md:mt-6">
            <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Monitor Inbound Traffic
            </h2>
            <div className="w-[160px] md:w-[250px] h-[72px]">
              <p className="text-[12px] md:text-[16px] text-[#696B76]">
                The biggest challenge for marketers is being heard inbound
                traffice in market.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[160px] md:w-[250px] h-[170px] md:h-[193px]">
          <div className="w-[40px] md:w-[61px] h-[40px] md:h-[61px] flex items-center justify-center bg-[#0F161B] p-2 md:p-4 rounded-full">
            <TrackIcon />
          </div>
          <div className="w-[160px] md:w-full mt-3 md:mt-6">
            <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Track Multiple Sites
            </h2>
            <div className="w-[160px] md:w-[250px] h-[72px]">
              <p className="text-[12px] md:text-[16px] text-[#696B76]">
                Nettracking gives you an innovative web-based tool that manages
                multiple sites
              </p>
            </div>
          </div>
        </div>
        <div className="w-[160px] md:w-[250px] h-[170px] md:h-[193px]">
          <div className="w-[40px] md:w-[61px] h-[40px] md:h-[61px] flex items-center justify-center bg-[#0F161B] p-2 md:p-4 rounded-full">
            <StatisticsIcon />
          </div>
          <div className="w-[160px] md:w-full mt-3 md:mt-6">
            <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Aggregate Statistics
            </h2>
            <div className="w-[160px] md:w-[250px] h-[72px]">
              <p className="text-[12px] md:text-[16px] text-[#696B76]">
                to changes in your website&apos;s ranking filters and reports on
                your websites search engine ranking results.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[160px] md:w-[250px] h-[170px] md:h-[193px]">
          <div className="w-[40px] md:w-[61px] h-[40px] md:h-[61px] flex items-center justify-center bg-[#0F161B] p-2 md:p-4 rounded-full">
            <EditIcon />
          </div>
          <div className="w-[160px] md:w-full mt-3 md:mt-6">
            <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Edit Exclude
            </h2>
            <div className="w-[160px] md:w-[250px] h-[72px]">
              <p className="text-[12px] md:text-[16px] text-[#696B76]">
                In short, nettracking gives you the information that allows you
                to changes in your website&apos;s ranking
              </p>
            </div>
          </div>
        </div>
        <div className="w-[160px] md:w-[250px] h-[170px] md:h-[193px]">
          <div className="w-[40px] md:w-[61px] h-[40px] md:h-[61px] flex items-center justify-center bg-[#0F161B] p-2 md:p-4 rounded-full">
            <BookIcon />
          </div>
          <div className="w-[160px] md:w-full mt-3 md:mt-6">
            <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Easy To Implement
            </h2>
            <div className="w-[160px] md:w-[250px] h-[72px]">
              <p className="text-[12px] md:text-[16px] text-[#696B76]">
                Accurately track organic (or natural) search engine movement
                over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
