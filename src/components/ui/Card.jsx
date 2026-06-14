import React from 'react';
import { Link } from 'react-router-dom'; // STEP 1: Imported Link for dynamic routing

const DurationIcon = () => (
  <svg 
    className="w-4 h-4 text-gray-500" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
    />
  </svg>
);

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className="text-xs text-gray-600 ml-1">({rating})</span>
    </div>
  );
};

export default function Card({ children, className = '', hoverEffect = true, course }) {
  if (course) {
    return (
      /* STEP 2: Changed the parent 'div' to 'Link' and pointed 'to' route parameter dynamically */
      <Link 
        to={`/courses/${course.id}`} 
        className={`
          block
          bg-white 
          border border-gray-200 
          rounded-xl 
          overflow-hidden
          shadow-sm 
          hover:shadow-lg hover:-translate-y-1 transition-all duration-300 
          ${className}
        `}
      >
        <div className="h-48 overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
          
          <div className="flex items-center gap-1 mt-3 text-sm text-gray-600">
            <DurationIcon />
            <span>{course.duration}</span>
          </div>
          
          <div className="mt-2">
            <StarRating rating={course.rating} />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className={`
      bg-white 
      border border-gray-200 
      rounded-xl 
      p-5 
      shadow-sm 
      ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
}