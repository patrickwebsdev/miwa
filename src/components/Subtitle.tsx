import React from "react";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}
function Subtitle({ children, className = "", ...props }: SubtitleProps) {
  return (
    <h4 className={`font-bold text-1xl ${className}`} {...props}>
      {children}
    </h4>
  );
}

export default Subtitle;
