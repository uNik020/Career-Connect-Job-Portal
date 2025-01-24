import { Button } from "@headlessui/react";
import { Search } from "lucide-react";
import React from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

function Header() {
  return (
    <>
      <div>
        <div className="text-center flex flex-col gap-5 my-10">
          <span className=" mx-auto flex gap-2 items-center px-4 py-2 rounded-full bg-gray-100 text-[#512b95] font-medium ">
          <HiOutlineBuildingOffice/>  No.1 Job Hunt Webiste
          </span>
          <h2 className="text-5xl font-bold">Search Apply & </h2>
          <h2 className="text-5xl font-bold">
            Get Your <span className="text-[#512b95]">Dream job</span>
          </h2>
          <p>
            Start your hunt for the best, life-changing career opportunities
            from here in your
            <br /> selected areas conveniently and get hired quickly.
          </p>
          <div className="flex w-full max-w-md shadow-xl border border-gray-300 rounded-full items-center gap-4 mx-auto p-1 bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Find your jobs here"
              className="w-full p-2 rounded-l-full 
              outline-none  placeholder-gray-400 transition-all duration-200"
            />
            <Button className="bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 rounded-full p-3">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
