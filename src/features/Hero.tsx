import React from "react";
import BrandBanner from "@/components/BrandBanner";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import Header from "@/components/Header";
import Button from "@/components/Button";

function Hero() {
  return (
    <Header className="bg-home" id="home">
      <BrandBanner>MIWA</BrandBanner>
      <Title className="text-secondary-0">
        Poda de altura y servicios forestales
      </Title>
      <Subtitle className="text-secondary-0">
        Proporcionando un servicio rapido y seguro en la costa
      </Subtitle>
      <div className="flex justify-center sm:flex-row w-full sm:w-auto flex-col gap-5 mt-3">
        <Button href="/#aboutus" variant="secondary">
          Sobre nosotros
        </Button>
        <Button href="/#contact" variant="primary">
          Pedir presupuesto
        </Button>
      </div>
    </Header>
  );
}

export default Hero;
