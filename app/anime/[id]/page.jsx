"use client";
import DetailAnime from "@/app/component/DetailAnime";
import getAnimeResponse from "@/app/libs/api-libs";
import Loading from "@/app/loading";

import React, { useState, useEffect } from "react";

export const Anime = ({ params }) => {
  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const animeData = await getAnimeResponse(`anime/${params.id}`);
        setAnime(animeData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime:", error);
        setLoading(false);
      }
    };

    fetchAnime();
    
  }, [params.id]);

  useEffect(() => {
    const fetchAnimeCharacters = async () => {
      const characterData =
        await getAnimeResponse(`anime/${params.id}/characters`);
      setCharacters(characterData);
    };
    fetchAnimeCharacters(); 
 
  }, [params.id]);

  return (
    
    <div className="pt-[55px] md:px-10">
      {loading ? (
        <Loading />
      ) : (
       
        <DetailAnime
          id={anime?.data?.mal_id}
          img={anime?.data?.images?.jpg.large_image_url}
          youtube_id={anime?.data?.trailer?.youtube_id}
          title={anime?.data?.title}
          englishTitle={anime?.data?.title_english}
          sysnopsis={anime?.data?.synopsis}
          studios={anime?.data?.studios[0]?.name}
          episodes={anime?.data?.episodes}
          type={anime?.data?.type}
          status={anime?.data?.status}
          rating={anime?.data?.rating}
          score={anime?.data?.score}
          year={anime?.data?.year}
          genre={anime?.data?.genres}
          season={anime?.data?.season}
          popularity={anime?.data?.popularity}
          rank={anime?.data?.rank}
          characters = {characters?.data}
          aired = {anime?.data?.aired}
          producers = {anime?.data?.producers}  
          source = {anime?.data?.source}
          themes = {anime?.data?.themes}
          duration = {anime?.data?.duration}
          

  
          
        />
        
      )}
    </div>
  );
};

export default Anime;
