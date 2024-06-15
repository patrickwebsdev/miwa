/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Title from "@/components/Title";
import CarouselContainer from "@/components/Carousel";
import { getArticle, getRecommendedArticles } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import Navbar from "@/features/Navbar";
import Container from "@/components/Container";
import Subtitle from "@/components/Subtitle";
import Article from "@/components/Article";
import { Block } from "@contentful/rich-text-types";
import { formatDate } from "@/lib/formatDate";
import Date from "@/icons/Date";
import Pin from "@/icons/Pin";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { useContentfulLiveUpdates } from "@contentful/live-preview/react";
import { ContentfulLivePreview } from "@contentful/live-preview";

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
    json: any;
  };
  details: {
    json: any;
  };
  slug: string;
  date: string;
  location: string;
  imagesCollection: {
    items: [];
  };
};
export default function workPage({ params }: Props) {
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [moreArticles, setMoreArticles] = useState<ArticleType[]>([]);
  const updatedArticle = useContentfulLiveUpdates(article);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedArticle = await getArticle(params.slug, true);
        if (!fetchedArticle) {
          notFound();
          return;
        }
        setArticle(fetchedArticle);

        const fetchedMoreArticles = await getRecommendedArticles(
          3,
          params.slug
        );
        setMoreArticles(fetchedMoreArticles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.slug]);

  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ContentfulLivePreviewProvider
        locale="en-US"
        enableInspectorMode={true}
        enableLiveUpdates={true}
        targetOrigin="https://app.contentful.com"
        debugMode={false}
      >
        <Navbar transparent={false} />
        <Container
          className="grid lg:grid-cols-12 gap-5 pt-24 !items-start pb-16"
          background="bg-secondary-100"
        >
          <main className="lg:col-span-9 col-span-12">
            <Title
              className="text-primary mb-2"
              {...ContentfulLivePreview.getProps({
                entryId: article.sys.id,
                fieldId: "title",
              })}
            >
              {updatedArticle?.title}
            </Title>
            <div className="flex items-center flex-row mb-5 gap-3 divide-x divide-black">
              <div className="flex items-center flex-row gap-2">
                <div className="h-5 w-5">
                  <Date />
                </div>
                <Subtitle
                  className=""
                  {...ContentfulLivePreview.getProps({
                    entryId: article.sys.id,
                    fieldId: "date",
                  })}
                >
                  {formatDate(updatedArticle?.date || "")}
                </Subtitle>
              </div>
              <div className="flex items-center flex-row pl-2 gap-2">
                <div className="h-5 w-5">
                  <Pin />
                </div>
                <Subtitle
                  className=""
                  {...ContentfulLivePreview.getProps({
                    entryId: article.sys.id,
                    fieldId: "location",
                  })}
                >
                  {updatedArticle?.location}
                </Subtitle>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <CarouselContainer
                images={updatedArticle?.imagesCollection.items || []}
              />
            </div>
            <Subtitle className="text-primary mb-2 mt-3">
              Detalles del trabajo
            </Subtitle>
            <div
              {...ContentfulLivePreview.getProps({
                entryId: article.sys.id,
                fieldId: "details",
              })}
            >
              {documentToReactComponents(updatedArticle?.details.json)}
            </div>
            <Subtitle className="text-primary mb-2 mt-5">Descripción</Subtitle>
            <div
              {...ContentfulLivePreview.getProps({
                entryId: article.sys.id,
                fieldId: "description",
              })}
            >
              {documentToReactComponents(updatedArticle?.description.json)}
            </div>
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
      </ContentfulLivePreviewProvider>
    </>
  );
}
