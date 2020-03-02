import React from 'react';
import * as Yup from 'yup';
import {ClassFormProps} from './types';
import {Form, Formik} from 'formik';
import {CheckboxField, DatePickerField, InputField, SelectField, StyledButton} from '../shared/FormikComponents';
import {ReactSelectType} from '../shared/ReactSelect';

const partialScheduleValidate = {
    on: Yup.boolean()
        .required('Required'),
    from: Yup.date()
        .when('on', {
            is: true,
            then: Yup.date()
                .max(Yup.ref('to'), 'invalid interval')
                .required('Required'),
        }),
    to: Yup.date()
        .when('on', {
            is: true,
            then: Yup.date()
                .min(Yup.ref('from'), 'invalid interval')
                .required('Required'),
        }),
};

const partialDefaultClassSetting = {
    minStudentPerClass: Yup.number()
        .min(1, 'can\'t be empty class')
        .max(Yup.ref('maxStudentPerClass'), 'can\'t be grater than max value')
        .required('Required'),
    maxStudentPerClass: Yup.number()
        .min(Yup.ref('minStudentPerClass'), 'can\'t be less than min value')
        .required('Required'),
    pricePerStudent: Yup.number()
        .min(0, 'can\'t be negative')
        .required('Required')
};

const validate = Yup.object({
    classNickname: Yup.string()
        .required('Required'),
    startDate: Yup.date()
        .required('Required')
        .min(new Date(), 'can\'t be in the past')
        .max(Yup.ref('endDate'), 'start date can\'t be grater than end date'),
    endDate: Yup.date()
        .required('Required')
        .min(Yup.ref('startDate'), 'end date can\'t be less than end date'),
    isOnline: Yup.boolean()
        .required('Required'),
    city: Yup.string()
        .when('isOnline', {
            is: false,
            then: Yup.string()
                .required('Required'),
        }),
    physicalAddress: Yup.string()
        .when('isOnline', {
            is: false,
            then: Yup.string()
                .required('Required'),
        }),
    schedule: Yup.object().shape({
        saturday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
        sunday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
        monday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
        tuesday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
        wednesday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
        thursday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
        friday: Yup.object()
            .shape(partialScheduleValidate)
            .required('Required'),
    }).required('Required'),
    online: Yup.object()
        .when('isOnline', {
            is: true,
            then: Yup.object()
                .shape(partialDefaultClassSetting)
        }),
    physical: Yup.object()
        .when('isOnline', {
            is: false,
            then: Yup.object()
                .shape(partialDefaultClassSetting)
        }),
    referralIncentive: Yup.number()
        .min(0, 'can\'t be negative')
        .required('Required'),
});

