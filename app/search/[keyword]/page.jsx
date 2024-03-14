"use client";
import AnimeList from "@/app/component/AnimeList";
import Pagination from "@/app/component/Utilities/paginations";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchData = async () => {
    setIsLoading(true); // Set status loading menjadi true saat fetch dimulai
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.keyword}&sfw&page=${page}`
      );
      const data = await response.json();
      setSearchAnime(data);
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
    <div>
      {isLoading ? ( // Tampilkan loading jika isLoading true
        <Loading />
      ) : (
        <div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 q lg:gap-10 lg:px-10 md:px-7 gap-7  ">
            {searchAnime.data?.map((data, i) => {
              return (
                <div key={data.mal_id}>
                  <AnimeList
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
            api={searchAnime}
            setPage={setPage}
            page={page}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default Page;
