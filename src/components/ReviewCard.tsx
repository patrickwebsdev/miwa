import { formatDate } from "@/lib/formatDate";
import Image from "next/image";
import React from "react";
import Stars from "./Stars";

type Props = {
  link: string;
  rating: number;
  iso_date: string;
  snippet: string;
  user: {
    name: string;
    thumbnail: string;
  };
};
function ReviewCard(props: Props) {
  const { link, rating, iso_date, snippet, user } = props;
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-col justify-center items-center gap-10 py-10 px-5 rounded-lg shadow-dark-2"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <Image src="/images/google.jpg" alt="Google" width={50} height={50} />
        <Stars rating={rating} max={5} />
      </div>
      <p className="text-center">
        {snippet.substring(0, 150).replace(/\s+$/, "") + "... "}
      </p>
      <div className="flex flex-row justify-center items-center gap-3 w-full">
        <Image
          className="rounded-full"
          src={user.thumbnail}
          alt=""
          width={40}
          height={40}
        />
        <div className="flex flex-col">
          <p className="font-bold">{user.name}</p>
          <small>{formatDate(iso_date)}</small>
        </div>
      </div>
    </a>
  );
}

export default ReviewCard;
