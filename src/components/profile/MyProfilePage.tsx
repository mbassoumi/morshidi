import React from 'react';
import {useSelector} from 'react-redux';
import StudentProfile from '../student/StudentProfile';
import TeacherProfile from '../teacher/TeacherProfile';
import {Redirect} from 'react-router-dom';

const MyProfilePage = () => {

    //@ts-ignore
    const user = useSelector(state => state.auth.user);

    console.log('Profile user', user);

    const studentProfile = () => {
        return (
            <StudentProfile student={user}/>
        );
    };

    const teacherProfile = () => {
        return (
            <TeacherProfile teacher={user}/>
        );
    };

    const renderProfile = () => {
        switch (user.__typename) {
            case 'Student':
                return studentProfile();
            case 'Teacher':
                return teacherProfile();
        }
    };


    if (user === undefined) {
        return (
            <Redirect to={{pathname: '/login'}}/>
        );
    }

    return (
        <div>
            {renderProfile()}
        </div>
    );
};


export default MyProfilePage;