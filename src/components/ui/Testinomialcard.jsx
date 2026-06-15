import React from 'react';
import Card from "../ui/Card"; // Aapka existing Card component[cite: 9]

const TestimonialCard = ({ testimonial }) => {
  // Brand New high-quality Unsplash portrait links
  const defaultImage = testimonial.gender === 'female' 
    ? "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" // New Female Avatar
    : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"; // New Male Avatar

  const displayImage = testimonial.image || defaultImage;

  return (
    <Card 
      hoverEffect={true} 
      className="relative flex flex-col h-full border-l-4 border-l-primary-blue pt-8"
    >
      {/* Decorative Quote Icon */}
      <div className="absolute top-4 right-6 opacity-10">
        <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" className="text-primary-blue">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H11.017C10.4647 12 10.017 11.5523 10.017 11V6C10.017 5.44772 10.4647 5 11.017 5H19.017C20.6739 5 22.017 6.34315 22.017 8V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91239 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H3.017C2.46472 8 2.017 8.44772 2.017 9V11C2.017 11.5523 1.56928 12 1.017 12H-0.983C-1.53528 12 -1.983 11.5523 -1.983 11V6C-1.983 5.44772 -1.53528 5 -0.983 5H7.017C8.67386 5 10.017 6.34315 10.017 8V15C10.017 18.3137 7.33071 21 4.017 21H2.017Z" />
        </svg>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={displayImage}
            alt={testimonial.name}
            className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 h-4 w-4 rounded-full border-2 border-white" title="Verified Graduate"></div>
        </div>

        <div>
          <h4 className="font-bold text-text-dark text-base">
            {testimonial.name}
          </h4>
          <p className="text-xs font-medium text-primary-blue uppercase tracking-wider">
            {testimonial.role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <p className="text-sm italic leading-relaxed text-text-muted">
          "{testimonial.message}"
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Verified Review</span>
      </div>
    </Card>
  );
};

export default TestimonialCard;