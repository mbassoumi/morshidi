import React from 'react';
import * as Yup from 'yup';
import {CourseFormProps} from './types';
import {FieldArray, Form, Formik} from 'formik';
import {InputField, SelectField, StyledButton, TextAreaField} from '../shared/FormikComponents';
import {ReactSelectType} from '../shared/ReactSelect';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import DefaultOnlineClassSetting from './partial/DefaultOnlineClassSetting';
import DefaultPhysicalClassSetting from './partial/DefaultPhysicalClassSetting';


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
    city: Yup.string()
        .notRequired(),
    physicalAddress: Yup.string()
        .notRequired(),
    minStudentPerPhysicalClass: Yup.number()
        .min(1, 'wrong min value')
        .max(Yup.ref('maxStudentPerPhysicalClass'), 'min value can\'t be larger than max value')
        .notRequired(),
    maxStudentPerPhysicalClass: Yup.number()
        .min(Yup.ref('minStudentPerPhysicalClass'), 'max value can\'t be less than min value')
        .notRequired(),
    pricePerPhysicalStudent: Yup.number()
        .min(0, 'can\'t be negative')
        .notRequired(),
    minStudentPerOnlineClass: Yup.number()
        .min(1, 'wrong min value')
        .max(Yup.ref('maxStudentPerOnlineClass'), 'min value can\'t be larger than max value')
        .notRequired(),
    maxStudentPerOnlineClass: Yup.number()
        .min(Yup.ref('minStudentPerOnlineClass'), 'max value can\'t be less than min value')
        .notRequired(),
    pricePerOnlineStudent: Yup.number()
        .min(0, 'can\'t be negative')
        .notRequired(),

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
        city: '',
        physicalAddress: '',
        minStudentPerPhysicalClass: '',
        maxStudentPerPhysicalClass: '',
        pricePerPhysicalStudent: '',
        minStudentPerOnlineClass: '',
        maxStudentPerOnlineClass: '',
        pricePerOnlineStudent: '',

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
                                isClearable={false}
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
                                isClearable={false}
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
                                isClearable={false}
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

                        <div className="px-4 pb-4">
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

                        <DefaultOnlineClassSetting/>
                        <DefaultPhysicalClassSetting cities={cities} values={values}/>


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