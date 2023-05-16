import React, { useCallback, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import {
  CheckTicketStatus,
  CheckTicket,
  GateCheckIn,
  CheckTicketStatusOption,
  GateCheckOption,
} from "types/checkTicket";
import {
  and,
  collection,
  CollectionReference,
  DocumentData,
  getCountFromServer,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  where,
} from "firebase/firestore";
import { firebaseDatabase } from "firebaseApp/config";
import Paginations from "./Pagination";
import { FilterFormType } from "./TicketFilter";

type Props = {
  filterStatus: CheckTicketStatus;
};

const Tables = (props: Props): JSX.Element => {
  const { filterStatus } = props;
  console.log(filterStatus);
  const [dataTable, setData] = useState<CheckTicket[]>([]);
  const [count, setCount] = useState<number>(0);
  const getQuery = (
    equipment: CollectionReference<DocumentData>,
    filterValue?: CheckTicketStatus
  ) => {
    if (!filterValue) {
      return query(equipment);
    }

    if (filterValue === CheckTicketStatus.ALL) {
      return query(equipment, limit(10));
    }

    return query(equipment, and(where("status", "==", filterValue)));
  };

  const getData = useCallback(async (filterValue?: CheckTicketStatus) => {
    const equipment = collection(firebaseDatabase, "checkTicket");
    const queryString = getQuery(equipment, filterValue);

    const snapshot = await getDocs(queryString);

    const coll = collection(firebaseDatabase, "checkTicket");
    const countSnapshot = await getCountFromServer(coll);
    setCount(countSnapshot.data()?.count);

    const result = snapshot.docs.map((doc: QueryDocumentSnapshot<any>) => ({
      ...doc.data(),
      id: doc.id,
    }));

    setData(result);
  }, []);
  useEffect(() => {
    getData(filterStatus);
  }, [filterStatus, getData]);
  const renderStatus = (status: CheckTicketStatus) => {
    if (status === CheckTicketStatus.CHECKED) {
      return (
        <Typography color="error" fontStyle="italic">
          {CheckTicketStatusOption[CheckTicketStatus.CHECKED].label}
        </Typography>
      );
    }

    return (
      <Typography color="grey.600" fontStyle="italic">
        {CheckTicketStatusOption[CheckTicketStatus.UN_CHECKED].label}
      </Typography>
    );
  };

  const renderGateCheck = (gateCheckin: GateCheckIn) => {
    if (gateCheckin === GateCheckIn.ONE) {
      return (
        <Typography color="grey.600">
          {GateCheckOption[GateCheckIn.ONE].label}
        </Typography>
      );
    }

    if (gateCheckin === GateCheckIn.TWO) {
      return (
        <Typography color="grey.600">
          {GateCheckOption[GateCheckIn.TWO].label}
        </Typography>
      );
    }
    return (
      <Typography color="grey.600">
        {GateCheckOption[GateCheckIn.THREE].label}
      </Typography>
    );
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">Số vé</TableCell>
              <TableCell align="left">Tên sự kiện</TableCell>
              <TableCell align="right">Ngày sử dụng</TableCell>
              <TableCell align="right">Loại vé</TableCell>
              <TableCell align="left">Cổng check - in</TableCell>
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.ticketNumber}</TableCell>
                <TableCell align="left">{row.nameEvent}</TableCell>
                <TableCell align="right">{row.dateUse}</TableCell>
                <TableCell align="right">{row.ticketType}</TableCell>
                <TableCell align="left">
                  {renderGateCheck(row.gateCheckIn)}
                </TableCell>
                <TableCell align="left">{renderStatus(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Paginations count={count} />
    </>
  );
};

export default Tables;
