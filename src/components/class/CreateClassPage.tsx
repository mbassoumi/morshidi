import React from 'react';
import ClassForm from './ClassForm';
import CITIES from '../../data/cities';
import FIELDS from '../../data/fields';
import KEYWORDS from '../../data/keywords';
import LEVELS from '../../data/levels';
import {CourseType} from '../course/types';
import COURSES from '../../data/courses';
import {RouteComponentProps} from 'react-router-dom';

const CreateClassPage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const courseId = parseInt(match.params.course_id);

    //@ts-ignore
    const course: CourseType = COURSES.find(item => item.id === courseId);

    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <ClassForm courseName={course.name} defaultValues={{}} serverErrors={{}} onSubmit={onSubmit}
                   cities={CITIES} fields={FIELDS} keywords={KEYWORDS} levels={LEVELS}/>
    )
};

export default CreateClassPage;