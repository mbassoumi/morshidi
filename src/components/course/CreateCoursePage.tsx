import React from 'react';
import {cities, fields, keywords, levels} from '../../data';
import CourseForm from './CourseForm';

const CreateCoursePage = () => {

    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <CourseForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit}
                    cities={cities} fields={fields} keywords={keywords} levels={levels}/>
    )
};

export default CreateCoursePage;