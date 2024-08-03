import Image from "next/image";
import { FaAngleLeft, FaAngleRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    title: "Codelabs Digital",
    image: "/images/user1.png",
    text: "Nettracking is a B2B marketing software for telecommunications industry. This realtime cloud-based solution tracks your leads and works on many.",
  },
  {
    name: "Mansur",
    title: "Codelabs Digital",
    image: "/images/user2.png",
    text: "Customer feedback from the system is help for refining customer segmentation as well as positioning of brands. Need to see your leads as the real people",
  },
  {
    name: "Sajib Smith",
    title: "Codelabs Digital",
    image: "/images/user3.png",
    text: "Nettracking was founded in 1995 with improving their internet market. Our team of award-winning intern.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-[375px] md:w-full mx-auto py-16 overflow-hidden">
      <div className="px-6">
        <div className=" flex flex-col md:flex-row justify-between items-start gap-8 mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 relative ${
                index === 0 ? "block" : "hidden"
              } lg:block w-[335px] md:w-[578px] shrink-0 h-[335px] md:h-[307px] rounded-lg border border-white/10 text-center`}
            >
              <div className="absolute -top-4 md:-top-8 right-10 text-[#313339]">
                <FaQuoteLeft className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]" />
              </div>
              <div className="w-24 h-24 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>
              <p className="text-[16px] text-[#696B76] mb-4 text-left">
                {testimonial.text}
              </p>
              <h3 className="font-bold text-[18px] text-[#CACACA] text-left">
                {testimonial.name}
              </h3>
              <p className="text-[12px] text-left text-[#696B76]">
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="w-[10px] h-[10px] rounded-full bg-[#65697A]"></div>
            <div className="w-2 h-2 rounded-full bg-[#3C3E4A]"></div>
            <div className="w-2 h-2 rounded-full bg-[#3C3E4A]"></div>
            <div className="w-2 h-2 rounded-full bg-[#3C3E4A]"></div>
          </div>
          <div className="hidden md:flex gap-[66px]">
            <FaAngleLeft className="w-[14px] h-[24px] text-[#ACA6A6]" />
            <FaAngleRight className="w-[14px] h-[24px] text-[#625C5C]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
