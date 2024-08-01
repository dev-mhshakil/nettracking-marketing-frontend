import Features from "@/components/Features";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Features />
      <WhatWeDo />
      {/* <HowItWorks /> */}
      <Pricing />
    </main>
  );
}
