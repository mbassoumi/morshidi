import React from 'react';
import GroupClassForm from './GroupClassForm';
import CITIES from '../../../data/cities';
import FIELDS from '../../../data/fields';
import KEYWORDS from '../../../data/keywords';
import LEVELS from '../../../data/levels';
import COURSES from '../../../data/courses';
import CLASSES from '../../../data/classes';
import {RouteComponentProps} from 'react-router-dom';
import {GroupClass} from './types';
import {Course} from "../../course/types";

const EditGroupClassPage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const courseId = parseInt(match.params.course_id);
    //@ts-ignore
    // const classId = parseInt(match.params.class_id);


    //@ts-ignore
    const course: Course = COURSES.find(item => item.id === courseId);
    //@ts-ignore
    const groupClass: GroupClass = CLASSES.find(item => item.id === courseId);


    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    return (
        <GroupClassForm courseName={course.title} defaultValues={groupClass} serverErrors={{}} onSubmit={onSubmit}
                        cities={CITIES} fields={FIELDS} keywords={KEYWORDS} levels={LEVELS}/>
    )
};

export default EditGroupClassPage;