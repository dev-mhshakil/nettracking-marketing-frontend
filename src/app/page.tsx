import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto">
      <Header />
      <Features />
      <WhatWeDo />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
    </main>
  );
}
