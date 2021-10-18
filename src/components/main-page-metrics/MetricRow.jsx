import { Grid } from "@material-ui/core";
import React from "react";
import Metric from "./Metric";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
const MetricRow = ({ data, dateFilter }) => {
  const pending = data.filter((d) => d.order_status === "Pending");
  const completed = data.filter((d) => d.order_status === "Completed");
  const shipped = data.filter((d) => d.order_status === "Shipped");

  return (
    <>
      <Divider />
      <Box padding="32px 16px">
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            sm={3}
            spacing={3}
            style={{ borderRight: "1px solid #ccc" }}
          >
            <Metric
              title={"Orders"}
              metric={data.length}
              subtitle={dateFilter.label}
            />
          </Grid>
          <Grid
            item
            sm={3}
            xs={6}
            spacing={3}
            style={{ borderRight: "1px solid #ccc" }}
          >
            <Metric
              title={"Shipped"}
              metric={shipped.length}
              subtitle={dateFilter.label}
            />
          </Grid>
          <Grid item sm={3} xs={6} style={{ borderRight: "1px solid #ccc" }}>
            <Metric
              title={"Completed"}
              metric={completed.length}
              subtitle={dateFilter.label}
            />
          </Grid>
          <Grid item sm={3} xs={6}>
            <Metric
              title={"Pending"}
              metric={pending.length}
              subtitle={dateFilter.label}
            />
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default MetricRow;
