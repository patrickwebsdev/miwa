"use client";
import React, { useEffect, useState } from "react";
import Article from "@/components/Article";
import { getAllArticles } from "@/lib/api";
import { Block } from "@contentful/rich-text-types";
import Container from "@/components/Container";
import Title from "@/components/Title";
import Button from "@/components/Button";

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
function Articles() {
  const pagination = 3;
  const [skip, setSkip] = useState(pagination);
  const [articles, setArticles] = useState<ArticleType[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const fetchedArticles: ArticleType[] = await getAllArticles(3, 0, false);
      setArticles(fetchedArticles);
    };

    fetchArticles();
  }, []);
  async function getMoreArticles() {
    const fetchedArticles: ArticleType[] = await getAllArticles(3, skip, false);
    setArticles((prevArticles) => {
      if (prevArticles) {
        return prevArticles.concat(fetchedArticles);
      } else {
        return fetchedArticles;
      }
    });
    setSkip(skip + pagination);
  }
  return (
    <section className="bg-secondary-100 py-10" id="works">
      <Container>
        <Title className="text-primary mb-10 text-center">
          Trabajos realizados
        </Title>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles?.map((data, index) => (
            <Article key={index} {...data} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-5">
          <Button onClick={getMoreArticles} variant="primary">
            Ver más
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Articles;
