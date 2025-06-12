"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { DiResponsive } from "react-icons/di";
import { IoCartSharp, IoSearchCircleSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import {
  MdSupportAgent,
  MdIntegrationInstructions,
  MdOutlineIntegrationInstructions,
  MdSecurity,
} from "react-icons/md";
import { GrCloudSoftware, GrHost, GrHostMaintenance } from "react-icons/gr";
import { TbBrandGoogleAnalytics, TbUxCircle } from "react-icons/tb";

function AnimatedServices() {
  return (
    <section className="bg-blue-100 py-10 md:pb-20  h-full px-4 md:px-10">
      <ServicesLayouts
        icon={<FaCode size={45} />}
        heading={"     1. Custom Website Design"}
        desc={
          "Certainly! Here’s an expanded and more persuasive version of that sentence: We craft visually compelling, custom-tailored designs that capture the essence of your brand — its values, voice, and personality — and translate them into an engaging digital experience. Every element, from color schemes and typography to layout and imagery, is thoughtfully chosen to create a cohesive and memorable impression. The result is a website that not only looks stunning but also resonates with your audience and sets you apart in today’s crowded and competitive digital marketplace."
        }
      />
      <ServicesLayouts
        icon={<DiResponsive size={70} />}
        heading={"     2. Responsive Web Development"}
        desc={
          "We ensure that your website looks and functions flawlessly on all devices, from desktops to smartphones. Our responsive designs adapt seamlessly to different screen sizes, providing an optimal user experience that keeps visitors engaged and encourages them to explore your content."
        }
      />
      <ServicesLayouts
        icon={<IoCartSharp size={45} />}
        heading={"     3. E-commerce Solutions"}
        desc={
          "We specialize in creating robust e-commerce platforms that empower businesses to sell online effectively. From user-friendly product catalogs to secure payment gateways, we provide end-to-end solutions that enhance the shopping experience and drive conversions."
        }
      />
      <ServicesLayouts
        icon={<FaRegCreditCard size={45} />}
        heading={"     4. Content Management Systems (CMS)"}
        desc={
          "We implement user-friendly CMS solutions that allow you to easily manage and update your website content without technical expertise. Whether it’s WordPress, Joomla, or a custom-built CMS, we ensure you have full control over your site."
        }
      />
      <ServicesLayouts
        icon={<IoSearchCircleSharp size={45} />}
        heading={"     5. Search Engine Optimization (SEO)"}
        desc={
          "We optimize your website for search engines, ensuring that it ranks well in search results and attracts organic traffic. Our SEO strategies include keyword research, on-page optimization, and technical SEO to improve your site’s visibility."
        }
      />
      <ServicesLayouts
        icon={<MdSupportAgent size={45} />}
        heading={"     6. Website Maintenance and Support"}
        desc={
          "We offer ongoing maintenance and support services to keep your website running smoothly. From regular updates and backups to security monitoring, we ensure your site remains secure, up-to-date, and performing at its best."
        }
      />
      <ServicesLayouts
        icon={<GrHostMaintenance size={45} />}
        heading={"     7. Performance Optimization"}
        desc={
          "We analyze and optimize your website’s performance to ensure fast loading times and a smooth user experience. Our performance optimization techniques include image compression, code minification, and server-side caching."
        }
      />
      <ServicesLayouts
        icon={<TbBrandGoogleAnalytics size={45} />}
        heading={"     8. Analytics and Reporting"}
        desc={
          "We integrate analytics tools to track user behavior, conversions, and other key metrics. Our detailed reports provide insights into your website’s performance, helping you make data-driven decisions for continuous improvement."
        }
      />
      <ServicesLayouts
        icon={<GrHost size={45} />}
        heading={"     9. Web Hosting and Domain Registration"}
        desc={
          "We provide reliable web hosting solutions and domain registration services to ensure your website is always accessible. Our hosting plans are designed for speed, security, and scalability, allowing your site to grow with your business."
        }
      />
      <ServicesLayouts
        icon={<GrCloudSoftware size={45} />}
        heading={"     10. Custom Web Applications"}
        desc={
          "We develop custom web applications tailored to your specific business needs. Whether it’s a CRM system, booking platform, or any other web-based solution, we leverage the latest technologies to deliver high-performance applications."
        }
      />
      <ServicesLayouts
        icon={<TbUxCircle size={45} />}
        heading={"     11. UI/UX Design"}
        desc={
          "We prioritize user experience in our designs, ensuring that your website is not only visually appealing but also intuitive and easy to navigate. Our UI/UX design process involves user research, wireframing, and prototyping to create a seamless experience."
        }
      />
      <ServicesLayouts
        icon={<MdOutlineIntegrationInstructions size={45} />}
        heading={"     12. Social Media Integration"}
        desc={
          "We integrate social media platforms into your website, allowing you to connect with your audience and share content easily. Our social media solutions enhance engagement and help you build a strong online community."
        }
      />
      <ServicesLayouts
        icon={<MdIntegrationInstructions size={45} />}
        heading={"     13. API Development and Integration"}
        desc={
          "We develop and integrate APIs to connect your website with third-party services, enhancing functionality and user experience. Our API solutions enable seamless data exchange and interoperability between different systems."
        }
      />
      <ServicesLayouts
        icon={<MdSecurity size={45} />}
        heading={"     14. Security Features"}
        desc={
          "We implement robust security measures to protect your website from threats and vulnerabilities. Our security solutions include SSL certificates, firewalls, and regular security audits to ensure your site is safe and secure."
        }
      />
    </section>
  );
}

function ServicesLayouts({ icon, heading, desc }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="mt-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2 mb-2 ">
        <div className="col-span-1 items-center h-36 md:h-full text-gray-900 justify-center flex border p-4 shadow-lg bg-blue-200">
          {icon}
        </div>
        <div className="col-span-1 md:col-span-5 border p-4 shadow-lg bg-white ">
          <h2 className="font-semibold text-lg md:text-xl mb-2 text-gray-900">
            {heading}
          </h2>
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default AnimatedServices;
