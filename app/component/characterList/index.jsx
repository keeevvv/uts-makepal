"use client";
import React, { useEffect, useState } from "react";
import { IconName } from "react-icons/hi";
import { HiArrowNarrowDown } from "react-icons/hi"
import { HiArrowNarrowUp } from "react-icons/hi";

const CharacterList = ({ characters }) => {
  const [charactersLength, setCharactersLength] = useState(3);
  const loadMoreCharacters = () => {
    if (charactersLength + 3 > characters?.length) {
      setCharactersLength(characters.length);
    } else {
      setCharactersLength((prevLength) => prevLength + 3);
    }
  };

  const showLess = () => {
    if (charactersLength - 3 < 3) {
      setCharactersLength(3);
    } else {
      setCharactersLength((prevLength) => prevLength - 3);
    }
  };
  return (
    <div className="md:ml-10">
      {/* Gunakan map() untuk merender karakter */}
      {characters?.slice(0, charactersLength).map((character,i) => (
        <div className="bg-gray-300  w-[] px- py- flex justify-between mb-5">
          <div className="flex flex-row">
            
            <img className="w-[70px]" src={character?.character?.images?.jpg?.image_url} alt="" />
            <div className="flex flex-col justify-between py-1 text-xl">
              <h1>{character?.character?.name}</h1>
              <h1>{character?.role}</h1>
            </div>
           
            
          </div>
          <div className="flex flex-row">

            <div className="flex flex-col justify-between py-1 text-xl text-end">
            <h1>{character?.voice_actors[0]?.person?.name}</h1>
            <h1>{character?.voice_actors[0]?.language}</h1>
            </div>
           
            <img className="w-[70px]" src={character?.voice_actors[0]?.person?.images?.jpg?.image_url} alt="" />
          </div>
        </div>
      ))}

      <div className="flex justify-between md:mb-0 mb-5">
        <button className="flex items-center hover:text-blue-500" onClick={loadMoreCharacters}>show more <HiArrowNarrowDown /></button>

        <button className="flex items-center hover:text-blue-500" onClick={showLess}>show less <HiArrowNarrowUp/>  </button>
      </div>
    </div>
  );
};

export default CharacterList;
