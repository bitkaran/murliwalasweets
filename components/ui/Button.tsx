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
  const baseStyles = "inline-flex items-center justify-center font-semibold font-outfit rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-sm";
  
  const variants = {
    primary: "bg-primary text-ivory hover:bg-primary-dark border border-primary hover:border-primary-dark shadow-md",
    secondary: "bg-cream text-charcoal border border-accent/40 hover:bg-accent/10 shadow-sm",
    gold: "bg-accent text-primary-dark hover:bg-accent-light border border-accent shadow-md",
    glass: "bg-ivory text-charcoal hover:bg-cream border border-accent/30 shadow-sm",
    outline: "bg-transparent text-accent hover:bg-accent/10 border border-accent shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-2 shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2 shrink-0">{icon}</span>}
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
