import React from 'react';
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import {StudentFormProps} from './types';
import {DatePickerField, InputField, SelectField, StyledButton} from '../shared/FormikComponents';
import {ReactSelectType} from '../shared/ReactSelect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMale, faFemale} from '@fortawesome/free-solid-svg-icons';
import {subYears} from "date-fns";

const CustomOption = ({icon, text}: { icon: any, text: string }) => (
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
        .required('Required'),
    lastName: Yup.string()
        .required('Required'),
    gender: Yup.string()
        .oneOf(['male', 'female'], 'you have to specify your gender')
        .required('Required'),
    dateOfBirth: Yup.date()
        .required('Required'),
    interests: Yup.array()
        .of(Yup.string())
        .required('Required'),
    levels: Yup.array()
        .of(Yup.string())
        .required('Required'),
    city: Yup.string()
        .oneOf(['ramallah', 'al-bireh', 'betonia', 'nablus'])
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    phone1: Yup.string()
        .required('Required'),
    phone2: Yup.string()
        .notRequired(),
});

const StudentForm = ({defaultValues, serverErrors, onSubmit, cities, interests, levels}: StudentFormProps) => {
    const initialValues = {
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        interests: '',
        levels: '',
        city: '',
        email: '',
        phone1: '',
        phone2: '',
    };
    const combinedInitialValues = Object.assign(initialValues, defaultValues);

    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
        >
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
                        // @ts-ignore
                        options={genders}
                        type={ReactSelectType.SELECT}
                        isClearable={true}
                        placeholder='select your gender'
                    />
                    {
                        //@ts-ignore
                        <DatePickerField
                            isClearable={true}
                            className="w-full sm:w-1/2"
                            label='DATE OF BIRTH'
                            id='dateOfBirth'
                            name='dateOfBirth'
                            openToDate={subYears(new Date(), 15)}
                            placeholder='select your birthday'
                        />
                    }

                </div>

                <div className="flex flex-wrap">

                    <SelectField
                        className="w-full sm:w-1/2"
                        label='INTERESTS'
                        id='interests'
                        name='interests'
                        options={interests}
                        type={ReactSelectType.CREATABLE_SELECT}
                        isMulti={true}
                        isClearable={false}
                        placeholder='select your interests'
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

                <div className="flex flex-wrap px-4 pb-4">
                    <StyledButton type='submit' className="px-16 mb-4 mx-auto">
                        Save
                    </StyledButton>

                    <StyledButton type='reset' className="px-16 mb-4 mx-auto">
                        Reset
                    </StyledButton>
                </div>

            </Form>
        </Formik>
    );
};

export default StudentForm;