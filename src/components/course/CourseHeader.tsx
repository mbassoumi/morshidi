import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import {CourseProps} from './types';


const CourseHeader = ({course}: CourseProps) => {
    return (
        <div>
            <div className="bg-indigo-800 w-full justify-center text-center">
                <div className="text-white font-bold tracking-wide text-2xl pt-4">{course.name}</div>
                <div className="text-white tracking-wide text-lg">By: {course.teacher.name}</div>
                <div className="text-white tracking-wide text-lg whitespace-no-wrap pt-10">ID: {course.id}</div>
                <div className="flex mt-3 pb-6">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="bg-white w-16 sm:w-1/2">
                            <div className="font-bold">{course.classes}</div>
                            <div className="text-sm md:text-lg">classes</div>
                        </div>
                        <div className="bg-white w-16 sm:w-1/2 mx-1">
                            <div className="font-bold">{course.students}</div>
                            <div className="text-sm md:text-lg">Students</div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-wrap mx-auto -mt-4 py-1 px-2 justify-center items-center rounded-lg bg-white shadow-xl w-1/2 sm:w-1/4">
                <Rating
                    className="whitespace-no-wrap"
                    initialRating={course.rating.average}
                    emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-500" size="lg"/>}
                    fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}
                />
                <div className="ml-2">
                    ({course.rating.count})
                </div>
            </div>
        </div>
    );
};

export default CourseHeader;