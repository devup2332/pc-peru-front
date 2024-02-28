/* eslint-disable @next/next/no-img-element */
import { IoIosStar } from "react-icons/io";
import React from "react";

interface ItemCardProp {
  item: {
    id: number;
    image: string;
    price: number;
    tags: { name: string; id: number }[];
    stars: number;
    name: string;
  };
}

const ItemCard = ({ item }: ItemCardProp) => {
  const { id, image, price, tags, stars, name } = item;
  return (
    <div
      key={id}
      className="border-1 h-full border-black/20 rounded-lg py-8 px-6 grid gap-5 max-w-sm mx-auto cursor-pointer hover:shadow-lg transition-shadow"
    >
      <img
        src={image}
        alt=""
        className="object-contain w-full h-full"
        style={{
          aspectRatio: "4/2",
        }}
      />
      <div className="grid gap-3">
        <div className="flex items-start justify-between">
          <h2 className="text-left font-bold w-7/12">{name}</h2>
          <span className="w-5/12 text-right">S/. {price}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tags.map(({ name, id }) => (
            <span
              className="bg-gray-200 rounded-md h-fit px-2 text-black/40 text-sm"
              key={id}
            >
              {name}
            </span>
          ))}
        </div>
        <Stars stars={stars} />
      </div>
    </div>
  );
};

const Stars = ({ stars }: { stars: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, index) => (
        <IoIosStar key={index} className="text-primary fill-current" />
      ))}
      {Array.from({ length: 5 - stars }).map((_, index) => (
        <IoIosStar key={index} className="text-gray-300 fill-current" />
      ))}
    </div>
  );
};

export default ItemCard;
