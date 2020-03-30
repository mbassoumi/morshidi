import React from 'react';
import ClassForm from './ClassForm';
import CITIES from '../../data/cities';
import FIELDS from '../../data/fields';
import KEYWORDS from '../../data/keywords';
import LEVELS from '../../data/levels';
import {CourseType} from '../course/types';
import COURSES from '../../data/courses';
import CLASSES from '../../data/classes';
import {RouteComponentProps} from 'react-router-dom';
import {ClassDetails} from './types';

const EditClassPage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const courseId = parseInt(match.params.course_id);
    //@ts-ignore
    // const classId = parseInt(match.params.class_id);


    //@ts-ignore
    const course: CourseType = COURSES.find(item => item.id === courseId);
    //@ts-ignore
    const classDetails: ClassDetails = CLASSES.find(item => item.id === courseId);


    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <ClassForm courseName={course.name} defaultValues={classDetails} serverErrors={{}} onSubmit={onSubmit}
                   cities={CITIES} fields={FIELDS} keywords={KEYWORDS} levels={LEVELS}/>
    )
};

export default EditClassPage;