import { Button } from "@headlessui/react";
import { Search } from "lucide-react";
import React, { useRef } from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import VariableProximity from "./VariableProximity"; // Ensure to import it correctly

function Header() {
  const containerRef = useRef(null);

  return (
    <div className="py-10 px-4 flex flex-wrap justify-center items-center">
      
      <div className="lg:w-7/10 md:w-3/5 w-full lg:pl-4 md:pl-2 pl-0">
        <div className="text-center flex flex-col gap-5 my-10">
          {/* Top Label */}
          <span className="mx-auto flex gap-2 items-center px-4 py-2 rounded-full bg-gray-100 text-[#512b95] font-medium">
            <HiOutlineBuildingOffice className="h-5 w-5" />
            No.1 Job Hunt Website
          </span>

          {/* Headings with Variable Proximity effect */}
          <div ref={containerRef} style={{ position: "relative" }}>
            {/* Apply VariableProximity effect to the first part */}
            <VariableProximity
              label={"Search, Apply &"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-4xl md:text-5xl font-bold"
            />
            
            {/* Apply VariableProximity effect to the second part */}
            <VariableProximity
              label={"Get Your "}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-4xl md:text-5xl font-bold"
            />
             <VariableProximity
              label={"Dream Job "}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-[#512b95] text-4xl md:text-5xl font-bold"
            />
            
           
          </div>

          {/* Description */}
          <p className="text-gray-600 md:text-lg leading-relaxed">
            Start your hunt for the best, life-changing career opportunities
            from here in your
            <br /> selected areas conveniently and get hired quickly.
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-md shadow-xl border border-gray-300 rounded-full items-center gap-4 mx-auto p-1 bg-white hover:shadow-2xl transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Find your jobs here"
              className="w-full p-2 rounded-l-full outline-none placeholder-gray-400 transition-all duration-200"
              aria-label="Job search input"
            />
            <Button
              type="button"
              className="bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 rounded-full p-3"
              aria-label="Search jobs"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:w-3/10 md:w-2/5 w-full lg:pr-4 md:pr-2 pr-0">
        <img src="hero.png" alt="hero_img" className="w-full h-full object-cover object-center" />
      </div>
    </div>
  );
}

export default Header;