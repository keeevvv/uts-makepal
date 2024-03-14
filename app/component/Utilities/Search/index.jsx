"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { CiSearch } from "react-icons/ci";

const SearchFunction = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${searchRef.current.value}`);
    }
  };

  return (
    <div className="md:w-[300px] relative w-[200px] ">
      <div className="relative">
        <input
          type="search"
          placeholder="cari anime..."
          className="w-full p-4 outline-none rounded-full h-[20px]"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
      </div>
      <button
        onClick={handleSearch}
        className="absolute right-1 top-1 p-1 bg-slate-600 rounded-full"
      >
        <CiSearch></CiSearch>
      </button>
    </div>
  );
};

export default SearchFunction;
