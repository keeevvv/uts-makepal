const AnimeList = ({ title, img }) => {
  return (
    <div className="flex justify-start items-center bg-gray-300 ">
      <div className=" flex ">
        <img src={img} alt="" className="w-[150px]" />

        <div>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
