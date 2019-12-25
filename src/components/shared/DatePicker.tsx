import React from 'react';
import ReactDatePicker, {ReactDatePickerProps} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = (props: ReactDatePickerProps) => {
    return (
        <ReactDatePicker
            wrapperClassName="w-full"
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            placeholderText="pick a date ..."
            autoComplete="off"
            {...props}
            // customInput={<CustomDatePickerInput/>}
        />
    );
};

// const CustomDatePickerInput = ({value, onClick}: any) => (
//     <button className="w-full block" onClick={onClick}>
//         {value}
//     </button>
// );

export default DatePicker;