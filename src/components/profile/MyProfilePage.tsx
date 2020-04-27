import React from 'react';
import {useSelector} from 'react-redux';
import StudentProfile from '../user/student/StudentProfile';
import TeacherProfile from '../user/teacher/TeacherProfile';
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
        if (user.user_account.roles.includes('teacher')){
            return teacherProfile();
        }else if (user.user_account.roles.includes('student')){
            return studentProfile();
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