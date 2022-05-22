import React from "react";
import { useTable, usePagination, useFilters } from "react-table";
import Pagination from "../components/Pagination";
import { DefaultColumnFilter } from "./Filter";
import LogoFish from "../assets/images/logo-fish-green.png";

const Table = (props) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Komoditas",
        accessor: "komoditas",
      },
      {
        Header: "Propinsi",
        accessor: "area_provinsi",
      },
      {
        Header: "Kota",
        accessor: "area_kota",
      },
      {
        Header: "Harga",
        accessor: "price",
      },
      {
        Header: "Ukuran",
        accessor: "size",
      },
      {
        Header: "Tanggal Ditambahkan",
        accessor: "tgl_parsed",
        Filter: () => <div></div>,
      },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: props.data,
      initialState: { pageIndex: 0 },
      defaultColumn,
    },
    useFilters,
    usePagination
  );

  if (!props.data.length) {
    return (
      <div className="page-loading">
        <img src={LogoFish} alt="logoFish" />
      </div>
    );
  }

  return (
    <>
      <div className="table-efishery">
        <h1 className="table-title">Table Data</h1>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="t-body" {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      </div>
    </>
  );
};

export default Table;
