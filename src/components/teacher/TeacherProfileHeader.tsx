import React from 'react';
import Majd from '../../img/Majd.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faUserTie} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import CircleImg from '../shared/CircleImg';
import {TeacherProfileHeaderProps} from './types';

const TeacherProfileHeader = ({id, name, username, classes, sessions, followers, rating}: TeacherProfileHeaderProps) => {
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
                <div className="text-white font-bold tracking-wide text-2xl">{name}</div>
                <div className="text-white tracking-wide text-lg">Ramallah</div>
                <div className="flex mt-3">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="flex justify-start text-white mx-4 sm:w-1/3">{username}</div>
                        <FontAwesomeIcon icon={faUserTie} size="2x" className="flex justify-center mx-4 sm:w-1/3"/>
                        <div className="flex justify-end text-white mx-4 sm:w-1/3 whitespace-no-wrap">ID: {id}
                        </div>
                    </div>
                </div>
                <div className="flex mt-3 pb-6">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="bg-white w-16 sm:w-1/3">
                            <div className="font-bold">{classes}</div>
                            <div className="text-sm md:text-lg">classes</div>
                        </div>
                        <div className="bg-white w-16 sm:w-1/3 mx-1">
                            <div className="font-bold">{sessions}</div>
                            <div className="text-sm md:text-lg">Sessions</div>
                        </div>
                        <div className="bg-white w-16 sm:w-1/3">
                            <div className="font-bold">{followers}</div>
                            <div className="text-sm md:text-lg">Followers</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-wrap mx-auto -mt-4 py-1 px-2 justify-center items-center rounded-lg bg-white shadow-xl w-1/2 sm:w-1/4">
                <Rating
                    className="whitespace-no-wrap"
                    initialRating={rating.avg}
                    emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-500" size="lg"/>}
                    fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}
                />
                <div className="ml-2">
                    ({rating.count})
                </div>
            </div>
        </div>
    );
};

export default TeacherProfileHeader;