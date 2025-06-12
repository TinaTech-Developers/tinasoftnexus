import Link from "next/link";
import React from "react";

function HomeButton({ link, name }) {
  return (
    <div className="border py-[7px] border-blue-950 ">
      <Link
        href={link}
        className={`bg-white text-xs md:text-sm py-2 relative md:px-4 px-2   bg-transparent text-blue-950 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
      >
        {name}
      </Link>
    </div>
  );
}

export default HomeButton;
