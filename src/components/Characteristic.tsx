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
  first: boolean;
};

function Characteristic(props: Props) {
  const { icon, title, subtitle, information, last, first } = props;
  return (
    <div className="relative flex justify-between text-center flex-col items-center mb-5 md:mb-0 px-3 lg:mb-0">
      <div className="flex justify-center w-20 md:mt-5">
        <Image src={icon.url} alt="" width={256} height={256} />
      </div>
      <h1 className="font-bold text-primary">{title}</h1>
      <h2 className="font-normal text-sm opacity-70">{subtitle}</h2>
      <Link
        className="text-primary font-bold text-xs md:mb-5"
        href={`/informacion/${information.slug}`}
      >
        Más información
      </Link>
      {first && (
        <>
          <div className="hidden lg:hidden absolute md:block bottom-0 right-0 w-full max-w-[85%] h-px border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-neutral-500 opacity-25"></div>
          <div className="hidden lg:hidden absolute md:block top-0 right-[-1px] h-full w-px border-t-0 bg-gradient-to-tr from-neutral-500 via-neutral-500 to-transparent opacity-25"></div>
        </>
      )}
      {last && (
        <>
          <div className="hidden lg:hidden absolute md:block top-[-1px] left-0 w-full max-w-[85%] h-px border-t-0 bg-gradient-to-tr from-neutral-500 via-neutral-500 to-transparent opacity-25"></div>
          <div className="hidden lg:hidden absolute md:block bottom-0 left-0 h-full w-px border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-neutral-500 opacity-25"></div>
        </>
      )}
      {!last && (
        <>
          <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 md:hidden lg:block"></div>
          <div className="w-full flex justify-center md:hidden lg:hidden mt-5">
            <div className="w-full min-w-[1em] max-w-[70vw] h-px self-stretch border-b-0 bg-gradient-to-bl from-transparent via-neutral-500 to-transparent opacity-25"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Characteristic;
