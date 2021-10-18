import React from "react";
import { Typography, Box, Chip } from "@material-ui/core";
const Metric = ({ title, metric, variance, varianceType, subtitle }) => {
  return (
    <Box
      style={{
        padding: "8px 32px",
      }}
    >
      <Typography
        variant="body1"
        style={{ textAlign: "left", fontWeight: 400 }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        style={{ textAlign: "left", padding: "4px 0px" }}
        color={"primary"}
      >
        <span style={{ fontWeight: "bold", marginRight: "8px " }}>
          {metric}
        </span>
        {variance && (
          <Chip label={variance} color={varianceType} variant="outlined" />
        )}
      </Typography>
      <Typography
        variant="body2"
        style={{ textAlign: "left" }}
        color="text.primary"
      >
        <span style={{ fontWeight: "lighter" }}>{subtitle}</span>
      </Typography>
    </Box>
  );
};

export default Metric;
