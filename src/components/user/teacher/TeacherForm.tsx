import React from 'react';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import {InputField, TextAreaField, SelectField, StyledButton, DatePickerField} from '../../shared/formik/FormikComponents';
import {ReactSelectType} from '../../shared/ReactSelect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMale, faFemale} from '@fortawesome/free-solid-svg-icons';
import {subYears} from 'date-fns';
import {showAlertNotification} from '../../../api/alerts/alerts';

const CustomOption = ({icon, text}: { icon: any, text: string }): any => (
    <div className="flex">
        <FontAwesomeIcon icon={icon} size="lg"/>
        <span className="ml-2">{text}</span>
    </div>

);

const genders = [
    {value: 'male', label: <CustomOption icon={faMale} text="Male"/>},
    {value: 'female', label: <CustomOption icon={faFemale} text="Female"/>},
];

const validate = Yup.object({
    firstName: Yup.string()
        .required('First name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    gender: Yup.string()
        .oneOf(['male', 'female'], 'You have to specify your gender')
        .required('Required'),
    dateOfBirth: Yup.date()
        .required('Date of birth is required'),
    fields: Yup.array()
        .of(Yup.string())
        .required('Fields are required'),
    levels: Yup.array()
        .of(Yup.string())
        .required('Levels are required'),
    city: Yup.string()
        .oneOf(['ramallah', 'al-bireh', 'betonia', 'nablus'])
        .required('City is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phone1: Yup.string()
        .required('Phone number #1 is required'),
    phone2: Yup.string()
        .notRequired(),
    bio: Yup.string()
        .required('Bio is required'),
});

interface TeacherFormProps {
    defaultValues: any
    serverErrors: any
    onSubmit: any
    cities: any
    fields: any
    levels: any
}
const TeacherForm = ({defaultValues, serverErrors, onSubmit, cities, fields, levels}: TeacherFormProps) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        fields: '',
        levels: '',
        city: '',
        email: '',
        phone1: '',
        phone2: '',
        bio: ''
    };
    const combinedInitialValues = Object.assign(initialValues, defaultValues);


    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
            validateOnChange={true}
            validateOnBlur={false}
            validateOnMount={true}
        >
            {({errors, isValid}) => {

                return (
                    <Form className="px-8 py-8 py-8">

                        <div className="flex flex-wrap">
                            <InputField
                                className="w-full sm:w-1/2"
                                label='FIRST NAME'
                                id='firstName'
                                name='firstName'
                                type='text'
                                placeholder='enter your first name'
                            />
                            <InputField
                                className="w-full sm:w-1/2"
                                label='LAST NAME'
                                id='lastName'
                                name='lastName'
                                type='text'
                                placeholder='enter your last name'
                            />
                        </div>

                        <div className="flex flex-wrap">
                            <SelectField
                                className="w-full sm:w-1/2"
                                label='GENDER'
                                id='gender'
                                name='gender'
                                //@ts-ignore
                                options={genders}
                                type={ReactSelectType.SELECT}
                                isClearable={true}
                                placeholder='select your gender'
                            />
                            {
                                <DatePickerField
                                    isClearable={true}
                                    className="w-full sm:w-1/2"
                                    label='DATE OF BIRTH'
                                    openToDate={subYears(new Date(), 15)}
                                    id='dateOfBirth'
                                    name='dateOfBirth'
                                    // onChange={() => {console.log('sss')}}
                                    placeholder='select your birthday'
                                />
                            }
                        </div>

                        <div className="flex flex-wrap">

                            <SelectField
                                className="w-full sm:w-1/2"
                                label='FIELDS'
                                id='fields'
                                name='fields'
                                options={fields}
                                type={ReactSelectType.CREATABLE_SELECT}
                                isMulti={true}
                                isClearable={false}
                                placeholder='select your fields'
                            />

                            <SelectField
                                className="w-full sm:w-1/2"
                                label='LEVELS'
                                id='levels'
                                name='levels'
                                options={levels}
                                type={ReactSelectType.CREATABLE_SELECT}
                                isMulti={true}
                                isClearable={false}
                                placeholder='select your levels'
                            />

                        </div>

                        <div className="flex flex-wrap">
                            <SelectField
                                className="w-full sm:w-1/2"
                                label='CITY'
                                id='city'
                                name='city'
                                options={cities}
                                type={ReactSelectType.SELECT}
                                isClearable={true}
                                placeholder='select your city'
                            />
                            <InputField
                                className="w-full sm:w-1/2"
                                label='EMAIL'
                                id='email'
                                name='email'
                                type='text'
                                placeholder='enter your email'
                            />
                        </div>

                        <div className="flex flex-wrap">
                            <InputField
                                className="w-full sm:w-1/2"
                                label='PHONE NUMBER #1'
                                id='phone1'
                                name='phone1'
                                type='text'
                                placeholder='enter your primary phone'
                            />
                            <InputField
                                className="w-full sm:w-1/2"
                                label='PHONE NUMBER #2'
                                id='phone2'
                                name='phone2'
                                type='text'
                                placeholder='enter your secondary phone'
                            />
                        </div>
                        <div>
                            <TextAreaField
                                className="w-full"
                                rows={5}
                                label='BIO'
                                id='bio'
                                name='bio'
                                placeholder='enter a brief biography about yourself'
                            />
                        </div>

                        <div className="flex flex-wrap px-4 pb-4">
                            <StyledButton type='submit' className="px-16 mb-4 mx-auto"
                                          onClick={() => !isValid && showAlertNotification('Validation errors', errors, 'danger')}>
                                Save
                            </StyledButton>

                            <StyledButton type='reset' className="px-16 mb-4 mx-auto">
                                Reset
                            </StyledButton>
                        </div>

                    </Form>
                );
            }}
        </Formik>
    );
};

export default TeacherForm;