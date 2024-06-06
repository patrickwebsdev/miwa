"use client";
import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import CountUp from "react-countup";

type countUp = {
  number: number;
  title: string;
  subtitle: string;
  description: string;
};

function CountUpCard({ number, title, subtitle, description }: countUp) {
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <Title className="text-primary font-semibold text-8xl">
        <CountUp
          end={number}
          duration={3}
          delay={0}
          enableScrollSpy={true}
          scrollSpyDelay={300}
          scrollSpyOnce={true}
          onStart={onStart}
          onEnd={onEnd}
          separator=""
        />
      </Title>
      <Subtitle className="text-primary font-bold text-3xl">{title}</Subtitle>
      <p className="text-primary text-xl font-normal">{subtitle}</p>
      <small className="opacity-70 text-md">{description}</small>
    </div>
  );
}

export default CountUpCard;
