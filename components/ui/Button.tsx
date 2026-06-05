"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "gold" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  href,
  target,
  rel,
  onClick,
  disabled,
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold font-outfit rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm gap-2 whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary text-cream hover:bg-primary-dark border border-primary hover:border-primary-dark shadow-md",
    secondary: "bg-cream text-charcoal border border-accent hover:bg-accent hover:text-charcoal transition-all shadow-sm",
    gold: "bg-accent text-charcoal hover:bg-accent-light border border-accent shadow-md",
    glass: "bg-cream/40 text-charcoal hover:bg-cream border border-accent/30 shadow-sm",
    outline: "bg-transparent text-accent hover:bg-accent/10 hover:text-accent-light border border-accent shadow-none",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-[10px] sm:text-xs",
    md: "px-5 py-2.5 text-xs sm:text-sm md:text-base",
    lg: "px-6 py-3 text-xs sm:text-sm md:text-base lg:text-lg",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0 inline-flex items-center justify-center">{icon}</span>}
      <span className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap">{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0 inline-flex items-center justify-center">{icon}</span>}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        className={combinedClassName}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      disabled={disabled}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClassName}
    >
      {content}
    </motion.button>
  );
};
export default Button;
