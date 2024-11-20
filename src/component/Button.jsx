import React from "react";

function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  width,
}) {
  // Class styling berdasarkan properti
  const baseClass =
    "rounded font-inter text-center focus:outline-none transition-all duration-300";
  const sizeClass = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base font-bold",
    lg: "px-6 py-3 text-lg",
  }[size];

  const variantClass = {
    primary: "bg-[#FF8C38] text-white hover:bg-[#E17654]",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  }[variant];

  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${sizeClass} ${variantClass} ${disabledClass} ${width} `}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
