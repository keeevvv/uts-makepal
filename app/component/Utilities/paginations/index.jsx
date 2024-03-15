import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Pagination = ({ api, page, setPage, endpoint }) => {
  const router = useRouter();
  const searcParams = useSearchParams();

  const search = Number(searcParams.get("page")) || 1;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return 1;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Menggunakan fungsi untuk mendapatkan nilai dari parameter "page"
  let pageValue = getParameterByName("page");

  useEffect(() => {
    setPage(pageValue);
  }, [pageValue]);

  return (
    <div className="flex justify-center pt-3 gap-3 ">
      <div
        className="hover:cursor-pointer hover:text-blue-500"
        onClick={() => {
          if (page > 1) {
            setPage(search - 1);
            router.push(endpoint + `${search - 1}`);
          } else {
            setPage(api.pagination?.last_visible_page);
            router.push(endpoint + `${api.pagination?.last_visible_page}`);
          }
          scrollToTop();
        }}
      >
        Previous Page
      </div>
      Page {page} of {api.pagination?.last_visible_page}
      <div
        className="hover:cursor-pointer hover:text-blue-500"
        onClick={() => {
          if (page < api.pagination?.last_visible_page) {
            setPage(search + 1);
            router.push(endpoint + `${search + 1}`);
          } else {
            setPage(1); // This sets the page to 1 instead of the last page
            router.push(endpoint + 1);
          }
          scrollToTop();
        }}
      >
        Next page
      </div>
    </div>
  );
};

export default Pagination;
