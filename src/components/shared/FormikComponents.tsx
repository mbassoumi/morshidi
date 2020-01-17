import React from 'react';
import {OptionTypeBase} from 'react-select';


import {ErrorMessage, Field, useField} from 'formik';
import classNames from 'classnames';
import {ReactSelect} from './ReactSelect';
import DatePicker from './DatePicker';
import {ReactDatePickerProps} from 'react-datepicker';
import {CheckboxFieldProps, InputFieldProps, SelectFieldProps, TextAreaFieldProps} from './types';


const InputField = ({label, className, ...props}: InputFieldProps) => {


    const [, meta] = useField(props);
    const errors = meta.touched && meta.error;
    const classes = classNames(
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        {
            'border-red-500': errors,
            'border-gray-500': !errors,
            'bg-gray-400': props.disabled,
        },
    );

    const divStyle = classNames('field-container px-4', className, {
        'pb-4': label,
        'py-2': !label,

    });

    return (
        <div className={divStyle}>
            {label && <label htmlFor={props.id} className='text-sm block font-bold  pb-2'>{label} </label>}
            <Field name={props.name}
                   {...props}
                   className={classes}/>

            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};

const TextAreaField = ({label, ...props}: TextAreaFieldProps) => {


    const [, meta] = useField(props);
    const errors = meta.touched && meta.error;
    const classes = classNames(
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        {'border-red-500': errors},
        {'border-gray-500': !errors}
    );

    const divStyle = classNames('field-container px-4 pb-4', props.className);

    return (
        <div className={divStyle}>
            <label htmlFor={props.id} className='text-sm block font-bold  pb-2'>{label} </label>
            <Field as="textarea" name={props.name}
                   {...props}
                   className={classes}/>

            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};


const SelectField = (props: SelectFieldProps) => {
    const [, meta] = useField(props);
    const errors = meta.touched && meta.error;
    const divStyle = classNames('field-container px-4 pb-4', props.className);

    const classes = classNames(
        'shadow appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
    );

    return (

        <div className={divStyle}>
            <label htmlFor={props.id} className='text-sm block font-bold  pb-2'>{props.label} </label>

            <Field component={FormikReactSelect} {...props} error={errors} className={classes}/>
            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};

const FormikReactSelect = ({field, form, error, ...props}: any) => {

    let value: any;
    let onChange: any;
    if (props.isMulti) {
        value = field.value ? field.value.map((value: string) => {
            let mappedValue = props.options.find((option: OptionTypeBase) => option.value === value);
            if (!mappedValue) {
                mappedValue = {label: value, value: value, __isNew__: true};
            }
            return mappedValue;
        }) : [];


        onChange = (options: OptionTypeBase) => {
            const newValue = options === null ? '' : options.map((option: OptionTypeBase) => {
                return option.value;
            });
            form.setFieldValue(
                field.name,
                newValue
            );
        };

    } else {
        value = props.options.find((option: OptionTypeBase) => {
            return option.value === field.value;
        });
        if (field.value && !value) {
            value = {label: field.value, value: field.value, __isNew__: true};
        }
        onChange = (option: OptionTypeBase) => {
            form.setFieldValue(field.name, option ? option.value : '');
        };
    }

    return (
        <ReactSelect
            {...props}
            name={field.name}
            value={value ?? (props.isMulti ? [] : '')}
            error={error}
            onChange={onChange}
            onBlur={field.onBlur}
        />
    );
};

const DatePickerField = (props: ReactDatePickerProps & { name: string, label?: string, placeholder: string }) => {
    const [, meta] = useField(props);
    const errors = meta.touched && meta.error;
    const divStyle = classNames('field-container px-4', props.className,
        {
            'pb-4': props.label,
            'py-2': !props.label,
        });


    const classes = classNames(
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
        {
            'border-red-500': errors,
            'border-gray-500': !errors,
            'bg-gray-400': props.disabled,
        }
    );

    return (

        <div className={divStyle}>
            {props.label && <label htmlFor={props.id} className='text-sm block font-bold  pb-2'>{props.label} </label>}

            <Field component={FormikDatePicker} {...props} error={errors} className={classes}/>
            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};

DatePickerField.defaultProps = {
    onChange: () => {
        console.log('onChange');
    }
};

const FormikDatePicker = ({field, form, error, ...props}: any) => {
    return (
        <DatePicker
            placeholderText={props.placeholder}
            dateFormat="dd/MM/yyyy"
            {...props}
            name={field.name}
            selected={field.value}
            onChange={date => {
                form.setFieldValue(field.name, date ?? '');
            }}
        />


    );
};


const CheckboxField = ({children, ...props}: CheckboxFieldProps) => {
    // We need to tell useField what type of input this is
    // since React treats radios and checkboxes differently
    // than inputs/select/textarea.
    const [field, meta] = useField({...props, type: 'checkbox'});
    const errors = meta.touched && meta.error;
    const classes = classNames(
        'shadow   rounded mr-3  py-2 px-3 focus:outline-none focus:shadow-outline cursor-pointer',
        {'border-red-500': errors},
        {'border-gray-500': !errors}
    );

    return (
        <div className='field-container px-4'>
            <label className="checkbox">
                {
                    //@ts-ignore
                    <input type="checkbox" {...field} {...props} className={classes}/>
                }
                {children}
            </label>
            <div className="text-red-500 text-xs italic">
                <ErrorMessage name={props.name}/>
            </div>
        </div>
    );
};

const StyledButton = ({className, ...props}: any) => {

    const style = classNames(
        'bg-gray-800 hover:bg-gray-600 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline',
        className
    );

    return (
        <button
            className={style}
            {...props}
        >
            {props.children}
        </button>
    );
};

export {InputField, TextAreaField, SelectField, DatePickerField, CheckboxField, StyledButton};
