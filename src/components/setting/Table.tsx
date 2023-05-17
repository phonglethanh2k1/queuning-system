import React, { useCallback, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Button } from '@mui/material';
import { Setting, SettingStatus, SettingStatusOption } from 'types/setting';
import {
  collection,
  getCountFromServer,
  getDocs,
  limit,
  query,
  QueryDocumentSnapshot,
  doc,
  addDoc,
  updateDoc,
} from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import Paginations from './Pagination';
import DialogUpdate from './DialogUpdate';
import DialogAddTicket from './DialogAddTicket';

const Tables = ({ openCreate, onClose }: { openCreate: boolean; onClose(): void }): JSX.Element => {
  const [dataTable, setData] = useState<Setting[]>([]);
  const [count, setCount] = useState<number>(0);
  const getData = useCallback(async () => {
    const equipment = collection(firebaseDatabase, 'setting');
    const queryString = query(equipment, limit(10));

    const snapshot = await getDocs(queryString);

    const coll = collection(firebaseDatabase, 'setting');
    const countSnapshot = await getCountFromServer(coll);
    setCount(countSnapshot.data()?.count);

    const result = snapshot.docs.map((docSnap: QueryDocumentSnapshot<any>) => ({
      ...docSnap.data(),
      id: docSnap.id,
    }));

    setData(result);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  const handleUpdateTable = async (values: any, id: string) => {
    await updateDoc(doc(firebaseDatabase, 'setting', id), {
      ...values,
      eventCode: values.eventCode,
      date: `${new Date(values.date).getDate()}/${new Date(values.date).getMonth()}/${new Date(
        values.date
      ).getFullYear()}`,
      hourUse: `${new Date(values.hourUse).getHours()}:${new Date(values.hourUse).getMinutes()}:${new Date(
        values.hourUse
      ).getSeconds()}`,
      expirationDate: `${new Date(values.date).getDate()}/${new Date(values.date).getMonth()}/${new Date(
        values.date
      ).getFullYear()}`,
      expirationTime: `${new Date(values.hourUse).getHours()}:${new Date(values.hourUse).getMinutes()}:${new Date(
        values.hourUse
      ).getSeconds()}`,
      nameTicket: values.nameTicket,
      status: values.status.id,
    });
    getData();
  };

  const rendenStatus = (status: string) => {
    if (status === SettingStatus.IS_APPLYING) {
      return (
        <Button variant="outlined" size="small" color="success" startIcon={<FiberManualRecordIcon />}>
          {SettingStatusOption[SettingStatus.IS_APPLYING].label}
        </Button>
      );
    }
    return (
      <Button variant="outlined" size="small" color="error" startIcon={<FiberManualRecordIcon />}>
        {SettingStatusOption[SettingStatus.TURN_OFF].label}
      </Button>
    );
  };

  const handleCreate = async (values: any) => {
    await addDoc(collection(firebaseDatabase, 'setting'), {
      ...values,
      date: `${new Date(values.date).getDate()}/${new Date(values.date).getMonth()}/${new Date(
        values.date
      ).getFullYear()}`,
      hourUse: `${new Date(values.hourUse).getHours()}:${new Date(values.hourUse).getMinutes()}:${new Date(
        values.hourUse
      ).getSeconds()}`,
      expirationDate: `${new Date(values.date).getDate()}/${new Date(values.date).getMonth()}/${new Date(
        values.date
      ).getFullYear()}`,
      expirationTime: `${new Date(values.hourUse).getHours()}:${new Date(values.hourUse).getMinutes()}:${new Date(
        values.hourUse
      ).getSeconds()}`,
      status: values.status.id,
    });
    getData();
  };

  return (
    <>
      <DialogAddTicket handleGetdata={(values) => handleCreate(values)} onClose={onClose} open={openCreate} />

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="left">Mã gói</TableCell>
              <TableCell align="left">Tên gói vé</TableCell>
              <TableCell align="left">Ngày áp dụng</TableCell>
              <TableCell align="left">Ngày hết hạn</TableCell>
              <TableCell align="left">Giá vé (VNĐ/Vé)</TableCell>
              <TableCell align="right">Giá vé(VNĐ/Combo)</TableCell>
              <TableCell align="left">Tình trạng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" align="center">
                  {index + 1}
                </TableCell>
                <TableCell align="left">{row.eventCode}</TableCell>
                <TableCell align="left">{row.nameTicket}</TableCell>
                <TableCell align="left">
                  {row.date}
                  <div>{row.hourUse}</div>
                </TableCell>
                <TableCell align="left">
                  {row.expirationDate}
                  <div>{row.expirationTime}</div>
                </TableCell>
                <TableCell align="left">{row.priceTicket} VNĐ</TableCell>
                <TableCell align="right">
                  {row.comboTicket}
                  /VNĐ
                  {row.numberTicket}
                </TableCell>
                <TableCell align="left">{rendenStatus(row.status)}</TableCell>
                <DialogUpdate id={row.id} handleUpdate={(values) => handleUpdateTable(values, row.id)} />
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
