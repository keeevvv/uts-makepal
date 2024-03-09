const AnimeList = ({
  title,
  img,
  order,
  synopsis,
  genre,
  score,
  type,
  episodes,
  duration,
  airing,
}) => {
  if (airing === true) {
    airing = "Ongoing";
  } else {
    airing = "Finished";
  }

  return (
    <div>
      <div className="flex justify-start bg-gray-300 rounded-md hover:cursor-pointer w-auto h-70 pb-2">
        <img
          src={img}
          alt=""
          className="w-[200px] h-[290px] rounded-md pt-3 pl-3"
        />

        <div className="mt-2 ">
          <div className="flex gap-2 pl-3">
            <h4 className="font-semibold">{order + 1}.</h4>
            <h4 className="font-semibold pb-2">{title}</h4>
          </div>

          <div className="">
            <div>
              <p className="text-xs font-semibold ml-7">{airing}</p>
            </div>
            {type === "TV" ? (
              <p className="text-xs font-semibold ml-7">
                TV Series •{episodes} Episodes
              </p>
            ) : (
              // Kondisi jika false
              <p className="text-xs font-semibold ml-7">Movie •{duration}</p>
            )}
            <div className="  overflow-hidden hover:overflow-auto max-h-[175px] pl-7 pr-[30px] ">
              <p className="text-xs ">{synopsis}</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 ml-7 mt-1 ">
            {genre.map((data, i) => {
              return (
                <div key={i} className=" bg-slate-400 rounded-md">
                  <p className="text-xs p-1">{data.name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex ml-64   ">
            <p className="font-semibold">Score: {score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
