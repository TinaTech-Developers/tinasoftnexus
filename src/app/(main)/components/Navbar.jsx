"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Portifolio", link: "/portfolio" },
    { name: "Products", link: "/products" },
    {
      name: "Services",
      link: "/services",
      dropdown: [
        { name: "Web Development", link: "/services/web-development" },
        {
          name: "Software Development",
          link: "/services/software",
        },
        { name: "Networking", link: "/services/networking" },
        { name: "CCTV Installation", link: "/services/cctv" },
        { name: "IT Consulting", link: "/services/it-consulting" },
        { name: "Hardware Repair", link: "/services/hardware-repair" },
        { name: "SEO", link: "/services/seo" },
      ],
    },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(false);

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="h-10 w-full bg-blue-950">
        <h1 className="text-sm text-center text-white py-2 font-semibold">
          Welcome To TinaSoft Nexus : +263
        </h1>
      </div>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Image
          src={"/logo.jpg"}
          alt="tinasoftlogo"
          height={50}
          width={100}
          className="w-32 h-full object-cover"
        />
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden my-8"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in mt-8 ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-4 relative"
              onMouseEnter={() => link.dropdown && setHoveredService(true)}
              onMouseLeave={() => link.dropdown && setHoveredService(false)}
            >
              <a
                href={link.link}
                className="group text-gray-800 hover:text-blue-950 transition duration-800 uppercase"
              >
                {link.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-950"></span>
              </a>

              {/* Dropdown menu for "Services" */}
              {link.dropdown && hoveredService && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-36 z-50">
                  {link.dropdown.map((subLink) => (
                    <li key={subLink.name} className="hover:bg-gray-100">
                      <a
                        href={subLink.link}
                        className="block group px-4 py-1 text-sm text-gray-800 hover:text-blue-950"
                      >
                        {subLink.name}
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-950"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
