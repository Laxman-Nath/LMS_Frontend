import { useSearchParams } from "react-router-dom";

export const TeacherTableFooter=({pageNumber, totalPage})=>{
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
  
    return (
      <tfoot className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
        <tr>
          <td
            colSpan="11"
            className="px-6 py-3 font-medium text-gray-900 dark:text-white"
          >
            <div className="flex justify-between">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 rounded"
              >
                Previous
              </button>
  
              {/* Page Info */}
              <span className="self-center text-gray-900 dark:text-white">
                Page {currentPage} of {totalPage}
              </span>
  
              {/* Next Button */}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPage}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:opacity-50 rounded"
              >
                Next
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    );
}