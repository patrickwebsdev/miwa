import Title from "@/components/Title";
import { draftMode } from "next/headers";
import CarouselContainer from "@/components/Carousel";
import { getArticle, getRecommendedArticles } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/features/Navbar";
import Container from "@/components/Container";
import Subtitle from "@/components/Subtitle";
import Article from "@/components/Article";
import { Block } from "@contentful/rich-text-types";
import { formatDate } from "@/lib/formatDate";
import Date from "@/icons/Date";
import Pin from "@/icons/Pin";

type Props = {
  params: {
    slug: string;
  };
};

type ArticleType = {
  sys: {
    id: string;
  };
  thumbnail: {
    url: string;
  };
  title: string;
  description: {
    json: Block;
  };
  slug: string;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { isEnabled } = draftMode();
  const slug = params.slug;
  const article = await getArticle(params.slug, isEnabled);
  return {
    title: article.title,
    openGraph: {
      images: [article.thumbnail.url],
    },
  };
}

export default async function workPage({ params }: Props) {
  const { isEnabled } = draftMode();
  const article = await getArticle(params.slug, isEnabled);
  const moreArticles: ArticleType[] = await getRecommendedArticles(
    3,
    params.slug
  );
  if (!article) {
    notFound();
  }
  return (
    <>
      <Navbar transparent={false} />
      <Container
        className="grid lg:grid-cols-12 gap-5 pt-24 !items-start pb-16"
        background="bg-secondary-100"
      >
        <main className="lg:col-span-9 col-span-12">
          <Title className="text-primary mb-2">{article.title}</Title>
          <div className="flex items-center flex-row mb-5 gap-3 divide-x divide-black">
            <div className="flex items-center flex-row gap-2">
              <div className="h-5 w-5">
                <Date />
              </div>
              <Subtitle className="">{formatDate(article.date)}</Subtitle>
            </div>
            <div className="flex items-center flex-row pl-2 gap-2">
              <div className="h-5 w-5">
                <Pin />
              </div>
              <Subtitle className="">{article.location}</Subtitle>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <CarouselContainer images={article.imagesCollection.items} />
          </div>
          <Subtitle className="text-primary mb-2 mt-3">
            Detalles del trabajo
          </Subtitle>
          {documentToReactComponents(article.details.json)}
          <Subtitle className="text-primary mb-2 mt-5">Descripción</Subtitle>
          {documentToReactComponents(article.description.json)}
        </main>
        <aside className="lg:col-span-3 col-span-12">
          <Subtitle className="text-primary mb-5 mt-5">
            Otros trabajos realizados
          </Subtitle>
          <div className="grid grid-cols-12 md:[&>article]:col-span-4 [&>article]:col-span-12 lg:[&>article]:col-span-12 gap-5">
            {moreArticles?.map((data, index) => (
              <Article key={index} {...data} />
            ))}
          </div>
        </aside>
      </Container>
    </>
  );
}
