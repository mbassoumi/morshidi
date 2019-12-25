import React from 'react';
import Card from '../shared/Card';
import {TeacherProfileProps} from './types';
import CircleImg from '../shared/CircleImg';
import Majd from '../../img/Majd.jpg';
import Rating from 'react-rating';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Tag from '../shared/Tag';
import {Link} from 'react-router-dom';

const TeacherCard = ({teacher}: TeacherProfileProps) => {

    const fields = teacher.details.fields.map((tag, index) => <Tag text={tag} key={index}/>);
    const levels = teacher.details.levels.map((tag, index) => <Tag text={tag} key={index}/>);

    return (
        <div className="mt-16 sm:mt-0">

            <Card>
                <div className="flex sm:hidden justify-center mx-auto -mt-16">
                    <CircleImg src={Majd} alt={teacher.name}/>
                </div>
                <div className="flex justify-between">
                    <div className="flex pb-4">
                        <div className="hidden sm:block">
                            <CircleImg src={Majd} alt={teacher.name}/>
                        </div>
                        <div className="sm:pl-4">
                            <div className="text-2xl">{teacher.name}</div>
                            <div className="text-lg text-gray-600">{teacher.from}</div>
                            <div className="flex whitespace-no-wrap">
                                <Rating
                                    readonly
                                    className="whitespace-no-wrap"
                                    initialRating={teacher.rating.avg}
                                    emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-500" size="lg"/>}
                                    fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}
                                />
                                <div className="ml-2 whitespace-no-wrap">
                                    ({teacher.rating.count})
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-500">
                        <div>{teacher.username}</div>
                        <div className="whitespace-no-wrap">ID: {teacher.id}</div>
                    </div>
                </div>
                <div className="flex-wrap items-center mb-2">
                    <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Field</span>
                    <span className="flex-wrap">
                    {fields}
                </span>
                </div>
                <div className="flex-wrap items-center mb-2">
                    <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Levels</span>
                    <span className="flex-wrap">
                    {levels}
                </span>
                </div>
                <div className="border-b-2 border-gray-600 -mx-4"/>

                <div className="flex flex-wrap pt-4 items-center">
                    <Link to="/teacher/public-profile"
                          className="text-xs mt-1 mr-1 sm:text-lg px-2 py-1 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-800 active:bg-gray-600 whitespace-no-wrap">
                        View profile
                    </Link>
                    <Link to="/teacher/public-profile"
                          className="text-xs mt-1 mr-1 sm:text-lg px-2 py-1 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-800 active:bg-gray-600 whitespace-no-wrap">
                        Browse courses
                    </Link>
                    <Link to="/teacher/public-profile"
                          className="text-xs mt-1 sm:text-lg px-2 py-1 sm:px-4 sm:py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-800 active:bg-gray-600 whitespace-no-wrap">
                        Book a private session
                    </Link>


                </div>

            </Card>
        </div>
    );
};

export default TeacherCard;