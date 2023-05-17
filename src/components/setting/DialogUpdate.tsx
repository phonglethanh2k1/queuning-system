import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Checkbox,
  FormGroup,
  TableCell,
  Stack,
  Grid,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { FormProvider, useForm } from 'react-hook-form';
import TextField from 'components/form/controller/TextField';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import * as yup from 'yup';
import DateField from 'components/form/controller/DateField';
import { SettingStatus, SettingStatusOption } from 'types/setting';
import TimeField from 'components/form/controller/TimeField';
import { doc, getDoc } from 'firebase/firestore';
import { firebaseDatabase } from 'firebaseApp/config';
import AutoCompleteField from 'components/form/controller/AutoCompleteField';

export type UpdateFormType = {
  eventCode: string;
  nameTicket: string;
  date: string;
  hourUse: string;
  expirationDate: string;
  expirationTime: string;
  priceTicket: string;
  comboTicket: string;
  numberTicket: string;
  status: { id: string; label: string };
};

const validation = yup.object({});

const DialogUpdate = (props: { id: string; handleUpdate(values?: UpdateFormType): void }) => {
  const { id, handleUpdate } = props;
  const [open, setOpen] = useState(false);
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<UpdateFormType>({
    resolver,
    defaultValues: {
      eventCode: '',
      nameTicket: '',
      date: '',
      hourUse: '',
      expirationDate: '',
      expirationTime: '',
      priceTicket: '',
      comboTicket: '',
      numberTicket: '',
      status: { id: SettingStatus.IS_APPLYING, label: SettingStatusOption[SettingStatus.IS_APPLYING].label },
    },
  });

  const getData = useCallback(async () => {
    const docRef = doc(firebaseDatabase, 'setting', id);

    const docSnap = await getDoc(docRef);

    const data = docSnap.data();

    methods.setValue('eventCode', data?.eventCode);
    methods.setValue('nameTicket', data?.nameTicket);
    methods.setValue('date', data?.date);
    methods.setValue('hourUse', data?.hourUse);
    methods.setValue('expirationDate', data?.expirationDate);
    methods.setValue('expirationTime', data?.expirationTime);
    methods.setValue('priceTicket', data?.priceTicket);
    methods.setValue('comboTicket', data?.comboTicket);
    methods.setValue('numberTicket', data?.numberTicket);
    methods.setValue('status', data?.status);
  }, [id]);

  const handleClickOpen = () => {
    getData();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (values?: UpdateFormType) => {
    handleUpdate(values);
    handleClose();
  };

  return (
    <>
      <TableCell
        align="left"
        sx={{
          color: 'common.white',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button variant="text" onClick={handleClickOpen} startIcon={<BorderColorIcon />}>
          <Typography component="span" color="primary.main">
            Cập nhật
          </Typography>
        </Button>
      </TableCell>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle align="center">
          <Typography variant="h3">Cập nhật thông tin gói vé</Typography>
        </DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
              <Grid container spacing={2} sx={{ width: 1 }} mb={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="eventCode"
                    label="Mã sự kiện"
                    sx={{
                      position: 'relative',
                      ':after': {
                        position: 'absolute',
                        content: '"*"',
                        color: 'error.dark',
                        left: '90px',
                        top: '-30px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="nameTicket" label="Tên sự kiện" />
                </Grid>
              </Grid>

              <Grid container spacing={2} mb={2}>
                <Grid item xs={6} sm={6}>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <DateField name="date" label="Ngày sử dụng" placeholder="dd/mm/yy" sx={{ mr: 1 }} />
                    </Grid>
                    <Grid item xs={6} mt={4}>
                      <TimeField name="hourUse" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Stack direction="row">
                    <DateField name="expirationDate" placeholder="dd/mm/yy" label="Ngày hết hạn" sx={{ mr: 1 }} />
                    <Box mt={4} ml={1}>
                      <TimeField name="expirationTime" />
                    </Box>
                  </Stack>
                </Grid>
              </Grid>

              <Box sx={{ marginBottom: '12px' }}>
                <Typography variant="h6">Giá vé áp dụng </Typography>
                <FormGroup>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Vé lẻ (vnđ/vé) với giá" />
                    <Box px={1}>
                      <TextField name="priceTicket" placeholder="Giá vé" />
                    </Box>
                    <Typography>/ Vé</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FormControlLabel control={<Checkbox />} label="Combo vé với giá" />
                    <Box px={1}>
                      <TextField name="comboTicket" placeholder="Giá vé" />
                    </Box>
                    <Typography px={1} display="flex">
                      /
                    </Typography>
                    <Box sx={{ px: 1, width: '12%' }}>
                      <TextField name="numberTicket" placeholder="Giá vé" />
                    </Box>
                    <Typography display="flex" alignItems="center">
                      / Vé
                    </Typography>
                  </Box>
                </FormGroup>
              </Box>
              <Box sx={{ marginBottom: '12px' }}>
                <Typography variant="h6">Tình trạng</Typography>
                <Box sx={{ width: '25%' }}>
                  <AutoCompleteField
                    name="status"
                    options={[
                      { id: SettingStatus.IS_APPLYING, label: SettingStatusOption[SettingStatus.IS_APPLYING].label },
                      { id: SettingStatus.TURN_OFF, label: SettingStatusOption[SettingStatus.TURN_OFF].label },
                    ]}
                    getItemLabel={(item: any) => item.label}
                    getItemValue={(item: any) => item.id}
                    size="small"
                    fullWidth
                  />
                </Box>
              </Box>
              <Box sx={{ marginBottom: '12px' }}>
                <Typography
                  variant="h6"
                  fontStyle="italic"
                  padding="10px"
                  fontWeight="300"
                  sx={{
                    position: 'relative',
                    ':before': {
                      position: 'absolute',
                      content: '"*"',
                      color: 'error.dark',
                      left: '0',
                    },
                  }}
                >
                  là thông tin bắt buộc
                </Typography>
                <DialogActions sx={{ justifyContent: 'center' }}>
                  <Button onClick={handleClose} variant="outlined" size="large">
                    Hủy
                  </Button>
                  <Button onClick={handleClose} variant="contained" size="large" type="submit">
                    lưu
                  </Button>
                </DialogActions>
              </Box>
            </Box>
          </FormProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default DialogUpdate;
