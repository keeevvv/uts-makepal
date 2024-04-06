"use client";
import Link from "next/link";

const AnimeList = ({
  id,
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
    <div className="">
      <div className="flex justify-start bg-gray-300 rounded-md  w-auto pb-2   ">
        <img
          src={img}
          alt=""
          className="pt-7 w-[200px] h-[215px] hover:cursor-pointer sm:h lg:w-[200px] lg:h-[290px] rounded-md lg:pt-3 pl-3 md:w-[120px] md:h-[195px] md:pt-5"
        />
        <Link
          className="absolute pt-7 w-[200px] h-[215px] hover:cursor-pointer sm:h lg:w-[200px] lg:h-[290px] rounded-md lg:pt-3 pl-3 md:w-[120px] md:h-[195px] md:pt-5 text-center test"
          href={`/anime/${id}`}
        ></Link>

        <div className=" mt-6 lg:mt-2 lg:pt-2 ">
          <div className="flex lg:gap-2 md:gap-1 pl-3">
            <h4 className="font-bold text-[12px] lg:text-[16px] md:text-[9px]">
              {order + 1}.
            </h4>

            <Link href={`/anime/${id}`}>
              <h4 className="font-bold pb-2 text-[12px] lg:text-[16px] md:text-[9px] mr-6 hover:cursor-pointer">
                {title}
              </h4>
            </Link>
          </div>

          <div className="">
            <div>
              <p className="text-xs font-semibold ml-7 lg:text-sm md:text-[9px] lg:text-[12px]">
                {airing}
              </p>
            </div>
            {type === "TV" ? (
              <p className="text-xs font-normal ml-7 lg:text-sm md:text-[10px]">
                TV Series •{episodes} Episodes
              </p>
            ) : (
              
              <p className="text-xs font-semibold ml-7 lg:text-sm md:text-xs">
                Movie •{duration}
              </p>
            )}
            <div className="  max-h-[100px] hover:cursor-pointer overflow-hidden hover:overflow-auto lg:max-h-[175px] md:max-h-[90px] pl-7 pr-[30px]  ">
              <p className="text-xs lg:text-[13px] text-justify ">{synopsis}</p>
            </div>
          </div>

          <div className="flex flex-row gap-2 ml-7 mt-1 mr-1 flex-wrap">
            {genre.map((data, i) => {
              const slug = data.name.replace(/\s+/g, '-').toLowerCase();
              return (
                <div key={i} className=" bg-slate-400 rounded-md w-13 ">
                  <Link href={`/genre/${data.mal_id}/${slug}`}>
                    <p className="text-[8px] font-semibold p-1 hover:cursor-pointer">
                      {data.name}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex ml-8   ">
            <p className="font-semibold md:text-[10px] lg:text-[14px]">
              Score: {score}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
