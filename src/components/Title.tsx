import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className, ...props }: TitleProps) {
  return (
    <h3 className={`font-bold text-4xl ${className}`} {...props}>
      {children}
    </h3>
  );
}

export default Title;