const ClassForm = ({defaultValues, serverErrors, onSubmit, courseName, keywords, fields, cities, levels}: ClassFormProps) => {

    const initialValues = {
        classNickname: '',
        startDate: '',
        endDate: '',
        schedule: {
            saturday: {
                on: false,
                from: '',
                to: ''
            },
            sunday: {
                on: false,
                from: '',
                to: ''
            },
            monday: {
                on: false,
                from: '',
                to: ''
            },
            tuesday: {
                on: false,
                from: '',
                to: ''
            },
            wednesday: {
                on: false,
                from: '',
                to: ''
            },
            thursday: {
                on: false,
                from: '',
                to: ''
            },
            friday: {
                on: false,
                from: '',
                to: ''
            },
        },
        isOnline: false,
        city: '',
        physicalAddress: '',
        online: {
            minStudentPerClass: '',
            maxStudentPerClass: '',
            pricePerStudent: '',
        },
        physical: {
            minStudentPerClass: '',
            maxStudentPerClass: '',
            pricePerStudent: '',
        },
        referralIncentive: ''
    };
    const combinedInitialValues = Object.assign(initialValues, defaultValues);

    const scheduler = (values: any) => Object.keys(initialValues.schedule).map(key => {

        return (
            <div className="flex flex-wrap items-center">
                <label className="capitalize w-32" htmlFor={`schedule.${key}.on`}>{key}</label>

                <CheckboxField
                    id={`schedule.${key}.on`}
                    name={`schedule.${key}.on`}
                />
                <div className="flex flex-wrap items-center">
                    <DatePickerField
                        selected={values.schedule[key].from}
                        isClearable={values.schedule[key].on}
                        className="w-48"
                        id={`schedule.${key}.from`}
                        name={`schedule.${key}.from`}
                        placeholder='from time'
                        disabled={!values.schedule[key].on}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />
                    <DatePickerField
                        selected={values.schedule[key].to}
                        isClearable={values.schedule[key].on}
                        className="w-48"
                        id={`schedule.${key}.to`}
                        name={`schedule.${key}.to`}
                        placeholder='to time'
                        peekNextMonth={false}
                        showMonthDropdown={false}
                        showYearDropdown={false}
                        disabled={!values.schedule[key].on}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                    />

                </div>
            </div>
        );
    });

    return (
        <Formik
            initialValues={combinedInitialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
            render={({values}) => {
                return (
                    <Form className="px-8 py-8 py-8">

                        <div className="flex flex-wrap">
                            <InputField
                                value={courseName}
                                className="w-full sm:w-1/2"
                                disabled={true}
                                label='COURSE NAME'
                                id='courseName'
                                name='courseName'
                                type='text'
                                placeholder='enter course name'
                            />
                            <InputField
                                className="w-full sm:w-1/2"
                                label='CLASS NICKNAME'
                                id='classNickname'
                                name='classNickname'
                                type='text'
                                placeholder='enter class nickname'
                            />
                        </div>
                        <div className="flex flex-wrap">
                            <DatePickerField
                                selected={values.startDate}
                                isClearable={true}
                                className="w-full sm:w-1/2"
                                label='START DATE'
                                id='startDate'
                                name='startDate'
                                placeholder='enter start date'
                                selectsStart={true}
                                startDate={values.startDate}
                                endDate={values.endDate}
                                minDate={new Date()}
                                maxDate={values.endDate}
                                peekNextMonth={false}
                                showMonthDropdown={false}
                                showYearDropdown={false}
                            />

                            <DatePickerField
                                selected={values.endDate}
                                isClearable={true}
                                className="w-full sm:w-1/2"
                                label='END DATE'
                                id='endDate'
                                name='endDate'
                                placeholder='enter end date'
                                selectsEnd={true}
                                startDate={values.startDate}
                                endDate={values.endDate}
                                minDate={values.startDate}
                                peekNextMonth={false}
                                showMonthDropdown={false}
                                showYearDropdown={false}
                            />

                        </div>

                        <div className="p-4">
                            <label className='text-sm block font-bold  pb-2  sm:w-1/5'>SCHEDULE</label>
                            <div className="p-4">
                                {scheduler(values)}
                            </div>
                        </div>


                        <div className="p-4">

                            <div className="block sm:flex">
                                <label className='text-sm block font-bold  pb-2  sm:w-1/5'>LOCATION</label>

                                <div className="ml-4 w-4/5">
                                    <CheckboxField
                                        id="isOnline"
                                        name="isOnline"
                                    >
                                        Online course
                                    </CheckboxField>
                                    {
                                        !values.isOnline && (
                                            <div className="flex flex-wrap pt-4">
                                                <div className="w-full sm:w-1/2 lg:w-1/3">
                                                    <SelectField
                                                        className="w-full"
                                                        label='CITY'
                                                        id='city'
                                                        name='city'
                                                        type={ReactSelectType.SELECT}
                                                        options={cities}
                                                        placeholder='enter course city'
                                                    />
                                                </div>
                                                <div className="w-full sm:w-1/2 lg:w-2/3">
                                                    <InputField
                                                        className="w-full"
                                                        label="PHYSICAL ADDRESS"
                                                        id="physicalAddress"
                                                        name="physicalAddress"
                                                        type='text'
                                                        placeholder='Physical Address'
                                                    />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            <div className="block sm:flex items-center">
                                <label className='text-sm block font-bold  pb-2  sm:w-1/5'>STUDENT NUMBER</label>
                                <div className="block sm:flex sm:ml-4 items-center">
                                    <InputField
                                        label="MIN"
                                        id={`${values.isOnline ? 'online' : 'physical'}.minStudentPerClass`}
                                        name={`${values.isOnline ? 'online' : 'physical'}.minStudentPerClass`}
                                        type='number'
                                        placeholder='MIN'
                                    />
                                    <InputField
                                        label="MAX"
                                        id={`${values.isOnline ? 'online' : 'physical'}.maxStudentPerClass`}
                                        name={`${values.isOnline ? 'online' : 'physical'}.maxStudentPerClass`}
                                        type='number'
                                        placeholder='MIN'
                                    />
                                </div>
                            </div>

                            <div className="block sm:flex items-center">
                                <label className='text-sm block font-bold  pb-2  sm:w-1/5'>PRICE PER STUDENT</label>
                                <div className="flex sm:ml-4 items-center">
                                    <InputField
                                        id={`${values.isOnline ? 'online' : 'physical'}.pricePerStudent`}
                                        name={`${values.isOnline ? 'online' : 'physical'}.pricePerStudent`}
                                        type='number'
                                        placeholder='price per student'
                                    />
                                    <span>NIS</span>
                                </div>
                            </div>

                            <div className="block sm:flex items-center">
                                <label className='text-sm block font-bold  pb-2  sm:w-1/5'>REFERRAL INCENTIVE</label>
                                <div className="flex sm:ml-4 items-center">
                                    <InputField
                                        id="referralIncentive"
                                        name="referralIncentive"
                                        type='number'
                                        placeholder='student referral incentive'
                                    />
                                    <span>NIS</span>
                                </div>
                            </div>
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
                );
            }

            }

        />

    );
};

export default ClassForm;