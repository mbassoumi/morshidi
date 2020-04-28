import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import CustomImg from '../../shared/CustomImg';
import {Student} from './types';

interface StudentProfileHeaderProps {
    student: Student
}

const StudentProfileHeader = ({student}: StudentProfileHeaderProps) => {
    return (
        <div>
            <div className="bg-indigo-800 w-full justify-center text-center pb-5">
                <div className="flex">
                    <div className="mx-auto mt-5 mb-1">
                        <CustomImg src={student.user_account.avatar.thumb} alt="Profile"/>
                    </div>
                </div>
                <div className="text-white font-bold tracking-wide text-2xl">{student.user_account.first_name}</div>
                <div className="text-white tracking-wide text-lg">{student.user_account.address.city}</div>
                <div className="flex mt-3">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="flex justify-start text-white mx-4 sm:w-1/3">{student.user_account.username}</div>
                        <FontAwesomeIcon icon={faUserGraduate} size="2x" className="flex justify-center mx-4 sm:w-1/3"/>
                        <div className="flex justify-end text-white mx-4 sm:w-1/3 whitespace-no-wrap">ID: {student.user_account.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileHeader;