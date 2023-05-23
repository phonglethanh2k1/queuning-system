import { Box, Grid, Typography } from '@mui/material';
import { Icon } from 'components/icons';
import React from 'react';
import Chart from 'react-apexcharts';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CardList = [
  {
    chart: (
      <Chart
        height={140}
        width={90}
        type="radialBar"
        series={[90, 10]}
        options={{
          colors: ['#FF7506', '#7E7D88'],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                  show: false,
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                },
              },
            },
          },
        }}
      />
    ),
    text: '4221',
    icons: <Icon name="monitor" />,
    textIcon: (
      <Typography variant="body2" ml={1}>
        Thiết bị
      </Typography>
    ),
    iconSttOn: <FiberManualRecordIcon sx={{ color: 'warning.main', fontSize: '12px ' }} />,
    statusOn: 'Đang hoạt động',
    iconSttOff: <FiberManualRecordIcon sx={{ color: 'grey.700', fontSize: '12px ' }} />,
    statusOff: 'Ngưng hoạt động',
    numberOn: (
      <Typography variant="body2" sx={{ color: 'primary.main' }}>
        3.799
      </Typography>
    ),
    numberOf: (
      <Typography variant="body2" sx={{ color: 'primary.main' }}>
        422
      </Typography>
    ),
  },
  {
    chart: (
      <Chart
        height={140}
        width={90}
        type="radialBar"
        series={[90, 10]}
        options={{
          colors: ['#4277FF', '#7E7D88'],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                  show: false,
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                },
              },
            },
          },
        }}
      />
    ),
    text: '276',
    icons: <Icon name="service" />,
    textIcon: (
      <Typography variant="body2" ml={1} sx={{ color: 'secondary.main' }}>
        Dịch vụ
      </Typography>
    ),
    iconSttOn: <FiberManualRecordIcon sx={{ color: 'secondary.main', fontSize: '12px ' }} />,
    statusOn: 'Đang hoạt động',
    iconSttOff: <FiberManualRecordIcon sx={{ color: 'grey.700', fontSize: '12px ' }} />,
    statusOff: 'Ngưng hoạt động',
    numberOn: (
      <Typography variant="body2" sx={{ color: 'secondary.main' }}>
        210
      </Typography>
    ),
    numberOf: (
      <Typography variant="body2" sx={{ color: 'secondary.main' }}>
        66
      </Typography>
    ),
  },
  {
    chart: (
      <Chart
        height={140}
        width={90}
        type="radialBar"
        series={[90, 10, 8]}
        options={{
          colors: ['#35C75A', '#7E7D88', '#F178B6'],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                  show: false,
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                },
              },
            },
          },
        }}
      />
    ),
    text: '4221',
    icons: <Icon name="levelNo" />,
    textIcon: (
      <Typography variant="body2" ml={1} sx={{ color: 'success.main' }}>
        Cấp số
      </Typography>
    ),
    iconWaiting: <FiberManualRecordIcon sx={{ color: 'success.dark', fontSize: '12px ' }} />,
    statusWaiting: 'Đang chờ',
    iconUsed: <FiberManualRecordIcon sx={{ color: 'grey.700', fontSize: '12px ' }} />,
    used: 'Đã sử dụng',
    iconSkip: <FiberManualRecordIcon sx={{ color: 'error.main', fontSize: '12px ' }} />,
    statusEkip: 'Bỏ qua',
    numberWaiting: (
      <Typography variant="body2" sx={{ color: 'success.main' }}>
        3.721
      </Typography>
    ),
    numberUsed: (
      <Typography variant="body2" sx={{ color: 'success.main' }}>
        486
      </Typography>
    ),
    numberEkip: (
      <Typography variant="body2" sx={{ color: 'success.main' }}>
        32
      </Typography>
    ),
  },
];
const CardRight = (): JSX.Element => (
  <>
    <Grid container spacing={2}>
      {CardList.map((item) => (
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              minWidth: 186,
              borderRadius: '12px',
              boxShadow: '2px 2px 15px rgba(70, 64, 67, 0.1);',
              alignItems: 'center',
              px: '10px',
            }}
          >
            <Grid item xs={3}>
              {item.chart}
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h2">{item.text}</Typography>
              <Box display="flex">
                {item.icons}
                {item.textIcon}
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box display="flex" alignItems="center" ml="12px">
                {item.iconSttOn || item.iconWaiting}
                <Typography variant="subtitle2" lineHeight="2.57" ml={1}>
                  {item.statusOn || item.statusWaiting}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" ml="12px">
                {item.iconSttOff || item.iconUsed}
                <Typography variant="subtitle2" lineHeight="2.57" ml={1}>
                  {item.statusOff || item.used}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" ml="12px">
                {item.iconSkip}
                <Typography variant="subtitle2" lineHeight="2.57" ml={1}>
                  {item.statusEkip}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={1} ml={3}>
              {item.numberOn || item.numberWaiting}
              {item.numberOf || item.numberUsed}
              {item.numberEkip}
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </>
);
export default CardRight;
