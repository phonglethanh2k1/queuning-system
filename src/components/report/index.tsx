import AddIcon from "@mui/icons-material/Add";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "components/breadcrumb/Breadcrumb";
import { LevelNoRoute } from "routers/levelNo/route";
import Tables from "./Table";
import { ReportRoute } from "routers/report/route";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
const Report = (): JSX.Element => (
  <>
    <Breadcrumb
      items={[
        { label: "Báo cáo" , to: '' },
        { label: "Lập báo cáo", to: ReportRoute.REPORT },
      ]}
    />
    <Box mt={1} >
      <Typography variant="h3" mb={2}>
      Quản lý cấp số
      </Typography>
      <Grid container>
        <Grid item xs={11} />
        <Grid item xs={11}>
          <Tables />
        </Grid>
        <Grid item xs={1} mt={12}>
          <Link to={LevelNoRoute.NEW_NUMBER_LV}>
            <Button
              sx={{ ml: 6, flexDirection: "column" }}
              variant="contained"
              size="medium"
              startIcon={<SimCardDownloadIcon />}
            >
              Tải về
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  </>
);
export default Report;
