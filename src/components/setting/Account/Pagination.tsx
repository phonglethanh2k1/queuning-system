import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/accountSlices';
import { Typography } from '@mui/material';
import { Role } from 'types/account';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.account.count);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(count / itemsPerPage);
  const [selectedRole, setSelectedRole] = useState(Role.ALL);
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    dispatch(fetchData(selectedRole, page));
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
