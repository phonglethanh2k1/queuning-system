import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/serviceSlice';
import { operationStatus } from 'types/service';
import { PaginationItem } from '@mui/material';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.data.count);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(count / itemsPerPage);
  const [selectedOperationStt, setSelectedOperationStt] = useState(operationStatus.ALL);
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    // const offset = (page - 1) * itemsPerPage;
    const searchParams = new URLSearchParams();
    searchParams.set('page', page.toString());
    navigate(`/service?${searchParams.toString()}`);
    setCurrentPage(page);
    dispatch(fetchData(selectedOperationStt, page));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(fetchData(selectedOperationStt, page));
    }
    dispatch(fetchCount());
  }, [currentPage, dispatch, selectedOperationStt]);
  const renderPaginationItem = (item: any) => (
    <PaginationItem component={Link} to={`/service?page=${item.page}`} {...item} />
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
