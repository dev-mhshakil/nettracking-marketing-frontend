import Image from "next/image";

const timeline = [
  {
    icon: "01",
    image: "/images/hiw-image1.png",
    title: "Add Website",
    desc: "Nettracking gives you an innovative web-based tool that manages, filters and reports on your website's",
  },
  {
    icon: "02",
    image: "/images/hiw-image2.png",
    title: "Get Tracking Code",
    desc: "filters and reports on your website's search engine ranking results. In short, nettracking gives you the information",
  },
  {
    icon: "03",
    image: "/images/hiw-image3.png",
    title: "Start Tracking",
    desc: "in your website's ranking position and accurately track organic (or natural) search engine movement over time.",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-[375px] md:w-[1440px] mx-auto mt-[80px]">
      <div className="mb-[65px]">
        <h1 className="text-[26px] md:text-[42px] font-bold text-center text-white">
          How it works
        </h1>
      </div>
      <div className="w-[335px] md:w-[1170px] mx-auto bg-[#1E2029] py-10 md:py-[70px] px-4 md:px-[160px]">
        {/* timeline */}
        <div className="relative flex flex-col md:flex-row md:items-center">
          {/* Timeline Line for large devices */}
          <div className="hidden md:block absolute top-16 bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="w-[2px] h-full border-dashed border-[#3E4047] border"></div>
          </div>
          {/* Timeline Line for small devices */}
          <div className="block md:hidden absolute top-16 bottom-52 left-3 transform -translate-x-1/2">
            <div className="w-[2px] h-full border-dashed border-[#3E4047] border"></div>
          </div>

          <div className="space-y-8 md:space-y-0 w-full max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col px-10 md:px-0 gap-8 md:gap-20 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Icon (visible only on large devices) */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 left-[383px] -translate-x-1/2 w-10 h-10 rounded-full border border-white/10 bg-[#2D2F37] shadow hidden md:flex justify-center items-center`}
                >
                  <span className="text-white">{item.icon}</span>
                </div>

                {/* Timeline Icon (visible only on small screens) */}
                <div className=" flex md:hidden items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#2D2F37] shadow absolute -left-2 md:-left-10 top-20 transform -translate-y-1/2">
                  <span className="text-white">{item.icon}</span>
                </div>

                {/* Image */}
                <div className={`flex items-center justify-center md:w-1/2`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150}
                    height={150}
                    className="rounded border border-slate-200 shadow"
                  />
                </div>

                {/* Card */}
                <div className={`w-full md:w-1/2  p-4 `}>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">{item.title}</div>
                  </div>
                  <div className="text-[16px] text-[#696B76]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
