import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FaSquareWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  let links = [
    { name: "Software Development", link: "/" },
    { name: "Website Development ", link: "/portfolio" },
    { name: "Mobile App Development", link: "/about" },
    { name: "Networking", link: "/products" },
    { name: "Computer Service & Repair", link: "/services " },
    { name: "CCTV Installations", link: "/about" },
    { name: "Graphic Design", link: "/contact" },
  ];

  let mylinks = [
    { name: "Home", link: "/" },
    { name: "Portifolio ", link: "/portfolio" },
    { name: "Products", link: "/products" },
    { name: "Services", link: "/services " },
    { name: "About", link: "/about" },
    { name: "Contact ", link: "/contact" },
  ];

  const reasons = [
    "10+ Years of ICT Experience",
    "Trusted by Zim Businesses",
    "Affordable & Scalable Solutions",
    "24/7 Client Support",
  ];

  return (
    <div className="w-full flex flex-col gap-10 bg-[#00001C]">
      <div className="grid grid-cols-1 md:grid-cols-5 mx-auto text-gray-500 items-start gap-5 py-10">
        <div className="col-span-1 flex flex-col items-start justify-start px-10 gap-1">
          <h1 className="text-start text-xl font-bold uppercase mt-6 ">
            Services
          </h1>
          <div className="flex flex-col gap-1 text-sm hove:text-blue-600">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="hover:text-blue-600 focus:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-start px-10 gap-1">
          <h1 className="text-start text-xl font-bold uppercase mt-6 ">
            Quick Links
          </h1>
          <div className="flex flex-col gap-1 text-sm hove:text-blue-600">
            {mylinks.map((lk) => (
              <Link
                key={lk.name}
                href={lk.link}
                className="hover:text-blue-600 focus:text-blue-600"
              >
                {lk.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-start justify-start px-10 gap-1">
          <h1 className="text-start text-xl font-bold uppercase mt-6 ">
            Why Choose Us
          </h1>
          <ul className="text-sm list-disc ml-4 text-gray-400">
            {reasons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start px-10 gap-1">
          <h1 className="text-start text-xl font-bold uppercase mt-6 ">
            Newsletter
          </h1>
          <div className="grid md:flex  items-center justify-between gap-2 z-10">
            <input
              type="text"
              name="subscription"
              className="p-2 bg-white w-[70%]"
            />
            <div className="flex items-center justify-center w-20 md:w-[104px]">
              <Button name={"Subscribe"} link={""} />
            </div>
          </div>
          <div className="flex items-start justify-between gap-2 mt-2">
            <Link href={""}>
              <FaSquareWhatsapp size={25} color="green" />
            </Link>
            <Link href={""}>
              <IoLogoFacebook size={25} color="blue" />
            </Link>
            <Link href={""}>
              <FaLinkedin size={25} color="blue" />
            </Link>
            <Link href={""}>
              <FaXTwitter size={25} color="white" />
            </Link>
          </div>
          <p>Mobile: +263 71 247 1209 | +263 77 305 9753</p>
          <p>Email: info@tinasoftnexus.co.zw</p>
        </div>
      </div>
      <hr className="w-[80%] bg-white mx-auto " />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 flex justify-center items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="tinasoftlogo"
              height={100}
              width={200}
              className=" w-32 h-full"
            />
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2"></div>
      </div>
      <div className="bg-blue-400 h-16 flex items-center justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TinaSoft Nexus. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
