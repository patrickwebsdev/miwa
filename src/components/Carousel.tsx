"use client";
import { Carousel, initTWE } from "tw-elements";
import Image from "next/image";
import React, { useEffect } from "react";

type CarouselProps = {
  images: Array<ImagesArray>;
};
type ImagesArray = {
  title: string;
  url: string;
};

function CarouselContainer({ images }: CarouselProps) {
  useEffect(() => {
    initTWE({ Carousel });
  }, []);
  return (
    <div
      id="carouselExampleIndicators"
      className="relative w-full"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            data-twe-target="#carouselExampleIndicators"
            data-twe-slide-to={index}
            {...(index === 0
              ? { "data-twe-carousel-active": true, "aria-current": true }
              : {})}
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label={`Slide ${index}`}
          ></button>
        ))}
      </div>
      <div className="relative w-full rounded-lg overflow-hidden flex after:clear-both after:block after:content-[''] md:h-[50vh] items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`float-left -mr-[100%] ${
              index != 0 ? "hidden" : ""
            } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-twe-carousel-item
            {...(index === 0 ? { "data-twe-carousel-active": true } : {})}
          >
            <Image
              src={image.url}
              className="block w-full"
              alt={image.title}
              width={0}
              height={100}
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleIndicators"
        data-twe-slide="prev"
      >
        <span className="flex justify-center items-center h-10 w-10 bg-primary rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        data-twe-target="#carouselExampleIndicators"
        data-twe-slide="next"
      >
        <span className="flex justify-center items-center h-10 w-10 bg-primary rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
}

export default CarouselContainer;
