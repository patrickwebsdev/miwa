import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";
import { getDescription } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import { BLOCKS } from "@contentful/rich-text-types";
import Subtitle from "@/components/Subtitle";

function renderOptions(texts: any) {
  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return <Subtitle className="text-primary mt-5">{children}</Subtitle>;
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <Subtitle className="text-primary mt-5">{children}</Subtitle>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className="mb-5">{children}</p>;
      },
      [BLOCKS.UL_LIST]: (node: any, children: any) => {
        return (
          <ul className="pl-5 [&>li]:list-disc [&>li>p]:mb-0">{children}</ul>
        );
      },
    },
  };
}
async function About() {
  const information = await getDescription("sobre-nosotros");
  if (!information) {
    notFound();
  }
  return (
    <Container background="bg-secondary-100 py-5 smt-6" id="aboutus">
      <Title className="text-primary mb-10 text-center">Sobre nosotros</Title>
      <div className="w-full">
        {documentToReactComponents(
          information.description.json,
          renderOptions(information.description.json)
        )}
      </div>
    </Container>
  );
}

export default About;
