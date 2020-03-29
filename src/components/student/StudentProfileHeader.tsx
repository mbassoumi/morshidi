import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import CircleImg from '../shared/CircleImg';
import {StudentProps} from './types';

const StudentProfileHeader = ({student}: StudentProps) => {
    return (
        <div>
            <div className="bg-indigo-800 w-full justify-center text-center pb-5">
                <div className="flex">
                    <div className="mx-auto mt-5 mb-1">
                        <CircleImg src={student.picture} alt="Profile"/>
                    </div>
                </div>
                <div className="text-white font-bold tracking-wide text-2xl">{student.name}</div>
                <div className="text-white tracking-wide text-lg">Al-Beireh</div>
                <div className="flex mt-3">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="flex justify-start text-white mx-4 sm:w-1/3">{student.username}</div>
                        <FontAwesomeIcon icon={faUserGraduate} size="2x" className="flex justify-center mx-4 sm:w-1/3"/>
                        <div className="flex justify-end text-white mx-4 sm:w-1/3 whitespace-no-wrap">ID: {student.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileHeader;