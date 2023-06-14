import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/dataSlice';
import { connectionStatus, operationStatus } from 'types/device';
import { PaginationItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.data.count);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;
  const { pageNumber } = useParams();
  const totalPages = Math.ceil(count / itemsPerPage);
  const [selectedOperationStt] = useState(operationStatus.ALL);
  const [selectedConnectionStt] = useState(connectionStatus.ALL);
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    // const offset = (page - 1) * itemsPerPage;
    const searchParams = new URLSearchParams();
    searchParams.set('page', page.toString());
    navigate(`/device?${searchParams.toString()}`);
    setCurrentPage(page);
    dispatch(fetchData(selectedOperationStt, selectedConnectionStt, page));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(fetchData(selectedOperationStt, selectedConnectionStt, page));
    }
    dispatch(fetchCount());
  }, [currentPage, dispatch, selectedOperationStt, selectedConnectionStt]);
  const renderPaginationItem = (item: any) => (
    <PaginationItem component={Link} to={`/device?page=${item.page}`} {...item} />
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
