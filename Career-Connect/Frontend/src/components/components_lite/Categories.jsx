import React from "react";

const Category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Blockchain Developer",
  "Mobile App Developer",
  "Web Developer",
  "Cloud Engineer",
  "Cybersecurity Analyst",
  "UI/UX Designer",
  "Database Administrator",
  "System Administrator",
  "Game Developer",
  "Software Engineer",
  "Data Analyst",
  "Product Manager",
  "Quality Assurance Engineer",
  "Business Analyst",
  "Solutions Architect",
  "Network Engineer",
  "Salesforce Developer",
  "Technical Writer",
];

function Categories() {
  return (
    <>
      <style>
        {`
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}
      </style>

      <div className="flex flex-col items-center">
        <h1 className=" text-2xl font-bold text-[#7e22ce]">Categories</h1>
        <p>Explore our extensive jobs</p>

        {/* Scrolling Categories Section */}
        <div className="overflow-hidden relative w-full  my-10">
          <div
            className="flex w-max gap-4 animate-scroll whitespace-nowrap"
            style={{
              animation: "scroll 60s linear infinite",
              animationTimingFunction: "linear",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {Category.concat(Category).map((category, index) => (
              <div
                key={index}
                className="text-violet-600 bg-violet-100 px-3 py-1 rounded-full font-medium"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
