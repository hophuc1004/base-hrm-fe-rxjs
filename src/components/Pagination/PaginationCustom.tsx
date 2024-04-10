import React from "react";
type TypePagination = {
  totalItem?: any;
  itemsPerPage?: any;
  onPrev: () => void | null | undefined;
  onNext: () => void | null | undefined;
  pageOffset?: number;
};
const PaginationCustom: React.FC<TypePagination> = ({
  totalItem,
  itemsPerPage,
  onPrev,
  onNext,
  pageOffset,
}) => {
  const pageCount = Math.ceil(totalItem / itemsPerPage);
  const handleClickPrev = () => {
    if (pageOffset === 1) return;
    onPrev();
  };
  const handleClickNext = () => {
    if (pageOffset === pageCount) return;
    onNext();
  };
  return (
    <div className="my-8 m-auto w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={handleClickPrev}
          className="p-2 hover:bg-red-custom-2 rounded-[5px] hover:text-[#fff]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="17px"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <p className="font-bold text-[14px]">
          Page {pageOffset} of {pageCount}
        </p>
        <button
          onClick={handleClickNext}
          className="p-2 hover:bg-red-custom-2 rounded-[5px] hover:text-[#fff]"
        >
          <svg
            style={{ transform: "rotate(180deg)" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="17px"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PaginationCustom;
