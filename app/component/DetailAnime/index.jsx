"use client";
import { useRouter } from "next/navigation";
import React from "react";
import YouTubeEmbed from "../youtubeembed";
import CharacterList from "../characterList";

const DetailAnime = ({
  id,
  img,
  youtube_id,
  title,
  englishTitle,
  sysnopsis,
  studios,
  episodes,
  type,
  status,
  rating,
  score,
  year,
  genre,
  season,
  popularity,
  rank,
  characters,
  aired,
  producers,
  source,
  themes,
  duration, 
}) => {
  const producerNames = producers.map(producer => producer.name);
  const producersString = producerNames.join(', ');
  const genres = genre.map(genre => genre.name);
  const genresString = genres.join(', ');
  const themeNames = themes.map(theme => theme.name);
  const themesString = themeNames.join(', ');
  //convert int to mont

  const router = useRouter();
  if (!title) {
    router.push("/not-found");
  }
  return (
    <div className="">
      <div className="flex md:flex-row mt-10  flex-col md:gap-0 gap-3">
        <div className="bg-gray-300  flex md:pt-5 md:flex-col gap-3 items-center md:px-4 ">
          <div className="">
            <img src={img} alt="" className="md:w-[300px] w-[250px]" />
          </div>

          <div className="  w-[300px] text-sm md:text-lg p-0 ">
            <h1 className="font-bold text-xl">Information</h1>
            <h2 className="">Type: {type}</h2>
            <h2 className=" ">Episodes: {episodes}</h2>
            <h2 className=" ">Status: {status}</h2>
            <h2 className=" ">
              Aired: {aired?.string}
            </h2>
            <h2 className=" ">Premiered: {season} {year}</h2>
            <h2 className=" "> Producers: {producersString}</h2>
            <h2 className=" ">Studios: {studios} </h2>
            <h2>Source: {source} </h2>
            <h2>Genres: {genresString}</h2>
            <h2>Theme: {themesString}</h2>
            <h2>Duration: {duration}</h2>
            <h2>Rating: {rating}</h2>
          </div>
        </div>

        <div className="flex flex-col gap-3   ">
          <div className="flex md:ml-10 lg:gap-28 items-center lg:flex-row flex-col">
            <div className="bg-gray-300   w-[] px-8 h-[] py-4 ">
              <div className="flex flex-row justify-between border-b-2 gap-20">
                <div>
                  <h1 className="font-bold md:text-xl text-md">{title}</h1>
                  <h1 className=" md:text-md text-sm">{englishTitle}</h1>
                </div>
                <h1 className="flex items-center text-center md:text-md text-sm">
                  {status}
                </h1>
              </div>
              <div className="flex justify-between md:text-md text-sm">
                <h1 className="">
                  {season} {year}
                </h1>
                <h1>{type}</h1>
                <h1>{studios}</h1>
                <h1> eps: {episodes}</h1>
              </div>
              <div>
                <h1 className="md:text-md text-sm">genre: {genresString}</h1>
              </div>
              <div className="font-bold md:text-xl lg:text-xl flex justify-between">
                <div>
                  <h1>Popularity #{popularity}</h1>
                  <h1>Score: {score}</h1>
                </div>

                <div>
                  <h1 className="text-center">
                    Rank <br /> {rank}
                  </h1>
                </div>
              </div>
            </div>
            <div className="">
              <YouTubeEmbed id={youtube_id} />
            </div>
          </div>

          <div className="bg-gray-300  w-[] px-8 py-4 md:ml-10 ">
            <h1 className="font-bold text-xl">Synopsis</h1>
            <p className="text-black text-justify"> {sysnopsis}</p>
          </div>
          <h1 className="md:ml-10 font-bold text-3xl">
            Character and Voice Actor
          </h1>

          <CharacterList characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default DetailAnime;
