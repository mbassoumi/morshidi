import React, {SyntheticEvent} from 'react';
// import {ReactSelect, ReactSelectType} from './shared/ReactSelect';
// import DatePicker from './shared/DatePicker';
import {setHours, setMinutes} from 'date-fns';
// import {DatePickerField} from './shared/FormikComponents';
// import ReactDatePicker from 'react-datepicker';




// const options = [
//     {value: 'option 1', label: 'Option 1'},
//     {value: 'option 2', label: 'Option 2'},
//     {value: 'option 3', label: 'Option 3'},
//     {value: 'option 4', label: 'Option 4'}
// ];
const TestComponent = () => {

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        // }, 400);
    };

    // const [startDate, setStartDate] = useState(
    //     setHours(setMinutes(new Date(), 0), 17)
    // );

    console.log(setHours(setMinutes(new Date(), 0), 17));


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="px-4 py-4">
                    {/*<ReactSelect*/}
                    {/*    type={ReactSelectType.SELECT}*/}
                    {/*    options={options}*/}
                    {/*    name='mySelect'*/}
                    {/*    isMulti={true}*/}
                    {/*    placeholder="Select hahahah .."*/}
                    {/*    animated={true}*/}
                    {/*    error={false}*/}
                    {/*/>*/}

                    {/*<DatePicker*/}
                    {/*    selected={startDate}*/}
                    {/*    //@ts-ignore*/}
                    {/*    onChange={date => setStartDate(date)}*/}
                    {/*    showTimeSelect*/}
                    {/*    showTimeSelectOnly*/}
                    {/*    // minTime={setHours(setMinutes(new Date(), 0), 17)}*/}
                    {/*    minTime={startDate}*/}
                    {/*    maxTime={setHours(setMinutes(new Date(), 30), 20)}*/}
                    {/*    dateFormat="h:mm aa"*/}
                    {/*/>*/}


                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TestComponent;

