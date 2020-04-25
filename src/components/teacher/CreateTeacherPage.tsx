import React from "react";
import {cities, fields, levels} from "../../data";
import TeacherForm from "./TeacherForm";

const CreateTeacherPage = () => {

    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };
    
    return (
        <TeacherForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities}
                     fields={fields} levels={levels}/>
    )
};

export default CreateTeacherPage;