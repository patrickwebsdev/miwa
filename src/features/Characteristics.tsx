import Characteristic from "@/components/Characteristic";
import Container from "@/components/Container";
import GrassContainer from "@/components/GrassContainer";
import { getCharacteristics } from "@/lib/api";
import React from "react";

type CharacteristicType = {
  icon: {
    url: string;
  };
  title: string;
  subtitle: string;
  information: {
    slug: string;
  };
};
async function Characteristics() {
  const characteristics: CharacteristicType[] = await getCharacteristics();
  return (
    <Container className="mb-10" background="smt-10" id="services">
      <GrassContainer>
        {characteristics.map((data, index, orgArray) => (
          <Characteristic
            key={index}
            last={index == orgArray.length - 1}
            odd={index === orgArray.length - 1 && orgArray.length % 2 !== 0}
            {...data}
          />
        ))}
      </GrassContainer>
    </Container>
  );
}

export default Characteristics;
