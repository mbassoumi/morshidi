import React from 'react';
import Majd from '../../img/Majd.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserTie} from '@fortawesome/free-solid-svg-icons';
import CircleImg from '../shared/CircleImg';
import {TeacherProps} from './types';
import Rating from '../shared/Rating';

const TeacherProfileHeader = ({teacher}: TeacherProps) => {
    return (
        <div>
            <div className="bg-indigo-800 w-full justify-center text-center">
                <div className="sm:relative">
                    <div className="flex">
                        <div className="mx-auto mt-5 mb-1">
                            <CircleImg src={Majd} alt="Profile"/>
                        </div>
                    </div>
                    <button className="sm:absolute my-4 px-12 py-2 sm:top-0 sm:right-0 sm:mr-4 sm:mt-4 bg-indigo-900 rounded-lg hover:bg-indigo-300 focus:outline-none active:bg-indigo-400 text-white font-bold tracking-wider text-lg">
                        Follow
                    </button>
                </div>
                <div className="text-white font-bold tracking-wide text-2xl">{teacher.name}</div>
                <div className="text-white tracking-wide text-lg">{teacher.from}</div>
                <div className="flex mt-3">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="flex justify-start text-white mx-4 sm:w-1/3">{teacher.username}</div>
                        <FontAwesomeIcon icon={faUserTie} size="2x" className="flex justify-center mx-4 sm:w-1/3"/>
                        <div className="flex justify-end text-white mx-4 sm:w-1/3 whitespace-no-wrap">ID: {teacher.id}
                        </div>
                    </div>
                </div>
                <div className="flex mt-3 pb-6">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="bg-white w-16 sm:w-1/3">
                            <div className="font-bold">{teacher.classes}</div>
                            <div className="text-sm md:text-lg">classes</div>
                        </div>
                        <div className="bg-white w-16 sm:w-1/3 mx-1">
                            <div className="font-bold">{teacher.sessions}</div>
                            <div className="text-sm md:text-lg">Sessions</div>
                        </div>
                        <div className="bg-white w-16 sm:w-1/3">
                            <div className="font-bold">{teacher.followers}</div>
                            <div className="text-sm md:text-lg">Followers</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-4">
                <Rating average={teacher.rating.average} count={teacher.rating.count} readonly={true}/>
            </div>
        </div>
    );
};

export default TeacherProfileHeader;