"use client";
const Pagination = ({
  startIndex,
  endIndex,
  tableDataLength,
  handlePageChange,
  currentPage,
  totalPages,
}: any) => {
  return (
    <>
      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 ">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">
            {startIndex + 1}-{Math.min(endIndex, tableDataLength)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 ">
            {tableDataLength}
          </span>
        </span>
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  ${
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                  currentPage === index + 1
                    ? "cursor-not-allowed font-bold bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 "
                    : "hover:bg-gray-100 hover:text-gray-700 "
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  ${
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
