/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

export const TableFooter = ({ pageNumber, totalPage }) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const currentPage = Number(searchParam.get("page")) || 1;
  const handleNextPage = () => {
    // console.log("inside next page...");
    // console.log("Inside next page pageNumber,totalPage",pageNumber,totalPage)
    const next = currentPage < totalPage ? currentPage + 1 : totalPage;
    // console.log("next", next);
    const updatedSearchParams = new URLSearchParams(searchParam);
    updatedSearchParams.set("page", next);
    setSearchParam(updatedSearchParams);
  };
  const handlePreviousPage = () => {
    // console.log(
    //   "Inside previous page pageNumber,totalPage",
    //   pageNumber,
    //   totalPage
    // );
    const previous = currentPage > 1 ? currentPage - 1 : 1;
    const updatedSearchParams = new URLSearchParams(searchParam);
    updatedSearchParams.set("page", previous);
    setSearchParam(updatedSearchParams);
  };

  const handlePageClick = (page) => {
    const updatedSearchParams = new URLSearchParams(searchParam);
    updatedSearchParams.set("page", page);
    setSearchParam(updatedSearchParams);
  };
  return (
    <div className="flex justify-between items-center px-4 py-3">
      <div className="text-sm text-slate-500">
        Showing <b>{pageNumber}</b> of {totalPage}
      </div>
      <div className="flex space-x-1">
        <button
          className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease hover:cursor-pointer"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-3 py-1 min-w-9 min-h-9 text-sm font-normal border rounded transition duration-200 ease ${
              currentPage === page
                ? "text-white bg-slate-800 border-slate-800 hover:bg-slate-600 hover:border-slate-600"
                : "text-slate-500 bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-400"
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
    
        
        <button
          className="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-slate-500 bg-white border border-slate-200 rounded hover:bg-slate-50 hover:border-slate-400 transition duration-200 ease hover:cursor-pointer"
          onClick={handleNextPage}
          disabled={currentPage === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};
