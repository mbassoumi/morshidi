import React, {SyntheticEvent} from 'react';
import {ReactSelect, ReactSelectType} from './shared/ReactSelect';



const options = [
    {value: 'option 1', label: 'Option 1'},
    {value: 'option 2', label: 'Option 2'},
    {value: 'option 3', label: 'Option 3'},
    {value: 'option 4', label: 'Option 4'}
];
const TestComponent = () => {

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        // setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        // }, 400);
    };


    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="px-4 py-4">
                    <ReactSelect
                        type={ReactSelectType.SELECT}
                        options={options}
                        name='mySelect'
                        isMulti={true}
                        placeholder="Select hahahah .."
                        animated={true}
                        error={false}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TestComponent;

