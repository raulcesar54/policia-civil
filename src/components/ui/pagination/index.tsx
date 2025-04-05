import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const createPageNumbers = () => {
    const pages:number[] = [];
    const maxVisible = 0;
    const half = Math.floor(maxVisible / 2);
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-4 w-full">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-4 px-5 rounded bg-yellow-300 font-bold text-sm text-gray-700 disabled:opacity-50  disabled:bg-gray-200"
      >
        Voltar Página
      </button>

      {createPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`p-4 px-5 hidden rounded text-sm ${page === currentPage
              ? 'bg-yellow-500 text-white'
              : 'text-gray-700 hover:bg-gray-100 bg-white'
            }`}
        >
          {page}
        </button>
      ))}


      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-4 px-5 rounded bg-yellow-300 font-bold text-sm text-gray-700 disabled:opacity-50 disabled:bg-gray-200 "
      >
        Próxima Página
      </button>
    </div>
  );
}