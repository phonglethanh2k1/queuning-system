import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/levelNoSlices';
import { nameService, status, powerSupply } from 'types/levelNo';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.data.count);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(count / itemsPerPage);
  const [selectedServiceName, setSelectedServiceName] = useState(nameService.ALL);
  const [selectedStatus, setSelectedStatus] = useState(status.ALL);
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(powerSupply.ALL);
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    // Thực hiện các thao tác cần thiết khi chuyển page, ví dụ dispatch action để fetch dữ liệu của page mới
    // ...
    const offset = (page - 1) * itemsPerPage; // Số sản phẩm cần bỏ qua để đến trang mới
    dispatch(fetchData(selectedServiceName, selectedStatus, selectedPowerSupply, offset));
  };

  useEffect(() => {
    dispatch(fetchCount());
  }, [dispatch]);

  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ '.MuiPagination-ul': { justifyContent: 'end', mt: 2 } }}
      />
    </Stack>
  );
}
