import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Udaipur",
      "Mangalore",
      "Salem",
      "Chittoor",
      "Remote",
    ],
  },
  {
    filterType: "Industry",
    array: [
      "IT",
      "Finance",
      "Marketing",
      "Healthcare",
      "Education",
      "Manufacturing",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  return (
    <div className="w-full bg-white rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={data.filterType}> {/* Added key here */}
            <h2 className="font-bold text-lg">{data.filterType}</h2>

            {data.array.map((item, idx) => (
              <div key={item} className="flex items-center space-x-2 my-2"> {/* Added key here */}
                <RadioGroupItem value={item}></RadioGroupItem>
                <label>{item}</label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filter;
