import Image from "next/image";
import Link from "next/link";
import React from "react";
import Subtitle from "./Subtitle";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Block } from "@contentful/rich-text-types";

type Props = {
  thumbnail: {
    url: string;
  };
  title: string;
  description: {
    json: Block;
  };
  slug: string;
};
const Article = (props: Props) => {
  const { thumbnail, title, description, slug } = props;
  return (
    <article className="h-full bg-secondary-0 flex flex-col rounded-lg shadow-lg overflow-hidden">
      <Image
        alt="placeholder"
        className="aspect-[4/2] object-cover w-full"
        src={thumbnail.url}
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="flex-1 p-6">
        <Link href={`/trabajos/${slug}`}>
          <Subtitle className="leading-tight text-primary py-4">
            {title}
          </Subtitle>
        </Link>
        <div className="flex">
          <p>
            {documentToPlainTextString(description.json)
              .substring(0, 40)
              .replace(/\s+$/, "") + "... "}
            <Link
              className="inline-flex h-10 items-center text-primary justify-center text-sm font-medium"
              href={`/trabajos/${slug}`}
            >
              Vér más →
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
};

export default Article;
