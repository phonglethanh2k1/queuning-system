import { Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import CheckboxGroupField from 'components/form/controller/CheckboxGroupField';
import DateField from 'components/form/controller/DateField';
import RadioGroupField from 'components/form/controller/RadioGroupField';
import { Icon } from 'components/icons';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { GateCheckIn, GateCheckOption, TicketStatus, TicketStatusOption } from 'types/ticket';
import * as yup from 'yup';

export type FilterFormType = {
  dateUse: string;
  ticketReleaseDate: string;
  status: string;
  check: number[];
};
const validation = yup.object({});

type Props = {
  handleGetValue(values: FilterFormType): void;
};

const DialogTicket = (props: Props): JSX.Element => {
  const { handleGetValue } = props;
  const [open, setOpen] = useState(false);
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<FilterFormType>({
    resolver,
    defaultValues: {
      dateUse: '',
      ticketReleaseDate: '',
      status: TicketStatus.ALL,
      check: [1],
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (values: FilterFormType) => {
    handleGetValue(values);
    handleClose();
  };

  return (
    <Box>
      <Button
        variant="outlined"
        size="medium"
        startIcon={<Icon name="fifilter" />}
        onClick={handleClickOpen}
        sx={{
          mr: ' 10px',
          padding: '10px 22px',
        }}
      >
        Lọc vé
      </Button>

      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle align="center">
          <Typography variant="h3">Lọc vé</Typography>
        </DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
              <Stack direction="row" spacing={2}>
                <DateField name="dateUse" label="Từ ngày" placeholder="dd/mm/yy" />
                <DateField name="ticketReleaseDate" label="Đến ngày" placeholder="dd/mm/yy" />
              </Stack>
              <RadioGroupField
                label="Tình trạng sử dụng"
                name="status"
                row
                options={[
                  { value: TicketStatus.ALL, label: TicketStatusOption[TicketStatus.ALL].label },
                  { value: TicketStatus.USED, label: TicketStatusOption[TicketStatus.USED].label },
                  { value: TicketStatus.NOT_USED, label: TicketStatusOption[TicketStatus.NOT_USED].label },
                  { value: TicketStatus.EXPIRED, label: TicketStatusOption[TicketStatus.EXPIRED].label },
                ]}
                getItemLabel={(item) => item.label}
                getItemValue={(item) => item.value}
              />

              <CheckboxGroupField
                name="check"
                row
                label="Cổng Check - in"
                options={[
                  { value: GateCheckIn.ALL, label: GateCheckOption[GateCheckIn.ALL].label },
                  { value: GateCheckIn.ONE, label: GateCheckOption[GateCheckIn.ONE].label },
                  { value: GateCheckIn.TWO, label: GateCheckOption[GateCheckIn.TWO].label },
                  { value: GateCheckIn.THREE, label: GateCheckOption[GateCheckIn.THREE].label },
                  { value: GateCheckIn.FOUR, label: GateCheckOption[GateCheckIn.FOUR].label },
                  { value: GateCheckIn.FIVE, label: GateCheckOption[GateCheckIn.FIVE].label },
                ]}
                getItemLabel={(item) => item.label}
                getItemValue={(item) => item.value}
              />
              <Box sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="outlined" size="large">
                  Lọc
                </Button>
              </Box>
            </Box>
          </FormProvider>
        </DialogContent>
      </Dialog>
      <Button variant="outlined" size="medium">
        Xuất file(.csv)
      </Button>
    </Box>
  );
};
export default DialogTicket;
