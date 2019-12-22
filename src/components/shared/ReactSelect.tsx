import makeAnimated from 'react-select/animated';
import {Props as ReactSelectProps} from 'react-select/src/Select';
import CreatableSelect from 'react-select/creatable';
import Select from 'react-select';
import React from 'react';


interface MyCustomReactSelectProps {
    type: ReactSelectType,
    animated?: boolean,
    error?: boolean
}

export enum ReactSelectType {
    SELECT,
    CREATABLE_SELECT
}

const animatedComponents = makeAnimated();


export const ReactSelect = (props: ReactSelectProps & MyCustomReactSelectProps) => {

    let ReactSelectComponent: any;
    switch (props.type) {
        case ReactSelectType.CREATABLE_SELECT:
            ReactSelectComponent = CreatableSelect;
            break;
        case ReactSelectType.SELECT:
        default:
            ReactSelectComponent = Select;
            break;
    }

    const colourStyles = {
        control: (styles: any) => ({...styles, backgroundColor: 'white', borderColor: props.error ? 'red' : '#A3B0C2',}),
        multiValue: (styles: any, {data}: any) => {
            return {
                ...styles,
                backgroundColor: '#5A67D8',
            };
        },
        multiValueLabel: (styles: any, {data}: any) => ({
            ...styles,
            color: 'white',
            backgroundColor: '#5A67D8',
        }),
        multiValueRemove: (styles: any, {data}: any) => ({
            ...styles,
            backgroundColor: '#5A67D8',
            color: 'white',
            ':hover': {
                backgroundColor: 'red',
            },
        }),
    };

    return (
        <ReactSelectComponent
            {...props}
            styles={colourStyles}
            // defaultValue={props.options}
            components={props.animated ? animatedComponents : undefined}
            // value={options ? options.find(option => option.value === field.value) : ''}
            // onChange={(option: any) => {
            //     form.setFieldValue(field.name, option.value);
            //     console.log('dddd');
            // }}
        />
    );
};