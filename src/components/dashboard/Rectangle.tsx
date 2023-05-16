import { Avatar, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Icon } from 'components/icons';

const cardLits = [
  {
    title: 'Số thứ tự đã cấp',
    avatar: (
      <Avatar
        sizes="md"
        sx={{ backgroundColor: 'secondary.light', width: '50px', height: '50px', mr: '12px', mb: '12px' }}
      >
        <Icon name="dashboard03" />
      </Avatar>
    ),
    text: '4.221 ',
    button: (
      <Button
        size="small"
        startIcon={<ArrowUpwardIcon />}
        sx={{ backgroundColor: 'warning.light', borderRadius: '17px', color: 'primay.main ' }}
      >
        32,41%
      </Button>
    ),
  },
  {
    title: 'Số thứ tự đã sử dụng',
    avatar: (
      <Avatar
        sizes="md"
        sx={{ backgroundColor: 'success.light', width: '50px', height: '50px', mr: '12px', mb: '12px' }}
      >
        <Icon name="dashboard02" />
      </Avatar>
    ),
    text: '3.721 ',
    button: (
      <Button
        size="small"
        startIcon={<ArrowDownwardIcon />}
        sx={{ backgroundColor: 'error.light', color: 'error.main', borderRadius: '17px' }}
      >
        32,41%
      </Button>
    ),
  },
  {
    title: 'Số thứ tự đang chờ',
    avatar: (
      <Avatar
        sizes="md"
        sx={{ backgroundColor: 'warning.light', width: '50px', height: '50px', mr: '12px', mb: '12px' }}
      >
        <Icon name="dashboard05" />
      </Avatar>
    ),
    text: '468',
    button: (
      <Button
        size="small"
        startIcon={<ArrowUpwardIcon />}
        sx={{ backgroundColor: 'warning.light', borderRadius: '17px' }}
      >
        56,41%
      </Button>
    ),
  },
  {
    title: 'Số thứ tự đã bỏ qua',
    avatar: (
      <Avatar sizes="md" sx={{ backgroundColor: 'error.light', width: '50px', height: '50px', mr: '12px', mb: '12px' }}>
        <Icon name="dashboard07" />
      </Avatar>
    ),
    text: '32',
    button: (
      <Button
        size="small"
        startIcon={<ArrowDownwardIcon />}
        sx={{ backgroundColor: 'error.light', borderRadius: '17px', color: 'error.main' }}
      >
        22,41%
      </Button>
    ),
  },
];
const Rectangle = (): JSX.Element => (
  <Grid container spacing={2}>
    {cardLits.map((item) => (
      <Grid item xs={3}>
        <Card sx={{ minWidth: 186, borderRadius: '12px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {item.avatar}
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h2" color="black">
                {item.text}
              </Typography>
              {item.button}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
export default Rectangle;
