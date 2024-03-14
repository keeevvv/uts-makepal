import DetailAnime from "@/app/component/DetailAnime";
import getAnimeResponse from "@/app/libs/api-libs";

import React from "react";

export const Anime = async ({ params }) => {
  const anime = await getAnimeResponse(`anime/${params.id}`);

  return (
    <div className="pt-[55px]">
      <DetailAnime
        img={anime.data?.images?.jpg.large_image_url}
        backgroundImg={anime.data?.trailer?.images?.maximum_image_url}
        title={anime.data?.title}
        sysnopsis={anime.data?.synopsis}
        studios={anime.data?.studios[0]?.name}
        episodes={anime.data?.episodes}
        type = {anime.data?.type}
        status ={anime.data?.status}
        ratting={anime.data?.rating}
        score={anime.data?.score}
        year= {anime.data?.year}
        genre = {anime.data?.genres}
      ></DetailAnime>
    </div>
  );
};
export default Anime;
