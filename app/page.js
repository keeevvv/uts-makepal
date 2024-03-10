import AnimeList from "./component/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();

  return (
    <div>
      <h1>Populer</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 q lg:gap-10 lg:px-10 md:px-7 gap-7  ">
        {anime.data.map((data, i) => {
          return (
            <div key={data.mal_id}>
              <AnimeList
              anime = {anime}
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
    </div>
  );
};

export default Home;
