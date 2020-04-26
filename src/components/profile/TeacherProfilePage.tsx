import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import TEACHERS from '../../data/teachers';
import TeacherProfile from '../user/teacher/TeacherProfile';
import {Teacher} from '../user/teacher/types';
import NotFoundException from '../shared/NotFoundException';

const TeacherProfilePage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const id = match.params.id;

    //@ts-ignore
    const teacher: Teacher | undefined = TEACHERS.find(item => item.user_account.id === id);

    return (
        <div>
            {
                teacher ?
                    <TeacherProfile teacher={teacher}/>
                    :
                    <NotFoundException/>
            }
        </div>
    );
};


export default TeacherProfilePage;