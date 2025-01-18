import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DatePickerValueProps {
  onStartDateChange: (newDate: Dayjs | null) => void;
  onEndDateChange: (newDate: Dayjs | null) => void;
}

export default function DatePickerValue({ onStartDateChange, onEndDateChange }: DatePickerValueProps) {
  const [startValue, setStartValue] = React.useState<Dayjs | null>(dayjs());
  const [endValue, setEndValue] = React.useState<Dayjs | null>(dayjs());

  const handleChangeStart = (newValue: Dayjs | null) => {
    setStartValue(newValue);
    onStartDateChange(newValue);
  };

  const handleChangeEnd = (newValue: Dayjs | null) => {
    setEndValue(newValue);
    onEndDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Start Date"
          value={startValue}
          onChange={handleChangeStart}
          className='max-w-[200px]'
        />
        <DatePicker
          label="End Date"
          value={endValue}
          onChange={handleChangeEnd}
          className='max-w-[200px]'   
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
