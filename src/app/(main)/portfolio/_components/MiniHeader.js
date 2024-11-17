"use client";
import Link from "next/link";
import React, { useState } from "react";
import ImageSlider from "./ImageSliderWebsites";
import ImageSliderWebsites from "./ImageSliderWebsites";
import ImageSliderSoftware from "./ImageSliderSoftware";
import ImageSliderNetworking from "./ImageSliderNetworking";
import ImageSliderCCTV from "./ImagesliderCCTV";

function MiniHeader() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id, e) {
    e.preventDefault();
    setToggle(id);
  }
  return (
    <div className="mb-10 mt-30 md:mt-0 text-blue-950">
      <h1 className="px-4 my-10 text-2xl md:text-4xl font-bold">Explore us</h1>
      <div className=" grid md:flex items-start gap-6 mt-2 cursor-pointer list-none px-4  ">
        <Link
          onClick={(e) => updateToggle(1, e)}
          href={""}
          className="text- hover:bg-blue-700 mx-1 text-white border border-blue-600 bg-blue-950 px-4 py-2 rounded-lg "
        >
          {" "}
          Software Solutions
        </Link>
        <Link
          onClick={(e) => updateToggle(2, e)}
          href={""}
          className="text- hover:bg-blue-500 mx-1 text-white border border-blue-600 bg-blue-950 px-4 py-2 rounded-lg"
        >
          Networking
        </Link>
        <Link
          onClick={(e) => updateToggle(3, e)}
          href={""}
          className="hover:text-black border border-blue-600 hover:bg-blue-200 mx-1 text-white bg-blue-950 px-4 py-2 rounded-lg"
        >
          Websites
        </Link>
        <Link
          onClick={(e) => updateToggle(4, e)}
          href={""}
          className=" hover:text-black border border-blue-600 hover:bg-blue-100 mx-1 text-white bg-blue-950 px-4 py-2 rounded-lg"
        >
          CCTVs
        </Link>
      </div>
      <div className="p-6 mx-0">
        <div className={toggle == 1 ? "block" : "hidden"}>
          <h1 className="text-xl font-semibold mb-10">Software Solutions</h1>
          <ImageSliderSoftware />
        </div>
        <div className={toggle == 2 ? "block" : "hidden"}>
          <h1 className="text-xl font-semibold mb-10"> Networking</h1>
          <ImageSliderNetworking />
        </div>
        <div className={toggle == 3 ? "block" : "hidden"}>
          <h1 className="text-xl font-semibold mb-10"> Website Projects</h1>
          <ImageSliderWebsites />
        </div>
        <div className={toggle == 4 ? "block" : "hidden"}>
          {" "}
          <h1 className="text-xl font-semibold mb-10"> CCTV Solutions</h1>
          <ImageSliderCCTV />
        </div>
      </div>
    </div>
  );
}

export default MiniHeader;
