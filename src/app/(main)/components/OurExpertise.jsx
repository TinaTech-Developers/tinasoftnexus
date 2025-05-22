import React from "react";
import { FaNetworkWired } from "react-icons/fa6";
import { GrCloudComputer, GrSystem } from "react-icons/gr";
import { IoHardwareChipSharp } from "react-icons/io5";
function OurExpertise() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" my-10">
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase font-semibold text-sm text-blue-400">
            how we work
          </p>
          <h1 className=" group text-blue-950 text-center  text-2xl md:text-3xl uppercase ">
            Our Expertise
            <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2  "></span>
            <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[110px] -translate-y-1 md:ml-7"></span>
            <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[165px] -translate-y-2 md:ml-10"></span>
          </h1>
        </div>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-10 gap-5 mx-auto">
          <OurExpertiseCard
            icon={<GrSystem size={55} />}
            heading={"Custom Software Development"}
          />
          <OurExpertiseCard
            icon={<GrCloudComputer size={55} />}
            heading={"Cloud Computing Solutions"}
          />
          <OurExpertiseCard
            heading={"Networking Infrastructure"}
            icon={<FaNetworkWired size={55} />}
          />
          <OurExpertiseCard
            icon={<IoHardwareChipSharp size={55} />}
            heading={"Hardware Maintenance & Support"}
          />
        </div>
      </div>
    </div>
  );
}

const OurExpertiseCard = ({ icon, heading }) => {
  return (
    <div className="col-span-1 mx-5 w-[90%] bg-blue-100 h-40  items-center justify-center text-black hover:bg-blue-950 hover:text-white rounded-lg">
      <div className="flex flex-col items-center justify-center h-full">
        {icon}
        <h1 className="text-xl text-center font-bold my-4"> {heading}</h1>
      </div>
    </div>
  );
};
export default OurExpertise;
