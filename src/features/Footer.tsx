import Container from "@/components/Container";
import Maps from "@/components/Maps";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Clock from "@/icons/Clock";
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
              href="tel:5492257589216"
              target="_blank"
              className="flex flex-row items-center font-bold text-lg text-primary gap-2"
            >
              <div className="h-5 w-5">
                <Phone />
              </div>
              (+54 9) 2257 589216
            </a>
            <p className="flex flex-row items-center font-bold text-lg text-primary gap-2">
              <div className="h-5 w-5">
                <Clock />
              </div>
              Lunes a viernes - 09:00 a 19:00
            </p>
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
              href="https://www.google.com/maps/place/Av.+Elcano+1759,+San+Bernardo,+Provincia+de+Buenos+Aires/@-36.6996038,-56.6916392,17z/data=!3m1!4b1!4m5!3m4!1s0x959c6f05ec15f38d:0xbda2de5c4af2b3a2!8m2!3d-36.6996081!4d-56.6890643?entry=ttu"
              target="_blank"
              className="flex flex-row items-center font-bold text-lg text-primary gap-2"
            >
              <div className="h-5 w-5">
                <Pin />
              </div>
              El Cano Nª 1759 San Bernardo - Partido de La Costa
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
