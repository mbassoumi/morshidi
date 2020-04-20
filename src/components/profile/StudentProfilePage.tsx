import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import STUDENTS from '../../data/students';
import NotFoundException from '../shared/NotFoundException';
import {Student} from "../student/types";
import StudentProfile from "../student/StudentProfile";

const StudentProfilePage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const id = parseInt(match.params.id);

    const student: Student | undefined = STUDENTS.find(item => item.id === id);

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