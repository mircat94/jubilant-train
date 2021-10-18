import React from "react";
import _ from "lodash";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
const renderCell = (item, column) => {
  if (column.content) return column.content(item);

  return _.get(item, column.field);
};
const DataTableBody = ({
  columns,
  data,
  handleRowClick,
  rowsPerPage,
  page,
}) => {
  return (
    <TableBody>
      {(rowsPerPage > 0
        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : data
      ).map((item) => (
        <TableRow key={item.id} onClick={() => handleRowClick(item)}>
          {columns.map((column) => (
            <TableCell
              style={{ whiteSpace: "nowrap" }}
              align={column.type === "numeric" ? "right" : "left"}
              key={item.id + column.field}
            >
              {renderCell(item, column)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DataTableBody;
