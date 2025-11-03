import Container from "@/components/Container";
import Maps from "@/components/Maps";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Clock from "@/icons/Clock";
import DownArrow from "@/icons/DownArrow";
import Mail from "@/icons/Mail";
import Phone from "@/icons/Phone";
import Pin from "@/icons/Pin";
import React from "react";

function Footer() {
  return (
    <footer className="" id="contact">
      <Container className="bg-white grid lg:grid-cols-2 grid-cols-1 gap-4 py-16">
        <div className="w-full">
          <Title className="text-primary mb-3">Contacto</Title>
          <div className="flex flex-col gap-2">
            <a
              href="tel:5492257550272"
              target="_blank"
              className="flex flex-col gap-2"
            >
              <div className="flex flex-row items-center font-semibold text-base text-primary gap-2">
                <div className="h-5 w-5">
                  <DownArrow />
                </div>
                Amilcar Gutiérrez (Escalador de árboles)
              </div>
              <div className="flex flex-row items-center font-bold text-lg text-primary gap-2">
                <div className="h-5 w-5">
                  <Phone />
                </div>
                (+54 9) 2257 550272
              </div>
            </a>
            <a
              href="tel:5492257506651"
              target="_blank"
              className="flex flex-col gap-2"
            >
              <div className="flex flex-row items-center font-semibold text-base text-primary gap-2">
                <div className="h-5 w-5">
                  <DownArrow />
                </div>
                Marcos Wolcan (Técnico forestal)
              </div>
              <div className="flex flex-row items-center font-bold text-lg text-primary gap-2">
                <div className="h-5 w-5">
                  <Phone />
                </div>
                (+54 9) 2257 506651
              </div>
            </a>
            <div className="flex flex-row items-center font-bold text-lg text-primary gap-2">
              <div className="h-5 w-5">
                <Clock />
              </div>
              Lunes a viernes - 09:00 a 19:00
            </div>
            <a
              href="mailto:contacto@miwa.com.ar"
              target="_blank"
              className="flex flex-row items-center font-bold text-lg text-primary gap-2"
            >
              <div className="h-5 w-5">
                <Mail />
              </div>
              contacto@miwa.com.ar
            </a>
            <a
              href="https://www.google.com/maps/place/Los+Geranios+1228,+B7108+Costa+del+Este,+Provincia+de+Buenos+Aires/@-36.6492734,-56.7184741,12z/"
              target="_blank"
              className="flex flex-row items-center font-bold text-lg text-primary gap-2"
            >
              <div className="h-5 w-5">
                <Pin />
              </div>
              Los Geranios 1228, Costa del Este - Partido de La Costa
            </a>
          </div>
        </div>
        <Maps />
      </Container>
      <Container
        background="bg-footer bg-top bg-no-repeat bg-secondary-100"
        className="!gap-0 py-5"
      >
        <Title className="text-primary font-extrabold">MIWA</Title>
        <Subtitle className="text-primary">
          Poda y servicios forestales
        </Subtitle>
        <p className="text-xs mt-3">
          © 2024 MIWA - Poda y servicios forestales
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
