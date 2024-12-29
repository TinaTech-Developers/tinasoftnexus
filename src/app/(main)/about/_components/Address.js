import Image from "next/image";
import React from "react";

function Address() {
  return (
    <div className="flex flex-col  items-center justify-center bg-blue-100">
      <Image
        src={"/logo1.png"}
        alt=""
        height={200}
        width={200}
        className="w-48 h-36 object-contain"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">Talk To Experts</h1>
          <div className="text-gray-700 my-4">
            <p>+263 71 247 1209</p>
            <p>+263 77 305 9753</p>
          </div>
        </div>{" "}
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">Our Address</h1>
          <div className="text-gray-700 my-4">
            <p>
              No. 4942 Springvale Park, <br />
              Ruwa Harare
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">24/7 Support</h1>
          <div className="text-gray-700 my-4">
            <p>info@tinasoftnexus.co.zw</p>
            <p>sales@tinasoftnexus.co.zw</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
