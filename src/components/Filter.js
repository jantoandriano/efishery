import React from "react";
import { useAsyncDebounce } from "react-table";

export function DefaultColumnFilter({ column }) {
  const { setFilter, filterValue } = column;
  return (
    <div className="filter-searchbar">
      <input
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder={`Search...`}
      />
    </div>
  );
}

export function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="search-container">
      <input
        id="search"
        type="search"
        placeholder="Search..."
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
