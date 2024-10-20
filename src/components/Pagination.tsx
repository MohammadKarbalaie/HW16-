interface PaginationProps {
    currentPage: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
  }
  
  const Pagination = ({ currentPage, onNextPage, onPreviousPage }: PaginationProps) => {
    return (
      <div className="flex justify-between mt-4">
        <button
          onClick={onPreviousPage}
          disabled={currentPage === 0}
          className={`bg-blue-500 text-white p-2 rounded ${currentPage === 0 && 'opacity-50 cursor-not-allowed'}`}
        >
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button
          onClick={onNextPage}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  