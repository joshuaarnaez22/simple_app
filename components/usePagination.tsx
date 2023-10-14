"use client";
import { useEffect, useState } from "react";

const UsePagination = (
  initialItemsPerPage: number,
  initialData: any,
  totalItems: number
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<any>();
  const startIndex = (currentPage - 1) * initialItemsPerPage;
  const endIndex = startIndex + initialItemsPerPage;
  const totalPages = Math.ceil(totalItems / initialItemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const data = initialData?.slice(startIndex, endIndex);
    setCurrentItems(data);
  }, [endIndex, initialData, startIndex]);

  return {
    startIndex,
    endIndex,
    currentPage,
    currentItems,
    totalPages,
    handlePageChange,
  };
};

export default UsePagination;
