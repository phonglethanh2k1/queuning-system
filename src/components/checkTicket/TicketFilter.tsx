import React, { useCallback } from 'react';
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import AutoComplete from 'components/form/AutoComplete';
import DateField from 'components/form/controller/DateField';
import useYupValidationResolver from 'helpers/useYupValidationResolver';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import RadioGroupField from 'components/form/controller/RadioGroupField';
import { CheckTicketStatus, CheckTicketStatusOption } from 'types/checkTicket';
import AutoCompleteField from 'components/form/controller/AutoCompleteField';

export type FilterFormType = {
  fromDate: string;
  toDate: string;
  status: CheckTicketStatus;
  check: number[];
};
const validation = yup.object({});
type Props = {
  handleFilter(values: FilterFormType): void;
};
const TicketFilter = (props: Props): JSX.Element => {
  const { handleFilter } = props;
  const resolver = useYupValidationResolver(validation);
  const methods = useForm<FilterFormType>({
    resolver,
    defaultValues: {
      fromDate: '',
      toDate: '',
      status: CheckTicketStatus.ALL,
      check: [1],
    },
  });
  const handleSubmit = useCallback((values: FilterFormType) => {
    handleFilter(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box sx={{ padding: '14px', height: '100vh' }}>
      <Typography variant="h4" mb={3}>
        Lọc vé
      </Typography>
      <FormProvider {...methods}>
        <Box component="form" noValidate onSubmit={methods.handleSubmit(handleSubmit)}>
          <AutoCompleteField
            name="options"
            options={[
              { id: 1, label: 'Hội chợ triển lãm tiêu dùng 2021' },
              { id: 2, label: 'Hội chợ triển lãm tiêu dùng 2021 ' },
              { id: 3, label: 'Hội chợ triển lãm tiêu dùng 2021 ' },
              { id: 4, label: 'Hội chợ triển lãm tiêu dùng 2021 ' },
            ]}
            getItemLabel={(item) => item.label}
            getItemValue={(item) => item.id}
            size="small"
            fullWidth
            value={{ id: 1, label: 'Hội chợ triển lãm tiêu dùng 2021' }}
          />
          <Box>
            <RadioGroupField
              label="Tình trạng đối soát"
              name="status"
              row
              options={[
                { value: CheckTicketStatus.ALL, label: CheckTicketStatusOption[CheckTicketStatus.ALL].label },
                { value: CheckTicketStatus.CHECKED, label: CheckTicketStatusOption[CheckTicketStatus.CHECKED].label },
                {
                  value: CheckTicketStatus.UN_CHECKED,
                  label: CheckTicketStatusOption[CheckTicketStatus.UN_CHECKED].label,
                },
              ]}
              getItemLabel={(item) => item.label}
              getItemValue={(item) => item.value}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            <Typography variant="body1">Loại vé</Typography>
            <Typography variant="body1">Vé cổng</Typography>
          </Box>

          <Stack direction="column" spacing={2}>
            <DateField name="fromDate" label="Từ ngày" placeholder="dd/mm/yy" />
            <DateField name="toDate" label="Đến ngày" placeholder="dd/mm/yy" />
          </Stack>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button type="submit" variant="outlined" size="large" sx={{ textAlign: 'center' }}>
              Lọc
            </Button>
          </Box>
        </Box>
      </FormProvider>
    </Box>
  );
};
export default TicketFilter;
