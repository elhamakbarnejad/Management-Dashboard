import clsx from "clsx";
import { useEffect, useState } from "react";

const TablePagination = ({ items, setItems, itemPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesQty = Math.ceil(items.length / itemPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const paginatedProducts = [...items].slice(startIndex, endIndex);

    setItems(paginatedProducts);
  }, [currentPage, items]);

  const changePageNumberHandler = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };
  const renderedPageNumber = () => {
    const pageNumberSet = [];
    for (let i = 1; i <= pagesQty; i++) {
      pageNumberSet.push(
        <button
          key={i}
          onClick={() => changePageNumberHandler(i)}
          className={clsx("pagination-button", {
            "active-tab": currentPage === i,
            "non-active-tab": currentPage !== i,
          })}
        >
          {i}
        </button>
      );
    }
    return pageNumberSet;
  };
  return (
    <div className="pagination " dir="rtl">
      <button
        onClick={() => changePageNumberHandler(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx("pagination-prev-button", {
          "pages-ended active-tab": currentPage === 1,
        })}
      >
        قبلی
      </button>
      {renderedPageNumber()}
      <button
        onClick={() => changePageNumberHandler(currentPage + 1)}
        disabled={currentPage === pagesQty}
        className={clsx("pagination-prev-button", {
          "pages-ended active-tab": currentPage === pagesQty,
        })}
      >
        بعدی
      </button>
    </div>
  );
};

export default TablePagination;
