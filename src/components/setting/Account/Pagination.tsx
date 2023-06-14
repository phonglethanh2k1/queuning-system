import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/accountSlices';
import { PaginationItem } from '@mui/material';
import { Role } from 'types/account';
import { Link, useNavigate } from 'react-router-dom';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.account.count);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(count / itemsPerPage);
  const [selectedRole, setSelectedRole] = useState(Role.ALL);
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    const searchParams = new URLSearchParams();
    searchParams.set('page', page.toString());
    navigate(`/setting/account?${searchParams.toString()}`);
    dispatch(fetchData(selectedRole, page));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(fetchData(selectedRole, page));
    }
    dispatch(fetchCount());
  }, [currentPage, dispatch, selectedRole]);
  const renderPaginationItem = (item: any) => (
    <PaginationItem component={Link} to={`/setting/account?page=${item.page}`} {...item} />
  );
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{ '.MuiPagination-ul': { justifyContent: 'end', mt: 2 } }}
        renderItem={renderPaginationItem}
      />
    </Stack>
  );
}
