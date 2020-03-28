import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../api/auth/actions/authActions';
import {showAlertNotification} from '../api/alerts/alerts';
import {Redirect,} from 'react-router-dom';
import {User} from '../api/types';
import STUDENTS from '../data/students';
import TEACHERS from '../data/teachers';


const Login = () => {

    const dispatch = useDispatch();

    //@ts-ignore
    const user = useSelector(state => state.auth.user);

    console.log('Login user', user);

    const login = (userType: string) => {

        let user: User;
        switch (userType) {
            case 'teacher':
                user = TEACHERS[0];
                break;
            case 'student':
                user = STUDENTS[0];
                break;
            default:
                showAlertNotification('ERROR', 'SOMETHING WENT WRONG', 'danger');
                return;
        }
        dispatch(loginAction(user));
    };


    return (
        <div className="h-screen">
            {
                user ? <Redirect to={{pathname: '/'}}/> : null
            }
            <div className="flex justify-center items-center mx-auto h-screen bg-indigo-900">
                <div className="flex flex-col">
                    <div className="pb-32 flex justify-center">
                        <p className="text-white font-semibold tracking-wider uppercase border-4 px-2 text-4xl">
                            Morshidi
                        </p>
                    </div>
                    <div className="flex">
                        <button
                            className="font-bold m-2 p-2 tracking-wider uppercase text-indigo-700 h-32 w-64  rounded-lg shadow-lg bg-gray-400 overflow-hidden outline-none hover:bg-gray-300 hover:shadow-2xl focus:shadow-outline active:bg-gray-500"
                            onClick={() => login('student')}
                        >
                            student
                        </button>
                        <button
                            className="font-bold m-2 p-2 tracking-wider uppercase text-indigo-700 h-32 w-64  rounded-lg shadow-lg bg-gray-400 overflow-hidden outline-none hover:bg-gray-300 hover:shadow-2xl focus:shadow-outline active:bg-gray-500"
                            onClick={() => login('teacher')}
                        >
                            Teacher
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;