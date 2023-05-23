import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';

export default function ResponsiveDatePickers() {
  const [toDate, setToDate] = useState(new Date());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        value={toDate}
        onChange={(newValue: any) => setToDate(newValue)}
        renderInput={(props) => {
          throw new Error('Function not implemented.');
        }}
      />
    </LocalizationProvider>
  );
}
