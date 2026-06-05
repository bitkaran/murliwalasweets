"use client";

import React from "react";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  eyebrow,
  title,
  description,
}) => {
  return (
    <section className="relative pt-10 pb-10 md:pt-16 md:pb-16 bg-primary-dark text-cream text-center overflow-hidden border-b border-accent/30 w-full flex items-center justify-center">
      {/* Subtle traditional design grid overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#f6ad56_1.2px,transparent_0)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-2">
        <span className="text-accent font-bold tracking-widest text-xs uppercase block font-outfit">
          {eyebrow}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-playfair text-cream leading-tight">
          {title}
        </h1>
        <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-2" />
        {description && (
          <p className="text-cream/80 max-w-2xl mx-auto font-outfit text-xs sm:text-sm md:text-base leading-relaxed mt-2">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
