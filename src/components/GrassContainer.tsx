import Image from "next/image";
import React from "react";

function GrassContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="shadow-2xl w-full mb-5 mt-[-5vh] rounded-bl-lg rounded-br-lg overflow-hidden">
      <div className="bg-grass h-[17px] mb-[-1px]"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-5 pb-10 bg-white">
        {children}
      </div>
    </section>
  );
}

export default GrassContainer;
