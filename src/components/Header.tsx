import React from "react";
import Container from "./Container";

function Header({
  children,
  className,
  style,
  id = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}>) {
  return (
    <header
      className={`md:h-[70vh] h-[100vh] bg-center bg-cover bg-no-repeat flex justify-center ${className}`}
      style={style}
      id={id}
    >
      <Container background="text-center gap-5 md:gap-2">{children}</Container>
    </header>
  );
}

export default Header;
