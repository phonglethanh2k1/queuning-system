import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button, TableContainer, Typography, Link, Box, TextField, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { Data, fetchData, fetchSearchDevice } from 'redux/slices/dataSlice';
import { ConnectionStatusOption, OperationStatusOption, connectionStatus, operationStatus } from 'types/device';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link as RouterLink } from 'react-router-dom';
import AutoComplete from 'components/form/AutoComplete';
import SearchIcon from '@mui/icons-material/Search';
import { DeviceRoute } from 'routers/device/route';
import BasicPagination from './Pagination';
const Tables = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const [selectedOperationStt, setSelectedOperationStt] = useState(operationStatus.ALL);
  const [selectedConnectionStt, setSelectedConnectionStt] = useState(connectionStatus.ALL);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleOnChange = (event: any) => {
    setSearchTerm(event.target.value);
    dispatch(fetchSearchDevice(event.target.value));
  };
  const handleOperationSttChange = (event: any, newValue: any) => {
    setSelectedOperationStt(newValue.id);
  };

  const handleConnectionSttChange = (event: any, newValue: any) => {
    setSelectedConnectionStt(newValue.id);
  };
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data.data);
  // const status = useSelector((state: RootState) => state.data.status);
  // const error = useSelector((state: RootState) => state.data.error);
  const renderOperationStt = (operationStt: operationStatus) => {
    if (operationStt === operationStatus.OFF) {
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
  const renderConnectionStt = (connectionStt: connectionStatus) => {
    if (connectionStt === connectionStatus.OFF) {
      return (
        <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="error" />} sx={{ py: 1, px: 0 }}>
          Mất kết nối
        </Button>
      );
    }

    return (
      <Button size="medium" variant="text" startIcon={<FiberManualRecordIcon color="success" />} sx={{ py: 1, px: 0 }}>
        Kết nối
      </Button>
    );
  };
  // eslint-disable-next-line consistent-return
  const renderDetail = (detail: Data) => (
    <RouterLink to={`${DeviceRoute.DEVICE}/${detail.id}`} style={{ color: '#4277FF' }}>
      Chi tiết
    </RouterLink>
  );
  // eslint-disable-next-line consistent-return
  const renderUpdate = (detail: Data) => (
    <RouterLink to={`${DeviceRoute.UPDATE_DEVICE.replace(':id', detail.id)}`} style={{ color: '#4277FF' }}>
      Cập nhật
    </RouterLink>
  );
  useEffect(() => {
    dispatch(fetchData(selectedOperationStt, selectedConnectionStt, count));
  }, [dispatch, selectedOperationStt, selectedConnectionStt, count]);

  return (
    <>
      <Box display="flex">
        <Box flexGrow={1} display="flex">
          <Box width="20%" mr={8}>
            <Typography variant="body1">Trạng thái hoạt động</Typography>
            <AutoComplete
              onChange={handleOperationSttChange}
              sx={{
                '.MuiOutlinedInput-root': {
                  padding: '5px',
                },
              }}
              options={[
                {
                  id: operationStatus.ALL,
                  label: OperationStatusOption[operationStatus.ALL].label,
                },
                {
                  id: operationStatus.ON,
                  label: OperationStatusOption[operationStatus.ON].label,
                },
                {
                  id: operationStatus.OFF,
                  label: OperationStatusOption[operationStatus.OFF].label,
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: operationStatus.ALL,
                label: OperationStatusOption[operationStatus.ALL].label,
              }}
            />
          </Box>
          <Box width="20%">
            <Typography variant="body1">Trạng thái kết nối</Typography>
            <AutoComplete
              onChange={handleConnectionSttChange}
              sx={{
                '.MuiOutlinedInput-root': {
                  padding: '5px',
                },
              }}
              options={[
                {
                  id: connectionStatus.ALL,
                  label: ConnectionStatusOption[connectionStatus.ALL].label,
                },
                {
                  id: connectionStatus.ON,
                  label: ConnectionStatusOption[connectionStatus.ON].label,
                },
                {
                  id: connectionStatus.OFF,
                  label: ConnectionStatusOption[connectionStatus.OFF].label,
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.id}
              defaultValue={{
                id: connectionStatus.ALL,
                label: ConnectionStatusOption[connectionStatus.ALL].label,
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body1">Từ khóa</Typography>
          <TextField
            placeholder="Nhập từ khóa"
            value={searchTerm}
            onChange={handleOnChange}
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
              <TableCell align="center">Mã thiết bị</TableCell>
              <TableCell align="left">Tên thiết bị</TableCell>
              <TableCell align="left">Địa chỉ IP</TableCell>
              <TableCell align="left">Trạng thái hoạt động</TableCell>
              <TableCell align="left">Trạng thái kết nối</TableCell>
              <TableCell align="left">Dịch vụ sử dụng</TableCell>
              <TableCell align="left" />
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {row.deviceCode}
                </TableCell>
                <TableCell align="left">{row.deviceName}</TableCell>
                <TableCell align="left">{row.addressIP}</TableCell>
                <TableCell align="left">{renderOperationStt(row.operationStt)}</TableCell>
                <TableCell align="left">{renderConnectionStt(row.connectionStt)}</TableCell>
                <TableCell align="left">
                  <Typography
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    width="280px"
                    sx={{ color: 'grey.800' }}
                  >
                    {row.serviceUsed}
                  </Typography>
                  <Link href="/" component="button" variant="body1" underline="hover">
                    Xem thêm...
                  </Link>
                </TableCell>
                <TableCell align="left">{renderDetail(row)}</TableCell>
                <TableCell align="left">{renderUpdate(row)}</TableCell>
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
