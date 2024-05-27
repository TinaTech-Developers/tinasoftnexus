"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "Services", link: "/services " },
    { name: "About", link: "/about" },
    { name: "Contact ", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="h-10 w-full bg-blue-950">
        <h1 className=" text-sm text-center text-white py-2 font-semibold">
          Welcome To TinaSoft Nexus
        </h1>
      </div>
      <div className="md:flex items-center justify-between bg-white py-4  md:px-10 px-7">
        <h1 className="text-3xl font-bold text-blue-950 ">TinaSoft Nexus</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden my-8"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4
        absolute md:static bg-white  x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in mt-8 ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-4">
              <a
                href={link.link}
                className="group text-gray-800 hover:text-blue-950 transition duration-800 uppercase"
              >
                {link.name}
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-950"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
