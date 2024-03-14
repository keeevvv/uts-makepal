"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DetailAnime = ({
  img,
  backgroundImg,
  title,
  sysnopsis,
  studios,
  episodes,
  type,
  status,
  ratting,
  score,
  year,
  genre,
}) => {
  let genres = genre.map((genre) => genre.name).join(", ");
  const router = useRouter();
  if (!title) {
    router.push("/not-found");
  }
  return (
    <div className="bg-cover h-[400px] flex items-center flex-col gap-2">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <img
        src={img}
        alt=""
        className="bottom-[] left-[70px] w-full h-[400px] object-fit "
      />

      <div className="flex justify-center  flex-col mx-5 gap-2 ">
        <div className="flex flex-col gap-[0.5px] font-semibold items-start ">
          <div className="">
            <div>
              <h1 className="text-2xl font-bold"> Information</h1>
            </div>
            <h1>•Title: {title}</h1>
          </div>

          <div className="">
            <h1>•Studios: {studios}</h1>
          </div>
          <div className="">
            <h1>•genre: {genres}</h1>
          </div>
          <div>
            <h1>•Episode: {episodes}</h1>
          </div>
          <div>
            <h1>•Type: {type}</h1>
          </div>
          <div>
            <h1>•Status: {status}</h1>
          </div>
          <div>
            <h1>•Year: {year}</h1>
          </div>
          <div>
            <h1>•Rating: {ratting}</h1>
          </div>
          <div>
            <h1>•Score: {score}</h1>
          </div>
        </div>
        <h3 className="text-xl">synopsis</h3>
        <p className="items-center text-justify">{sysnopsis}</p>
      </div>
    </div>
  );
};

export default DetailAnime;
