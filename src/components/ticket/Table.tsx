import InputAdornment from '@material-ui/core/InputAdornment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from 'components/form/TextField';
import { Icon } from 'components/icons';
import {
  and,
  collection,
  CollectionReference,
  doc,
  DocumentData,
  getCountFromServer,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import React, { useCallback, useEffect, useState } from 'react';
import { GateCheckIn, GateCheckOption, Ticket, TicketStatus, TicketStatusOption } from 'types/ticket';
import DialogTicket, { FilterFormType } from './DialogTicket';
import MuiPagination from './Pagination';

const Tables = (): JSX.Element => {
  const [dataTable, setData] = useState<Ticket[]>([]);
  const [count, setCount] = useState<number>(0);
  const getQuery = (equipment: CollectionReference<DocumentData>, filterValue?: FilterFormType) => {
    if (!filterValue) {
      return query(equipment, limit(10));
    }

    if (filterValue?.status === TicketStatus.ALL && filterValue?.check.includes(GateCheckIn.ALL)) {
      return query(equipment, limit(10));
    }

    return query(
      equipment,
      and(
        where(
          'status',
          filterValue.status === TicketStatus.ALL ? '!=' : '==',
          filterValue.status === TicketStatus.ALL ? TicketStatus.ALL : filterValue.status
        ),
        where(
          'gateCheckIn',
          filterValue?.check.includes(GateCheckIn.ALL) ? 'not-in' : 'in',
          filterValue?.check.includes(GateCheckIn.ALL) ? [GateCheckIn.ALL] : filterValue?.check
        )
      )
    );
  };

  const getData = useCallback(async (filterValue?: FilterFormType) => {
    const equipment = collection(firebaseDatabase, 'ticket');
    const queryString = getQuery(equipment, filterValue);

    const snapshot = await getDocs(queryString);

    const coll = collection(firebaseDatabase, 'ticket');
    const countSnapshot = await getCountFromServer(coll);
    setCount(countSnapshot.data()?.count);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = snapshot.docs.map((docSnap: QueryDocumentSnapshot<any>) => ({
      ...docSnap.data(),
      id: docSnap.id,
    }));
    setData(result);
  }, []);

  const getFilterValue = async (values: FilterFormType) => {
    getData(values);
  };
  const renderStatus = (status: TicketStatus) => {
    if (status === TicketStatus.USED) {
      return (
        <Button variant="outlined" color="info" size="small" startIcon={<FiberManualRecordIcon />}>
          {TicketStatusOption[TicketStatus.USED].label}
        </Button>
      );
    }
    if (status === TicketStatus.NOT_USED) {
      return (
        <Button variant="outlined" color="success" size="small" startIcon={<FiberManualRecordIcon />}>
          {TicketStatusOption[TicketStatus.NOT_USED].label}
        </Button>
      );
    }

    return (
      <Button variant="outlined" color="error" size="small" startIcon={<FiberManualRecordIcon />}>
        {TicketStatusOption[TicketStatus.EXPIRED].label}
      </Button>
    );
  };

  const renderCheckGate = (gateCheckIn: GateCheckIn) => {
    if (gateCheckIn === GateCheckIn.ONE) {
      return (
        <Typography variant="body1" color="grey.600">
          {GateCheckOption[GateCheckIn.ONE].label}
        </Typography>
      );
    }
    if (gateCheckIn === GateCheckIn.TWO) {
      return (
        <Typography variant="body1" color="grey.600">
          {GateCheckOption[GateCheckIn.TWO].label}
        </Typography>
      );
    }
    if (gateCheckIn === GateCheckIn.THREE) {
      return (
        <Typography variant="body1" color="grey.600">
          {GateCheckOption[GateCheckIn.THREE].label}
        </Typography>
      );
    }
    if (gateCheckIn === GateCheckIn.FOUR) {
      return (
        <Typography variant="body1" color="grey.600">
          {GateCheckOption[GateCheckIn.FOUR].label}
        </Typography>
      );
    }
    return (
      <Typography variant="body1" color="grey.600">
        {GateCheckOption[GateCheckIn.FIVE].label}
      </Typography>
    );
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <TextField
            placeholder="Tìm bằng số vé..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Icon name="search" />
                </InputAdornment>
              ),
            }}
            sx={{ fontStyle: 'italic' }}
          />
        </Box>

        <DialogTicket handleGetValue={(values) => getFilterValue(values)} />
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">Booking code</TableCell>
              <TableCell align="left">Số vé</TableCell>
              <TableCell align="left">Tên sự kiện</TableCell>
              <TableCell align="left">Tình trạng sử dụng</TableCell>
              <TableCell align="right">Ngày sử dụng</TableCell>
              <TableCell align="right">Ngày xuất vé</TableCell>
              <TableCell align="left">Cổng check - in</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.booking}</TableCell>
                <TableCell align="left">{row.ticketNumber}</TableCell>
                <TableCell align="left">{row.nameEvent}</TableCell>
                <TableCell align="left" sx={{ fontSize: '12px' }}>
                  {renderStatus(row.status)}
                </TableCell>
                <TableCell align="right">{row.dateUse}</TableCell>
                <TableCell align="right">{row.ticketReleaseDate}</TableCell>
                <TableCell align="left">{renderCheckGate(row.gateCheckIn)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MuiPagination count={count} />
    </>
  );
};

export default Tables;
