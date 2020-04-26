import React from 'react';
import Tag from '../shared/Tag';
import {Course} from './types';

const CourseBody = ({course}: { course: Course }) => {

    const requirements = course.requirements.map((requirement, index) => <li key={index}>{requirement}</li>);

    return (
        <div>
            <div className="flex-wrap items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Field</span>
                <span className="flex-wrap">
                    <Tag text={course.field.name}/>
                </span>
            </div>
            <div className="flex-wrap items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4 whitespace-no-wrap">Level</span>
                <span className="">
                    <Tag text={course.level.name}/>
                </span>
            </div>
            <div className="items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Description</span>
                <p className="ml-5 text-xs sm:text-lg text-gray-700">
                    {course.description}
                </p>
            </div>

            <div className="items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Requirements</span>
                <ul className="list-inside list-disc ml-5 text-gray-700 text-xs sm:text-lg">
                    {requirements}
                </ul>
            </div>
        </div>
    );
};

export default CourseBody;