import React, { memo } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer at Google",
    text: "This platform helped me land my dream job! The process was smooth and efficient.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Product Manager at Amazon",
    text: "A fantastic job portal! I found my ideal role within weeks of signing up.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Lee",
    role: "UX Designer at Adobe",
    text: "I was amazed by the number of quality job listings. The UI is super intuitive!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Data Scientist at Microsoft",
    text: "The best job search platform I’ve used. Highly recommended for tech professionals!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Daniel Brown",
    role: "Cybersecurity Analyst at IBM",
    text: "Super secure and easy to use. This site made my job search effortless!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// Memoized StarRating Component
const StarRating = memo(({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-yellow-400 ${
            index < rating ? "opacity-100" : "opacity-30"
          }`}
          aria-label={`${rating} out of 5 stars`}
        >
          ★
        </span>
      ))}
    </div>
  );
});

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  const { name, role, text, rating, image } = testimonial;

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 min-w-[280px] max-w-[320px] flex flex-col items-center space-y-3 mx-2">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">{name}</h3>
      <p className="text-sm text-gray-600 text-center">{role}</p>
      <StarRating rating={rating} />
      <p className="text-center text-gray-500 text-sm italic break-words max-w-full overflow-hidden overflow-ellipsis">
        "{text}"
      </p>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto my-20 px-4 overflow-hidden">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
        <span className="text-[#6A38C2]">What Our Users Say</span>
      </h2>

      {/* Scrolling Testimonials */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 animate-scroll whitespace-nowrap">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
          {/* Duplicate for seamless scroll */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`duplicate-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;