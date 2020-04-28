import React from 'react';
import {Course} from './types';
import Rating from '../shared/Rating';


interface CourseHeaderProps {
    course: Course
}

const CourseHeader = ({course}: CourseHeaderProps) => {
    return (
        <div>
            <div className="bg-indigo-800 w-full justify-center text-center">
                <div className="text-white font-bold tracking-wide text-2xl pt-4">{course.title}</div>
                <div className="text-white tracking-wide text-lg">By: {course.teacher.user_account.first_name}</div>
                <div className="text-white tracking-wide text-lg whitespace-no-wrap pt-10">ID: {course.id}</div>
                <div className="flex mt-3 pb-6">
                    <div className="flex mx-auto justify-between items-center sm:w-1/3">
                        <div className="bg-white w-16 sm:w-1/2">
                            <div className="font-bold">{course.group_classes.length}</div>
                            <div className="text-sm md:text-lg">classes</div>
                        </div>
                        <div className="bg-white w-16 sm:w-1/2 mx-1">
                            <div className="font-bold">{'course.students'}</div>
                            <div className="text-sm md:text-lg">Students</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-4">
                <Rating average={course.rating.average} count={course.rating.count} readonly={true}/>
            </div>
        </div>
    );
};

export default CourseHeader;