import React from "react";
import TeacherForm from "./TeacherForm";
import {cities, fields, levels} from "../../../data";
import {RouteComponentProps} from "react-router-dom";
import {Teacher} from "./types";
import TEACHER from "../../../data/teachers";

const EditTeacherPage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const teacherId = parseInt(match.params.id);

    //@ts-ignore
    const teacher: Teacher = TEACHER.find(item => item.id == teacherId);

    console.log('teacher', teacher);

    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };


    return (
        <TeacherForm defaultValues={teacher} serverErrors={{}} onSubmit={onSubmit} cities={cities}
                     fields={fields} levels={levels}/>
    )
};

export default EditTeacherPage;