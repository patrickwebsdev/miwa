import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  icon: {
    url: string;
  };
  title: string;
  subtitle: string;
  information: {
    slug: string;
  };
  last: boolean;
  odd: boolean;
};

function Characteristic(props: Props) {
  const { icon, title, subtitle, information, last, odd } = props;
  return (
    <Link
      href={`/informacion/${information.slug}`}
      className={`relative flex justify-between text-center flex-col items-center mb-5 md:mb-0 lg:px-3 lg:mb-0${
        odd ? " md:col-span-2 lg:col-span-1 col-span-1" : ""
      }`}
    >
      <div className="flex justify-center w-20 md:mt-5">
        <Image src={icon.url} alt="" width={256} height={256} />
      </div>
      <h1 className="font-bold text-primary">{title}</h1>
      <h2 className="font-normal text-sm opacity-70">{subtitle}</h2>
      <p className="text-primary font-bold text-xs md:mb-5">Más información</p>
      {!last && (
        <>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 md:block lg:block"></div>
          <div className="mt-4 flex w-full min-w-[1em] h-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 md:flex lg:hidden lg:mt-0"></div>
        </>
      )}
    </Link>
  );
}

export default Characteristic;
