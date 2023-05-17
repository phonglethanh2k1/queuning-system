import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import Tables from "./Table";
import { ServiceRoute } from "routers/service/route";
const Service = (): JSX.Element => (
  <>
    <Breadcrumb
      items={[
        { label: "Dịch vụ" },
        { label: "Danh sách dịch vụ", to: "/service" },
      ]}
    />
    <Box>
      <Box>
        <Typography variant="h3" mb={2}>
          Quản lý dịch vụ
        </Typography>
        <Grid container>
          <Grid item xs={11} />
          <Grid item xs={11}>
            <Tables />
          </Grid>
          <Grid item xs={1} mt={12}>
            <Link to={ServiceRoute.ADD_SERVICE}>
              <Button
                sx={{ ml: 6, flexDirection: "column" }}
                variant="contained"
                size="medium"
                startIcon={<AddIcon />}
              >
                Thêm dịch vụ
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
);
export default Service;
