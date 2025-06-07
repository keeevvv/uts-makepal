import AnimeList from "./component/AnimeList";
import Link from "next/link";
import getAnimeResponse from "./libs/api-libs";
import CardSlider from "./component/cardSlider";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=4");

  return (
    <div className=" pt-[70px]  ">
      <section>
        <div className="md:px-12 flex justify-between   ">
          <h1 className="text-xl font-bold">Populer</h1>
          <Link href="/popular">
            <p className="hover:cursor-pointer hover:text-blue-500">
              see more {">>"}
            </p>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 q lg:gap-10 lg:px-10 md:px-7 gap-7  ">
          {topAnime.data?.map((data, i) => {
            return (
              <div key={data.mal_id}>
                <AnimeList
                  id={data.mal_id}
                  title={data.title}
                  img={data.images.webp.image_url}
                  order={i}
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
      </section>
      <section className="mt-10">
        <div className="md:px-12 flex justify-between   ">
          <h1 className="text-xl font-bold">Top Airing</h1>
          <Link href="/popular">
            <p className="hover:cursor-pointer hover:text-blue-500">
              see more {">>"}
            </p>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 q lg:gap-10 lg:px-10 md:px-7 gap-7  ">
          {topAnime.data?.map((data, i) => {
            return (
              <div key={data.mal_id}>
                <AnimeList
                  id={data.mal_id}
                  title={data.title}
                  img={data.images.webp.image_url}
                  order={i}
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

        <div>
          <h1>contoh perubahan 12</h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
