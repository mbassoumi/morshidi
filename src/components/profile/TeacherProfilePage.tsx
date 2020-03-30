import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import TEACHERS from '../../data/teachers';
import TeacherProfile from '../teacher/TeacherProfile';
import {Teacher} from '../teacher/types';
import NotFoundException from '../shared/NotFoundException';

const TeacherProfilePage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const id = parseInt(match.params.id);

    const teacher: Teacher | undefined = TEACHERS.find(item => item.id === id);

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