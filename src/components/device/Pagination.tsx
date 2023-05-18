import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/dataSlice';
import { connectionStatus, operationStatus } from 'types/device';
import { Typography } from '@mui/material';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.data.count);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(count / itemsPerPage);
  const selectedOperationStt = React.useState(operationStatus.ALL)[0];
  const selectedConnectionStt = useState(connectionStatus.ALL)[0];
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    // Thực hiện các thao tác cần thiết khi chuyển page, ví dụ dispatch action để fetch dữ liệu của page mới
    // ...
    const offset = (page - 1) * itemsPerPage; // Số sản phẩm cần bỏ qua để đến trang mới
    dispatch(fetchData(selectedOperationStt, selectedConnectionStt, offset));
  };

  useEffect(() => {
    dispatch(fetchCount());
  }, [dispatch]);

  return (
    <Stack spacing={2}>
      <Typography>{currentPage}</Typography>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ '.MuiPagination-ul': { justifyContent: 'end' } }}
      />
    </Stack>
  );
}