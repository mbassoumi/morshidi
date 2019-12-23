import React from 'react';
import * as Yup from 'yup';
import {CourseFormProps} from './types';
import {FieldArray, Form, Formik} from 'formik';
import {CheckboxField, InputField, SelectField, StyledButton, TextAreaField} from '../shared/FormikComponents';
import {ReactSelectType} from '../shared/ReactSelect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';


const validate = Yup.object({
    courseName: Yup.string()
        .required('Required'),
    fields: Yup.array()
        .of(Yup.string())
        .required('Required'),
    levels: Yup.array()
        .of(Yup.string())
        .required('Required'),
    keywords: Yup.array()
        .of(Yup.string())
        .required('Required'),
    description: Yup.string()
        .required('Required'),
    requirements: Yup.array()
        .of(
            Yup.string()
                .min(1, 'Shouldn\'t be empty!')
                .required('Required')
        )
        .required('Required'),
    isOnline: Yup.boolean(),
    city: Yup.string()
        .when('isOnline', {
            is: false,
            then: Yup.string().required('Required'),
        }),
    physicalAddress: Yup.string()
        .when('isOnline', {
            is: false,
            then: Yup.string().required('Required'),
        }),
    minStudentPerClass: Yup.number()
        .min(1, 'wrong min value')
        .max(Yup.ref('maxStudentPerClass'), 'min value can\'t be larger than max value')
        .required('Required'),
    maxStudentPerClass: Yup.number()
        .min(Yup.ref('minStudentPerClass'), 'max value can\'t be less than min value')
        .required('Required'),
    pricePerStudent: Yup.number()
        .min(0, 'can\'t be negative')
        .required('Required'),
    studentReferralIncentive: Yup.number()
        .min(0, 'can\'t be negative')
        .required('Required'),
});

const CourseForm = ({defaultValues, serverErrors, onSubmit, keywords, fields, cities, levels}: CourseFormProps) => {

    const initialValues = {
        courseName: '',
        fields: '',
        levels: '',
        keywords: '',
        description: '',
        requirements: [
            ''
        ],
        isOnline: false,
        city: '',
        physicalAddress: '',
        minStudentPerClass: '',
        maxStudentPerClass: '',
        pricePerStudent: '',
        studentReferralIncentive: '',
    };
    const combinedInitialValues = Object.assign(initialValues, defaultValues);

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
                                className="w-full sm:w-1/2"
                                label='COURSE NAME'
                                id='courseName'
                                name='courseName'
                                type='text'
                                placeholder='enter course name'
                            />
                            <SelectField
                                className="w-full sm:w-1/2"
                                label='FIELDS'
                                id='fields'
                                name='fields'
                                type={ReactSelectType.CREATABLE_SELECT}
                                isMulti={true}
                                options={fields}
                                placeholder='enter your last name'
                            />
                        </div>
                        <div className="flex flex-wrap">
                            <SelectField
                                className="w-full sm:w-1/2"
                                label='TARGET LEVELS'
                                id='levels'
                                name='levels'
                                type={ReactSelectType.CREATABLE_SELECT}
                                isMulti={true}
                                options={levels}
                                placeholder='enter course target levels'
                            />
                            <SelectField
                                className="w-full sm:w-1/2"
                                label='SEARCH KEYWORDS'
                                id='keywords'
                                name='keywords'
                                type={ReactSelectType.CREATABLE_SELECT}
                                isMulti={true}
                                options={keywords}
                                placeholder='enter some keywords for search'
                            />
                        </div>

                        <div>
                            <TextAreaField
                                className="w-full"
                                rows={5}
                                label='DESCRIPTION'
                                id='description'
                                name='description'
                                placeholder='enter a brief description about the course'
                            />
                        </div>

                        <div className="px-4">
                            <div>
                                <FieldArray
                                    name="requirements"
                                    render={arrayHelpers => {
                                        return (
                                            <div>
                                                <label
                                                    className='text-sm block font-bold  pb-2'>REQUIREMENTS</label>
                                                {values.requirements && values.requirements.length > 0 ? (
                                                    values.requirements.map((requirement: string, index: number) => (
                                                        <div key={index} className="flex items-center">
                                                            <button
                                                                disabled={values.requirements.length === 1}
                                                                type="button"
                                                                className={classNames('focus:outline-none', {'cursor-not-allowed': values.requirements.length === 1})}
                                                                onClick={() => arrayHelpers.remove(index)} // remove a requirement from the list
                                                            >
                                                                <FontAwesomeIcon icon={faTrash} size="lg"
                                                                                 className={classNames('hover:text-red-300', {
                                                                                     'text-red-300': values.requirements.length === 1,
                                                                                     'text-red-500': values.requirements.length !== 1
                                                                                 })}/>
                                                            </button>
                                                            <InputField
                                                                className="w-full sm:w-2/3"
                                                                id={`requirements.${index}`}
                                                                name={`requirements.${index}`}
                                                                type='text'
                                                                placeholder='enter a new requirement'
                                                            />
                                                            {(index + 1 === values.requirements.length) && <button
                                                                type="button"
                                                                className="focus:outline-none"
                                                                onClick={() => arrayHelpers.insert(index + 1, '')} // insert an empty string at a position
                                                            >
                                                                <FontAwesomeIcon icon={faPlusSquare} size="lg"
                                                                                 className="text-green-500 hover:text-green-300"/>
                                                            </button>}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <button type="button" onClick={() => arrayHelpers.push('')}>
                                                        {/* show this when user has removed all requirement from the list */}
                                                        Add a Requirement
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    }}
                                />
                            </div>

                        </div>
                        <div className="p-4 ">
                            <label className='text-sm block font-bold'>DEAFULT CLASS SETTINGS</label>
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
                                                <div className="flex flex-wrap">
                                                    <div className="w-full sm:w-1/2 lg:w-1/3">
                                                        <SelectField
                                                            className="w-full"
                                                            label='CITY'
                                                            id='city'
                                                            name='city'
                                                            type={ReactSelectType.SELECT}
                                                            options={levels}
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
                                    <label className='text-sm block font-bold  pb-2  sm:w-1/5'>STUDENTS PER
                                        CLASS</label>
                                    <div className="block sm:flex sm:ml-4 items-center">
                                        <InputField
                                            label="MIN"
                                            id="minStudentPerClass"
                                            name="minStudentPerClass"
                                            type='number'
                                            placeholder='MIN'
                                        />
                                        <InputField
                                            label="MAX"
                                            id="maxStudentPerClass"
                                            name="maxStudentPerClass"
                                            type='number'
                                            placeholder='MIN'
                                        />
                                    </div>
                                </div>

                                <div className="block sm:flex items-center">
                                    <label className='text-sm block font-bold  pb-2  sm:w-1/5'>PRICE PER STUDENT</label>
                                    <div className="flex sm:ml-4 items-center">
                                        <InputField
                                            id="pricePerStudent"
                                            name="pricePerStudent"
                                            type='number'
                                            placeholder='price per student'
                                        />
                                        <span>NIS</span>
                                    </div>
                                </div>

                                <div className="block sm:flex items-center">
                                    <label className='text-sm block font-bold  pb-2  sm:w-1/5'>STUDENT REFERRAL
                                        INCENTIVE</label>
                                    <div className="flex sm:ml-4 items-center">
                                        <InputField
                                            id="studentReferralIncentive"
                                            name="studentReferralIncentive"
                                            type='number'
                                            placeholder='student referral incentive'
                                        />
                                        <span>NIS</span>
                                    </div>
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

export default CourseForm;