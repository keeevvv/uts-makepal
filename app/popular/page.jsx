"use client";
import React, { useState, useEffect } from "react";
import AnimeList from "../component/AnimeList";
import Loading from "../loading";
import Pagination from "../component/Utilities/paginations";
import { useSearchParams } from "next/navigation";

const Populer = () => {
  const searcParams = useSearchParams();

  const search = searcParams.get("page") || 1;
  const [page, setPage] = useState(search);
  const [topAnime, setTopAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk menunjukkan status loading
  const endpoint = "http://localhost:3000/popular?page=";

  const fetchData = async () => {
    setIsLoading(true); // Set status loading menjadi true saat fetch dimulai
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
      );
      const data = await response.json();
      setTopAnime(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set status loading menjadi false setelah fetch selesai
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const maxAnime = 25;

  return (
    <div className=" pt-[70px]">
      {isLoading ? ( // Tampilkan loading jika isLoading true
        <Loading />
      ) : (
        <div>
          <div>
            <h1 className="text-xl font-bold ml-12">Populer</h1>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 q lg:gap-10 lg:px-10 md:px-7 gap-7  ">
            {topAnime.data?.map((data, i) => {
              return (
                <div key={data.mal_id}>
                  <AnimeList
                    id={data.mal_id}
                    title={data.title}
                    img={data.images.webp.image_url}
                    order={maxAnime * (page - 1) + i}
                    synopsis={data.synopsis}
                    genre={data.genres}
                    score={data.score}
                    type={data.type}
                    episodes={data.episodes}
                    duration={data.duration}
                    airing={data.airing}
                  />
                </div>
              );
            })}
          </div>

          <Pagination
            endpoint={endpoint}
            api={topAnime}
            setPage={setPage}
            page={page}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default Populer;
