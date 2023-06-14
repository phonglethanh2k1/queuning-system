import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCount, fetchData } from 'redux/slices/reportSlices';
import { nameService, status, powerSupply } from 'types/report';
import { Link, useNavigate } from 'react-router-dom';
import { PaginationItem } from '@mui/material';
export default function BasicPagination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.data.count);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(count / itemsPerPage);
  const [selectedServiceName] = useState(nameService.ALL);
  const [selectedStatus] = useState(status.ALL);
  const [selectedPowerSupply, setSelectedPowerSupply] = useState(powerSupply.ALL);
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    const searchParams = new URLSearchParams();
    searchParams.set('page', page.toString());
    navigate(`/report?${searchParams.toString()}`);
    dispatch(fetchData(selectedServiceName, selectedStatus, selectedPowerSupply, page));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') ?? '1', 10);
    if (page !== currentPage) {
      setCurrentPage(page);
      dispatch(fetchData(selectedServiceName, selectedStatus, selectedPowerSupply, page));
    }
    dispatch(fetchCount());
  }, [currentPage, dispatch, selectedServiceName, selectedStatus, selectedPowerSupply]);
  const renderPaginationItem = (item: any) => (
    <PaginationItem component={Link} to={`/report?page=${item.page}`} {...item} />
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
