import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import Testimonials from "../../components/Testimonials";
import FAQ from "./_components/FAQs";
import NetworkingCallToAction from "./_components/NetworkingCallToAction";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/network1.webp"}
        desc={"Networking Services"}
        directory={"Services | Networking"}
      />
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity- p-4 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              Networking Solutions
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
              Reliable, Scalable & Secure Network Infrastructure
            </h2>
            <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
              At TinaSoft Nexus, we specialize in designing and implementing
              robust networking solutions that ensure seamless connectivity,
              security, and scalability for your business. Whether you need a
              new network setup, upgrades to existing infrastructure, or ongoing
              support, our team has the expertise to deliver tailored solutions
              that meet your specific needs.
            </p>
          </div>
        </div>
      </section>
      {/* Core Services */}
      <div
        className="w-full bg-cover bg-center min-h-[600px] py-20 px-4"
        style={{
          backgroundImage:
            "url('/Artificial Intelligence Technology GIF - Find & Share on GIPHY.gif')",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-lg">
            Our Networking Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌐",
                title: "Network Design & Implementation",
                desc: "Custom network architecture tailored to your business needs, ensuring optimal performance and reliability.",
              },
              {
                icon: "🔒",
                title: "Network Security Solutions",
                desc: "Comprehensive security measures including firewalls, VPNs, and intrusion detection systems to protect your data.",
              },
              {
                icon: "📈",
                title: "Network Monitoring & Support",
                desc: "24/7 monitoring and support services to ensure your network runs smoothly and efficiently.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl hover:shadow-cyan-400/50 text-white transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-white/80">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white py-12 px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Clients Served", value: "250+" },
            { label: "Uptime Guarantee", value: "99.99%" },
            { label: "Support Response", value: "Under 1 Hour" },
            { label: "Network Projects Delivered", value: "150+" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-cyan-700">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Choose TinaSoft Nexus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
            {[
              {
                icon: "⚡",
                title: "Fast Turnaround",
                desc: "We value your time—our team works quickly without compromising quality.",
              },
              {
                icon: "🛡️",
                title: "Enterprise-Grade Security",
                desc: "We implement the latest in cybersecurity to keep your data safe.",
              },
              {
                icon: "🤝",
                title: "End-to-End Support",
                desc: "From consultation to post-deployment—we're with you every step of the way.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <FAQ />
      {/* Call to Action Section for Networking Services */}

      <NetworkingCallToAction />
    </ServicesLayout>
  );
}

export default page;
