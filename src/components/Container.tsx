import React from "react";

function Container({
  children,
  className = "",
  background = "",
  id = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  background?: string;
  id?: string;
}>) {
  return (
    <div className={background} id={id}>
      <div
        className={`max-w-screen-xl mx-auto h-[100%] flex flex-col justify-center items-center gap-2 px-md-0 px-4 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
