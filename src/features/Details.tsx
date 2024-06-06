import Article from "@/components/Article";
import Container from "@/components/Container";
import CountUpCard from "@/components/CountUpCard";
import Plant from "@/components/Plant";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import React from "react";

function Details() {
  return (
    <section className="bg-white pt-10 mb-10 lg:mb-0">
      <Container className="text-center">
        <Title className="text-primary">
          ¡Nosotros nos encargamos de todo!
        </Title>
        <Subtitle className="font-normal mb-10">
          En MIWA nos encargamos de garantizar el mejor servicio para nuestros
          clientes con maquinaria profesional y equipo capacitado.
        </Subtitle>
        <div className="grid items-center md:grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0">
          <CountUpCard
            number={21}
            title="AÑOS"
            subtitle="Experiencia"
            description="Entregando soluciones para su desarrollo"
          />
          <Plant orientation="left" className="lg:block hidden" />
          <CountUpCard
            number={2000}
            title="TRABAJOS"
            subtitle="Realizados"
            description="Más de 2.000 trabajos realizados con satisfacción total"
          />
          <Plant orientation="right" className="lg:block hidden" />
          <CountUpCard
            number={10}
            title="PERSONAS"
            subtitle="Capacitadas"
            description="Reunimos el mejor talento, creando el mejor equipo de especialistas."
          />
        </div>
      </Container>
    </section>
  );
}

export default Details;
