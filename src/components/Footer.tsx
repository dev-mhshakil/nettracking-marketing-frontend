import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[375px] md:w-[1440px] mx-auto mt-10 md:mt-[109px] ">
      <div className="w-[375px] md:w-[1170px] mx-auto flex flex-col md:flex-row gap-10 md:gap-[240px] px-5 py-10">
        <div className="">
          <h2 className="text-[24px] font-bold">Nettracking</h2>
          <p className="w-[209px] h-[72px] text-[14px] text-[#696B76] mt-3">
            We saw our customers confusing us with some of the other companies
            intheindustry
          </p>
          <div className="flex gap-4 mt-5">
            <FaFacebookSquare size={15} />
            <FaTwitter size={15} />
            <FaLinkedin size={15} />
          </div>
        </div>
        <div className="w-[345px] md:w-[635px] grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-[152px]">
          <div>
            <h2 className="text-[16px] font-medium mb-[26px]">Product</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] text-[#696B76]">Product</li>
              <li className="text-[16px] text-[#696B76]">Features</li>
              <li className="text-[16px] text-[#696B76]">Pricing</li>
              <li className="text-[16px] text-[#696B76]">Case Studies</li>
            </ul>
          </div>
          <div>
            <h2 className="text-[16px] font-medium mb-[26px]">Service</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] text-[#696B76]">Blog</li>
              <li className="text-[16px] text-[#696B76]">Road Map</li>
              <li className="text-[16px] text-[#696B76]">Testimonial</li>
              <li className="text-[16px] text-[#696B76]">Good Tear</li>
            </ul>
          </div>

          <div className="w-[177px]">
            <h2 className="text-[16px] font-medium mb-[26px]">Solutions</h2>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] text-[#696B76]">Process Management</li>
              <li className="text-[16px] text-[#696B76]">Request Management</li>
              <li className="text-[16px] text-[#696B76]">
                Workflow Management
              </li>
              <li className="text-[16px] text-[#696B76]">Finance</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2029] w-[375px] md:w-[1440px] h-[50px] mt-10 flex justify-center items-center">
        <p className="text-[12px] text-[#5A5C68]">
          © Copyright 2024 by Codelabs Digital. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
