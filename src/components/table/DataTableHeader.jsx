import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
const raiseSort = (path, sortColumn, handleSort) => {
  if (sortColumn.path === path)
    sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
  else {
    sortColumn.path = path;
    sortColumn.order = "asc";
  }
  console.log("handing" + sortColumn);
  handleSort(sortColumn);
};

const DataTableHeaderCell = ({ columns, sortColumn, handleSort }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            style={{ whiteSpace: "nowrap" }}
            align={column.type === "numeric" ? "right" : "left"}
            id={column.field}
          >
            {column.noSort ? (
              column.title
            ) : (
              <TableSortLabel
                key={"sort" + column.field}
                active={sortColumn.path === column.field}
                direction={sortColumn.order}
                onClick={() => raiseSort(column.field, sortColumn, handleSort)}
              >
                {column.title}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default DataTableHeaderCell;
