import React from "react";

function BrandBanner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h2 className="font-extrabold text-6xl text-secondary-0">{children}</h2>
  );
}

export default BrandBanner;
