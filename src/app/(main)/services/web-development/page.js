import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import FAQ from "./_components/FAQs";
import Testimonials from "../../components/Testimonials";
import WebCallToAction from "./_components/WebCallToAction";
import AnimatedServices from "./_components/AnimatedServices";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/web1.jpg"}
        desc={"Web Design & Development"}
        directory={"Services | Website Development"}
      />
      <section className="bg-blue-100 py-10 md:pb-20  h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity- p-4 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              Website Development Services
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
              Strategic, Scalable, and Tailored for Your Business
            </h2>
            <p className="mb-4 text-cyan-100">
              At Tinasoft Nexus, we deliver custom website solutions that align
              with your brand, engage your audience, and drive meaningful
              results. Our focus is on creating digital experiences that not
              only look exceptional but also perform seamlessly across all
              devices.
            </p>
          </div>
        </div>

        {/* <h1 className="text-xl md:text-3xl font-bold mb-4">Our Services</h1> */}

        <AnimatedServices />
      </section>
      {/* FAQs */}
      <FAQ />
      {/* Testimonials */}
      {/* <Testimonials /> */}
      {/* Call to Action Section */}
      <WebCallToAction />
    </ServicesLayout>
  );
}
export default page;
