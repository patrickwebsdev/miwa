"use client";

import { useEffect, useState } from "react";

import Hamburguer from "@/icons/Hamburguer";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  transparent: Boolean;
};

export default function Navbar({ transparent }: Props) {
  const router = usePathname();
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [hash, setHash] = useState("");
  const changeNavBg = () => {
    window.scrollY >= 1 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    setHash(window.location.hash);
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <nav
      className={`fixed top-[0px] w-full z-[100] ${
        transparent
          ? scroll || open
            ? "bg-white shadow-md"
            : "md:bg-transparent md:shadow-none bg-white shadow-md"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-3">
        <a href="#" className="flex items-center">
          <Logo />
          <h1
            className={`text-xl font-extrabold ${
              transparent
                ? scroll || open
                  ? "text-primary"
                  : "md:text-secondary-0 text-primary"
                : "text-primary"
            }`}
          >
            MIWA
          </h1>
        </a>
        <div className="items-center lg:order-2 lg:hidden">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-primary rounded-lg hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-transparent"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Abrir menu</span>
            <Hamburguer />
          </button>
        </div>
        <div
          className={`${open ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          id="navbar-dropdown"
        >
          <ul
            className={`flex flex-col font-bold p-4 lg:p-0 mt-4 lg:flex-row lg:mt-0 ${
              transparent
                ? scroll || open
                  ? "[&>li>a]:text-primary"
                  : "md:[&>li>a]:text-secondary-0 [&>li>a]:text-primary"
                : "[&>li>a]:text-primary"
            }`}
          >
            <li>
              <Link
                href="/#home"
                className={`block py-2 pl-3 pr-3`}
                onClick={() => setOpen(!open)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/#services"
                className={`block py-2 pl-3 pr-3`}
                onClick={() => setOpen(!open)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/#works"
                className={`block py-2 pl-3 pr-3`}
                onClick={() => setOpen(!open)}
              >
                Trabajos
              </Link>
            </li>
            <li>
              <Link
                href="/#reviews"
                className={`block py-2 pl-3 pr-3 ${
                  hash == "#reviews"
                    ? transparent
                      ? scroll
                        ? "text-primary"
                        : "text-secondary-0"
                      : "text-primary"
                    : ""
                }`}
                onClick={() => setOpen(!open)}
              >
                Reseñas
              </Link>
            </li>
            <li>
              <Link
                href="/#aboutus"
                className={`block py-2 pl-3 pr-3`}
                onClick={() => setOpen(!open)}
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`block py-2 pl-3 pr-3`}
                onClick={() => setOpen(!open)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
