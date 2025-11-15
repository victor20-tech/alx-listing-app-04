import React from "react";;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {
  return (
    <button>
      {children}
    </button>
  );
}
export default Button;