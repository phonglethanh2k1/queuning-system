import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer, Typography, Box, TextField, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Data, fetchData, fetchSearchRole } from 'redux/slices/roleSlices';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { SettingRoute } from 'routers/setting/route';
const Tables = (): JSX.Element => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.role.data);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOnChange = (event: any) => {
    setSearchTerm(event.target.value);
    dispatch(fetchSearchRole(event.target.value));
  };
  const renderUpdate = (detail: Data) => (
    <RouterLink to={`${SettingRoute.UPDATE_ROLE.replace(':id', detail.id)}`} style={{ color: '#4277FF' }}>
      Cập nhật
    </RouterLink>
  );
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Box display="flex" justifyContent="end">
        <Box>
          <Typography variant="body1">Từ khóa</Typography>
          <TextField
            value={searchTerm}
            onChange={handleOnChange}
            placeholder="Nhập từ khóa"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '.MuiOutlinedInput-input': {
                py: '12px',
              },
            }}
          />
        </Box>
      </Box>

      <TableContainer sx={{ mt: 3, borderRadius: 1 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Tên vai trò</TableCell>
              <TableCell align="left">Số người dùng</TableCell>
              <TableCell align="left">Mô tả</TableCell>
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="left">
                  {row.roleName}
                </TableCell>
                <TableCell align="left">{row.numberOfUsers}</TableCell>
                <TableCell align="left">{row.descrip}</TableCell>
                <TableCell align="left">{renderUpdate(row)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Tables;
