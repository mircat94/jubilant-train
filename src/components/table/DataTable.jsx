import React from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableBody from "./DataTableBody";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
const DataTable = ({
  columns,
  data,

  sortColumn,
  handleSort,
  pageSize,
  currentPage,
  handleChangePage,
  handleChangeRowsPerPage,
  handleRowClick,
}) => {
  return (
    <>
      <TableContainer style={{ marginTop: "16px" }}>
        <Table size="small">
          <DataTableHeader
            columns={columns}
            data={data}
            sortColumn={sortColumn}
            handleSort={handleSort}
          />

          <DataTableBody
            columns={columns}
            data={data}
            handleRowClick={handleRowClick}
            rowsPerPage={pageSize}
            page={currentPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={pageSize}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default DataTable;
