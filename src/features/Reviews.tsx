"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import ReviewCard from "@/components/ReviewCard";
import Title from "@/components/Title";
import React, { useEffect, useState } from "react";

type Reviews = {
  link: string;
  rating: number;
  iso_date: string;
  snippet: string;
  user: {
    name: string;
    thumbnail: string;
  };
};

function Reviews() {
  const templateData = [
    {
      link: "#",
      rating: 5,
      iso_date: "2024-05-26T15:34:05Z",
      snippet:
        "Hicieron un buen trabajo en mi patio, la gente fue muy amable y tenian maquinaria especializada.",
      user: {
        name: "John Doe",
        thumbnail:
          "https://lh3.googleusercontent.com/a/ACg8ocK7JQSg9-1v4dHM1ipZq-trnB5VnTLCgg3g4ERmqTCO0E68nA=w60-h60-p-rp-mo-ba5-br100",
      },
    },
    {
      link: "#",
      rating: 5,
      iso_date: "2024-05-26T15:34:05Z",
      snippet:
        "Hicieron un buen trabajo en mi patio, la gente fue muy amable y tenian maquinaria especializada.",
      user: {
        name: "John Doe",
        thumbnail:
          "https://lh3.googleusercontent.com/a/ACg8ocK7JQSg9-1v4dHM1ipZq-trnB5VnTLCgg3g4ERmqTCO0E68nA=w60-h60-p-rp-mo-ba5-br100",
      },
    },
    {
      link: "#",
      rating: 5,
      iso_date: "2024-05-26T15:34:05Z",
      snippet:
        "Hicieron un buen trabajo en mi patio, la gente fue muy amable y tenian maquinaria especializada.",
      user: {
        name: "John Doe",
        thumbnail:
          "https://lh3.googleusercontent.com/a/ACg8ocK7JQSg9-1v4dHM1ipZq-trnB5VnTLCgg3g4ERmqTCO0E68nA=w60-h60-p-rp-mo-ba5-br100",
      },
    },
  ];

  const [data, setData] = useState<Reviews[] | null>(null);
  const fetchJson = () => {
    fetch("./reviews.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length >= 3) {
          setData(data.slice(0, 3));
        } else {
          setData(templateData);
        }
      })
      .catch((e: Error) => {
        setData(templateData);
      });
  };
  useEffect(() => {
    fetchJson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="py-10" background="smt-6" id="reviews">
      <Title className="text-primary mb-10 text-center">
        Reseñas de nuestros clientes
      </Title>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        {data?.map((review, index) => {
          return <ReviewCard key={index} {...review} />;
        })}
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button
          href="https://maps.app.goo.gl/UgNChN6LvJaANMV86"
          variant="primary"
        >
          Más reseñas
        </Button>
      </div>
    </Container>
  );
}

export default Reviews;
