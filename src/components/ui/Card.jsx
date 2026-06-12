import React from 'react';

/**
 * Card primitive layout component implementing standard styling tokens.
 */
export default function Card({ children, className = '', hoverEffect = true, course }) {

  if (course) {
    const StarRating = ({ rating }) => {
      return (
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>
      );
    };

    return (
      <div className={`
        bg-secondary-white 
        border border-secondary-gray-dark 
        rounded-xl 
        p-5 
        shadow-xs 
        hover:shadow-md hover:-translate-y-1 transition-all duration-300 
        ${className}
      `}>

        <div className="h-44 -mt-5 -mx-5 overflow-hidden rounded-t-xl">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="mt-4">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">by {course.instructor}</p>
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-gray-600">⏱️ {course.duration}</span>
            <StarRating rating={course.rating} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`
      bg-secondary-white 
      border border-secondary-gray-dark 
      rounded-xl 
      p-5 
      shadow-xs 
      ${hoverEffect ? 'hover:shadow-md hover:-translate-y-1 transition-all duration-300' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
}