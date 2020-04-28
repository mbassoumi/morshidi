import React from 'react';
import {cities, fields, keywords, levels} from '../../data';
import CourseForm from './CourseForm';
import {RouteComponentProps} from 'react-router-dom';
import {Course} from './types';
import COURSES from '../../data/courses';

const EditCoursePage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const courseId = parseInt(match.params.id);

    //@ts-ignore
    const course: Course = COURSES.find(item => item.id === courseId);


    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <CourseForm defaultValues={course} serverErrors={{}} onSubmit={onSubmit}
                    cities={cities} fields={fields} keywords={keywords} levels={levels}/>
    )
};

export default EditCoursePage;