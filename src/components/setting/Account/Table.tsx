import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableContainer, Typography, Box, TextField, InputAdornment, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Data, fetchData } from 'redux/slices/accountSlices';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { SettingRoute } from 'routers/setting/route';
import AutoComplete from 'components/form/AutoComplete';
import { Role, RoleOptions, Status } from 'types/account';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BasicPagination from './Pagination';

const Tables = (): JSX.Element => {
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(Role.ALL);
  const data = useSelector((state: RootState) => state.account.data);
  const renderUpdate = (detail: Data) => (
    <RouterLink to={`${SettingRoute.UPDATE_ACCOUNT.replace(':id', detail.id)}`} style={{ color: '#4277FF' }}>
      Cập nhật
    </RouterLink>
  );
  const renderStatus = (status: Status) => {
    if (status === Status.NGUNGHOATDONG) {
      return (
        <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="error" />} sx={{ py: 1, px: 0 }}>
          Ngưng hoạt động
        </Button>
      );
    }

    return (
      <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="success" />} sx={{ py: 1, px: 0 }}>
        Hoạt động
      </Button>
    );
  };
  const getRoleLabel = (row: any) => {
    if (row.role && row.role.label) {
      return row.role.label;
    }
    return row.role ? row.role.toString() : '';
  };
  const handleRole = (event: any, newValue: any) => {
    setSelectedRole(newValue.id);
  };
  useEffect(() => {
    const page = 0;
    dispatch(fetchData(selectedRole, page));
  }, [dispatch, selectedRole]);

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box width="20%">
          <Typography variant="body1">Tên vai trò</Typography>
          <AutoComplete
            onChange={handleRole}
            sx={{
              '.MuiOutlinedInput-root': {
                padding: '5px',
              },
            }}
            options={[
              {
                id: Role.ALL,
                label: RoleOptions[Role.ALL].label,
              },
              {
                id: Role.ACCOUNTANT,
                label: RoleOptions[Role.ACCOUNTANT].label,
              },
              {
                id: Role.MANAGE,
                label: RoleOptions[Role.MANAGE].label,
              },
              {
                id: Role.ADMIN,
                label: RoleOptions[Role.ADMIN].label,
              },
            ]}
            getItemLabel={(item) => item.label}
            getItemValue={(item) => item.id}
            defaultValue={{
              id: Role.ALL,
              label: RoleOptions[Role.ALL].label,
            }}
          />
        </Box>
        <Box>
          <Typography variant="body1">Từ khóa</Typography>
          <TextField
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
              <TableCell align="center">Tên đăng nhập </TableCell>
              <TableCell align="center">Họ tên</TableCell>
              <TableCell align="center">Số điện thoại</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Vai trò</TableCell>
              <TableCell align="center">Trạng thái hoạt động</TableCell>
              <TableCell align="center" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.userName}
                </TableCell>
                <TableCell align="center">{row.fullName}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{getRoleLabel(row)}</TableCell>
                <TableCell align="center">{renderStatus(row.status)}</TableCell>
                <TableCell align="center">{renderUpdate(row)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <BasicPagination />
      </TableContainer>
    </>
  );
};
export default Tables;
