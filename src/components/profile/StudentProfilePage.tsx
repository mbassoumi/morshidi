import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import STUDENTS from '../../data/students';
import NotFoundException from '../shared/NotFoundException';
import {Student} from "../user/student/types";
import StudentProfile from "../user/student/StudentProfile";

const StudentProfilePage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const id = match.params.id;

    //@ts-ignore
    const student: Student = STUDENTS.find(student => student.user_account.id === id);

    return (
        <div>
            {
                student ?
                    <StudentProfile student={student}/>
                    :
                    <NotFoundException/>
            }
        </div>
    );
};


export default StudentProfilePage;