import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { Icon } from 'components/icons';
import { useState } from 'react';

type Props = {
  count: number;
};
const LeftIcon = () => <Icon name="fillleft" />;
const RightIcon = () => <Icon name="fillright" />;
const Paginations = (props: Props): JSX.Element => {
  const { count } = props;
  let tong = Math.floor(count / 10);
  const phandu = count % 10;
  if (phandu > 0) {
    tong += 1;
  }
  return (
    <Stack spacing={2} py={5}>
      <Pagination
        count={tong}
        variant="outlined"
        shape="rounded"
        sx={{
          '.MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
        renderItem={(item) => <PaginationItem slots={{ previous: LeftIcon, next: RightIcon }} {...item} />}
      />
    </Stack>
  );
};
export default Paginations;
