import React from "react";
import DataTableScene from "../scene/DataTableScene";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { mockData } from "../data/MockData";

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box padding="32px 16px" style={{ display: "flex" }}>
        <div>
          <Typography variant="h5" style={{ textAlign: "left" }}>
            <span style={{ fontWeight: "bold" }}>Welcome Back, </span> Miranda!
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: "left" }}
            color="text.primary"
          >
            Premium user
          </Typography>
        </div>
      </Box>{" "}
      <DataTableScene mockData={mockData} />
    </Container>
  );
};

export default Dashboard;
