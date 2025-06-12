"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Portifolio", link: "/portfolio" },
    // { name: "Products", link: "/products" },
    {
      name: "Services",
      link: "#", // Empty link to prevent navigation when clicking on 'Services' (for dropdown)
      dropdown: [
        { name: "Web Development", link: "/services/web-development" },
        { name: "Software Development", link: "/services/software" },
        { name: "Networking", link: "/services/networking" },
        { name: "CCTV Installation", link: "/services/cctv" },
        { name: "IT Consulting", link: "/services/it-consulting" },
        { name: "Hardware Repair", link: "/services/hardware-repair" },
        { name: "Cloud Computing", link: "/services/cloud-computing" },
      ],
    },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown visibility

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50 border-b-2 border-blue-600">
      <div className="hidden md:block h-10 w-full bg-blue-950">
        <h1 className="text-sm text-center text-white py-2 ">
          Mon - Fri : 08:00 - 17:00 | Sat : 08:00 - 13:00 | Sun : Closed
        </h1>
      </div>
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Image
          src={"/logo.png"}
          alt="tinasoftlogo"
          height={50}
          width={100}
          className="md:w-32 md:h-full object-cover"
        />
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-0 cursor-pointer md:hidden my-8"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in mt-8 ${
            open ? "top-10 opacity-100" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-base md:my-0 my-4 relative"
            >
              <span className="flex items-center justify-center ">
                {/* For "Services", use a clickable anchor tag but allow dropdown toggling */}
                <a
                  href={link.link} // 'href' should be valid link
                  className="group text-gray-800 hover:text-blue-950 transition duration-800 uppercase"
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault(); // Prevent default behavior only for 'Services' link
                      setDropdownOpen(!dropdownOpen); // Toggle the dropdown
                    }
                  }}
                >
                  {link.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-950"></span>
                </a>{" "}
                {/* Add the dropdown arrow icon here */}
                {link.dropdown && (
                  <span className="ml-1 mb-1">
                    {dropdownOpen ? (
                      <IoChevronUp className="inline-block text-lg" />
                    ) : (
                      <IoChevronDown className="inline-block text-lg" />
                    )}
                  </span>
                )}
              </span>
              {/* Dropdown menu for "Services" */}
              {link.dropdown && dropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded- border-b-4 border-blue-600  w-36 md:w-48  z-50">
                  {link.dropdown.map((subLink) => (
                    <li key={subLink.name} className="hover:bg-gray-100">
                      <a
                        href={subLink.link} // This allows navigation to sub-links
                        className="block group px-4 py-1 text-sm md:text-[1rem] text-gray-800 hover:text-blue-950"
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
