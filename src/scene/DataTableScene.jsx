import React, { useState, useEffect } from "react";
import DataTable from "../components/table/DataTable";
import { defaultColumns, orderDetails } from "../data/MockData";

import _ from "lodash";
import IconInput from "../components/inputs/IconInput";
import SlideInDialog from "../components/dialog/SlideInDialog";
import SearchIcon from "@material-ui/icons/Search";

import UserCard from "../components/card/UserCard";
import Typography from "@material-ui/core/Typography";
import SelectInput from "../components/inputs/Select";
import MetricRow from "../components/main-page-metrics/MetricRow";

import Box from "@material-ui/core/Box";

const DataTableScene = ({ mockData }) => {
  const [data, setData] = useState([]);
  const columns = defaultColumns;
  const [sortColumn, setSortColumn] = useState({
    path: "first_name",
    order: "asc",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [dateFilter, setDateFilter] = useState({
    label: "All Orders",
    value: "",
  });
  const handleDateFilter = (newFilter) => {
    setDateFilter(newFilter);
    setSearchQuery("");
  };
  const handleSortColumn = (sortCol) => {
    setSortColumn({ path: sortCol.path, order: sortCol.order });
    setCurrentPage(0);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    if (value === "") {
      setData(mockData);
    } else {
      setDateFilter({
        label: "All Orders",
        value: "",
      });
    }
    setCurrentPage(0);
    setSearchQuery(value);
  };
  const handleChangePage = (e, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setPageSize(e.target.value);
    setCurrentPage(0);
  };
  const handleSelectedOrder = (order) => {
    const shuffled = orderDetails.sort(() => 0.5 - Math.random());
    let products = shuffled.slice(0, 4);
    setSelectedOrder({ order, products });
  };

  useEffect(() => {
    let filtered = [...mockData];
    const search = new RegExp(searchQuery, "igm");
    if (searchQuery !== "") {
      filtered = filtered.filter(
        (people) =>
          people.first_name.match(search) ||
          people.last_name.match(search) ||
          people.email.match(search) ||
          people.city.match(search) ||
          people.state.match(search)
      );
    }

    if (dateFilter.value !== "") {
      console.log({ dateFilter });
      filtered = filtered.filter(
        (d) => new Date(d.purchase_date) > new Date(dateFilter.value)
      );
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    setData([...sorted]);
  }, [
    // data,
    mockData,
    searchQuery,
    sortColumn,
    pageSize,
    currentPage,
    dateFilter,
    // setData,
  ]);

  return (
    <>
      <MetricRow data={data} dateFilter={dateFilter} filteredDate={mockData} />

      <Box margin="32px 16px 16px">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h5"
              color="text.primary"
              style={{
                padding: "10px",
                fontWeight: "bold",
                marginRight: "32px",
              }}
            >
              Orders
            </Typography>
            <SelectInput
              label={"Date Range"}
              options={[
                { label: "All Orders", value: "" },
                {
                  label: "Last 7 days",
                  value: new Date(
                    new Date().getFullYear(),
                    new Date().getMonth(),
                    new Date().getDate() - 7
                  ),
                },
                {
                  label: "Last Month",
                  value: new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() - 1,
                    new Date().getDate()
                  ),
                },
                {
                  label: "Last 6 Months",
                  value: new Date(
                    new Date().getFullYear(),
                    new Date().getMonth() - 6,
                    new Date().getDate()
                  ),
                },
              ]}
              value={dateFilter}
              handleClick={handleDateFilter}
            />
          </div>
          <IconInput
            id={"search-data-table"}
            label={"Search"}
            value={searchQuery}
            iconPosition={"start"}
            iconButtonLabel={"search"}
            icon={<SearchIcon />}
            handleChange={handleSearch}
          />
        </div>

        <DataTable
          data={data}
          columns={columns}
          pageSize={pageSize}
          currentPage={currentPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          sortColumn={sortColumn}
          handleSort={handleSortColumn}
          handleRowClick={handleSelectedOrder}
        />
      </Box>
      {selectedOrder !== null && (
        <SlideInDialog isOpen={selectedOrder !== null}>
          <UserCard
            order={selectedOrder !== null && selectedOrder}
            handleClose={() => setSelectedOrder(null)}
          />
        </SlideInDialog>
      )}
    </>
  );
};

export default DataTableScene;
