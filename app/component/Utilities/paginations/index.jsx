import React from "react";

const Pagination = ({ api, page, setPage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center pt-3 gap-3 ">
      <div
        className="hover:cursor-pointer hover:text-blue-500"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          } else {
            setPage(api.pagination?.last_visible_page);
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
            setPage(page + 1);
          } else {
            setPage(1);
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
