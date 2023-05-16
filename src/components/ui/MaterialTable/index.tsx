/* eslint-disable react/destructuring-assignment */
import React from 'react';
import MUIDataTable, { MUIDataTableProps } from 'mui-datatables';
import { Box } from '@mui/material';

const MUITable = (props: MUIDataTableProps) => <MUIDataTable {...props} title={<Box>{props.title}</Box>} />;
export default MUITable;
