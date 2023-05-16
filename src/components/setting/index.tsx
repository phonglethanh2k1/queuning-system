import InputAdornment from '@material-ui/core/InputAdornment';
import { Box, Button, Typography } from '@mui/material';
import TextField from 'components/form/TextField';
import { Icon } from 'components/icons';
import React, { useState } from 'react';

import Tables from './Table';

const Setting = (): JSX.Element => {
  const [openCreate, setOpenCreate] = useState<boolean>(false);

  return (
    <Box bgcolor="common.white" padding="16px" borderRadius="15px">
      <Typography variant="h2" mb="32px" fontWeight="blod">
        Danh sách gói vé
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ width: '20%' }}>
          <TextField
            placeholder="Tìm bằng số vé..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Icon name="search" />
                </InputAdornment>
              ),
            }}
            sx={{ fontStyle: 'italic' }}
          />
        </Box>
        <Box>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              mr: ' 10px',
            }}
          >
            Xuất file(.csv)
          </Button>

          <Button variant="contained" size="medium" onClick={() => setOpenCreate(true)}>
            Thêm gói vé
          </Button>
        </Box>
      </Box>

      <Tables openCreate={openCreate} onClose={() => setOpenCreate(false)} />
    </Box>
  );
};

export default Setting;
