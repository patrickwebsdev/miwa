import Title from "@/components/Title";
import { draftMode } from "next/headers";
import VideoJS from "@/components/VideoJS";
import CarouselContainer from "@/features/Carousel";
import { getInformation } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/features/Navbar";
import Header from "@/components/Header";
import { BLOCKS } from "@contentful/rich-text-types";
import Subtitle from "@/components/Subtitle";
import Container from "@/components/Container";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const slug = params.slug;
  const information = await getInformation(params.slug, isEnabled);
  return {
    title: information.title,
    openGraph: {
      images: [information.background.url],
    },
  };
}

function renderOptions(texts: any) {
  return {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => {
        return (
          <Title className="text-center text-primary my-3">{children}</Title>
        );
      },
      [BLOCKS.HEADING_2]: (node: any, children: any) => {
        return <Subtitle className="text-primary mt-5">{children}</Subtitle>;
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className="mb-5">{children}</p>;
      },
    },
  };
}

export default async function informationPage({ params }: Props) {
  const { isEnabled } = draftMode();
  const information = await getInformation(params.slug, isEnabled);
  if (!information) {
    notFound();
  }
  const videoJsOptionsMpd = {
    controls: true,
    autoplay: false,
    width: 400,
    sources: [
      {
        src: "https://videos.ctfassets.net/2ys6317zvenc/4grBRS3jMtjcvOiaPhQtZR/8d3c4e115e13f5b1d853bb053134458c/Video_de_WhatsApp_2024-05-30_a_las_01.28.16_67c18c50.mp4",
        type: "video/mp4",
      },
    ],
    plugins: {
      httpSourceSelector: {
        default: "auto",
      },
    },
  };
  return (
    <>
      <Navbar transparent={true} />
      <Header
        className="!h-[50vh]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),url('${information.background.url}')`,
        }}
      >
        <Title className="text-secondary-0">{information.title}</Title>
      </Header>
      <main className="bg-secondary-100 min-h-[50vh]">
        <Container>
          <section className="pb-5 pt-2">
            {documentToReactComponents(
              information.description.json,
              renderOptions(information.description.json)
            )}
          </section>
        </Container>
      </main>
    </>
  );
}
