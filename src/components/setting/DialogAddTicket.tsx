import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from 'components/form/controller/TextField';
import DateField from 'components/form/controller/DateField';
import TimeField from 'components/form/controller/TimeField';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import { SettingStatus, SettingStatusOption } from 'types/setting';
import AutoCompleteField from 'components/form/controller/AutoCompleteField';

const validation = yup.object({});

type Props = {
  open: boolean;
  onClose(): void;
  handleGetdata(values: any): void;
};

export type AddFormType = {
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

const DialogAddTicket = (props: Props) => {
  const { open, onClose, handleGetdata } = props;
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<AddFormType>({
    resolver,
    defaultValues: {
      eventCode: 'ALTTC23434',
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

  const handleSubmit = async (values?: AddFormType) => {
    console.log(values);
    handleGetdata(values);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle align="center">
        <Typography variant="h3">Thêm gói vé</Typography>
      </DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
            <Grid container sx={{ width: 1 }} mb={2}>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  sx={{
                    position: 'relative',
                    ':after': {
                      position: 'absolute',
                      content: '"*"',
                      color: 'error.dark',
                      left: '90px',
                    },
                  }}
                />
                <TextField name="nameTicket" label=" Tên gói vé" />
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
            <Grid>
              <Typography variant="h6">Giá vé áp dụng </Typography>
            </Grid>
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

            <Typography variant="h6">Tình trạng</Typography>
            <Box sx={{ width: '25%' }}>
              <AutoCompleteField
                name="status"
                options={[
                  { id: SettingStatus.IS_APPLYING, label: SettingStatusOption[SettingStatus.IS_APPLYING].label },
                  { id: SettingStatus.TURN_OFF, label: SettingStatusOption[SettingStatus.TURN_OFF].label },
                ]}
                getItemLabel={(item) => item.label}
                getItemValue={(item) => item.id}
                size="small"
                fullWidth
              />
            </Box>

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
              <Button onClick={onClose} variant="outlined" size="large">
                Hủy
              </Button>
              <Button variant="contained" size="large" type="submit" onClick={onClose}>
                lưu
              </Button>
            </DialogActions>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
export default DialogAddTicket;
