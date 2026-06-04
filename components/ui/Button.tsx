"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "gold" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md";
  
  const variants = {
    primary: "bg-primary text-cream hover:bg-primary-dark border border-primary hover:border-primary-dark shadow-primary/20",
    secondary: "bg-cream text-primary border border-primary/20 hover:bg-primary/5 shadow-neutral-200",
    gold: "gold-gradient-bg text-primary-dark font-semibold hover:brightness-110 shadow-accent/20",
    glass: "glass-card text-charcoal hover:bg-white/40 border border-accent/30 shadow-md",
    outline: "bg-transparent text-accent hover:bg-accent/5 border border-accent shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm md:text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};
export default Button;
