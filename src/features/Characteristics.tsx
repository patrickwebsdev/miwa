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
        {characteristics.map((data, index, orgArray) =>
          index == orgArray.length - 1 ? (
            <Characteristic key={index} last={true} first={false} {...data} />
          ) : index == 0 ? (
            <Characteristic key={index} last={false} first={true} {...data} />
          ) : (
            <Characteristic key={index} last={false} first={false} {...data} />
          )
        )}
      </GrassContainer>
    </Container>
  );
}

export default Characteristics;
