import Link from "next/link";
import React from "react";

function Button({ link, name }) {
  return (
    <Link
      className="p-2 px-4 bg-blue-950 my-4 rounded-md w-[105px] hover:bg-blue-700 hover:text-white"
      href={link}
    >
      {name}
    </Link>
  );
}

export default Button;
