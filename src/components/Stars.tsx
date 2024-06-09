import StarFilled from "@/icons/StarFilled";
import StarOutline from "@/icons/StarOutline";
import React from "react";

type Props = {
  rating: number;
  max: number;
};

function Stars({ rating, max }: Props) {
  return (
    <ul
      className="my-1 flex list-none gap-1 p-0"
      data-twe-rating-init=""
      data-twe-readonly="true"
      data-twe-value="3"
    >
      {[...Array(rating)].map((x, i) => (
        <li key={i}>
          <span
            className="text-primary [&>svg]:h-5 [&>svg]:w-5"
            data-twe-rating-icon-ref=""
          >
            <StarFilled />
          </span>
        </li>
      ))}
      {[...Array(max - rating)].map((x, i) => (
        <li key={i}>
          <span
            className="text-primary [&>svg]:h-5 [&>svg]:w-5"
            data-twe-rating-icon-ref=""
          >
            <StarOutline />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Stars;
