

/**
 * Card primitive layout component implementing standard styling tokens.
 */
export default function Card({ children, className = '', hoverEffect = true }) {
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