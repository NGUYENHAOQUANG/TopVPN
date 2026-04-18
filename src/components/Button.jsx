import React from "react";
import { motion } from "motion/react";

// Create a simple utility for classNames if needed, but standard template literals work fine.
const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  // Base style introduces "group" and "overflow-hidden" for the sweeping glow
  const baseStyle =
    "group relative inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-primary text-white shadow-[0_4px_14px_0_rgba(36,65,217,0.39)] hover:shadow-[0_6px_20px_rgba(36,65,217,0.23)] border border-white/10",
    secondary:
      "bg-white text-primary border border-gray-200 hover:border-primary/50 shadow-sm",
    outline: "bg-transparent text-text border border-gray-300 hover:bg-gray-50",
    white:
      "bg-white text-primary shadow-xl hover:shadow-2xl border border-white/50",
  };

  const glowColors = {
    primary: "via-white/40",
    secondary: "via-primary/10",
    outline: "via-gray-400/10",
    white: "via-primary/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const sizeClass = props.size ? sizes[props.size] : sizes.md;

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${sizeClass} ${className}`}
      {...props}
    >
      {/* Front Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Glassmorphic Shine Effect */}
      <div
        className={`absolute inset-0 h-[150%] w-[150%] -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent ${glowColors[variant]} to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[100%] z-0`}
      />
    </motion.button>
  );
};

export default Button;
