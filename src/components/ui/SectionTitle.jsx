import React from 'react';

/**
 * Standardized Section Headers enforcing clear design typographic hierarchy.
 */
export default function SectionTitle({ title, subtitle, align = 'left' }) {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-8 sm:mb-12 animate-slide-up ${alignmentClass}`}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-text-muted max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-12 bg-primary-blue mt-3 rounded-full" />
    </div>
  );
}