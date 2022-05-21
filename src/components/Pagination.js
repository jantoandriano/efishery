import React from "react";

function Pagination(props) {
  const {
    gotoPage,
    previousPage,
    nextPage,
    pageOptions,
    pageIndex,
    pageCount,
    canPreviousPage,
    canNextPage,
    pageSize,
    setPageSize,
  } = props;

  return (
    <div className="pagination">
      <button
        className="page-btn-end"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"<<"}
      </button>{" "}
      <button
        className="page-btn"
        onClick={() => previousPage(pageIndex - 1)}
        disabled={!canPreviousPage}
      >
        {"Sebelum"}
      </button>
      {pageOptions.map((val) => (
        <div className="page-item">
          <div
            className={`${pageIndex === val ? "active" : ""} page-link`}
            onClick={() => gotoPage(val)}
          >
            {val + 1}
          </div>
        </div>
      ))}
      <button
        className="page-btn"
        onClick={() => nextPage(pageIndex + 1)}
        disabled={!canNextPage}
      >
        {"Berikut"}
      </button>
      <button
        className="page-btn-end"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {`>>`}
      </button>
      <select
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Pagination;
