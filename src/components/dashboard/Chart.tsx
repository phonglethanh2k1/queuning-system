import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AutoComplete from "components/form/AutoComplete";
import DatePicker from "components/form/DatePicker";
import React, { useState } from "react";

import Chart from "react-apexcharts";

const Charts = (): JSX.Element => (
  <Box
    sx={{
      backgroundColor: "common.white",
      mt: 2,
      borderRadius: "17px",
      padding: "10px",
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h4" color="black">
          Bảng thống kê theo ngày
        </Typography>
        <Typography variant="subtitle1" mt={1}>
          Tháng 11/2021
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="body1"
          color="black"
          mr={1}
          sx={{ width: "130px" }}
        >
          Xem theo
        </Typography>
        <Box sx={{ width: "100%" }}>
          <AutoComplete
            options={[
              { id: 1, label: "Ngày" },
              { id: 2, label: "Tháng" },
              { id: 3, label: "Tuần" },
            ]}
            getItemLabel={(item) => item.label}
            getItemValue={(item) => item.id}
          />
        </Box>
      </Box>
    </Box>
    <Chart
      type="area"
      width={1100}
      height={450}
      series={[
        {
          name: "Company1",
          data: [1000, 2000, 3000, 4000, 5000],
        },
      ]}
      options={{
        colors: ["#CEDDFF"],
        chart: {
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          labels: {
            style: {
              colors: ["#333"],
              fontSize: "17px",
            },
          },
          categories: ["01", "13", "19", "31 ", "40"],
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#333"],
              fontSize: "16px",
            },
          },
        },
        legend: {
          show: true,
        },
      }}
    />
  </Box>
);
export default Charts;
