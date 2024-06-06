import Button from "@/components/Button";
import Container from "@/components/Container";
import ReviewCard from "@/components/ReviewCard";
import Title from "@/components/Title";
import React from "react";

function Reviews() {
  return (
    <Container className="py-10" background="smt-6" id="reviews">
      <Title className="text-primary mb-10 text-center">
        Reseñas de nuestros clientes
      </Title>
      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button variant="primary">Más reseñas</Button>
      </div>
    </Container>
  );
}

export default Reviews;
