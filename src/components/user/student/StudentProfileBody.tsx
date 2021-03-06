import React from 'react';
import Tag from '../../shared/Tag';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {Student} from './types';


interface StudentProfileBodyProps {
    student: Student
}
const StudentProfileBody = ({student}: StudentProfileBodyProps) => {

    const interests = student.fields.map((field, index) => <Tag text={field.name} key={index}/>);
    const level = <Tag text={student.level.name}/>;

    return (
        <div>
            <div className="flex-wrap items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Field</span>
                <span className="flex-wrap">
                    {interests}
                </span>
            </div>
            <div className="flex-wrap items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4 whitespace-no-wrap">Levels</span>
                <span className="">
                    {level}
                </span>
            </div>
            <div className="items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Contact Information</span>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" size="lg"/>
                    <span className="ml-2">{'student.whatsapp'}</span>
                </div>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faPhone} size="lg"/>
                    <span className="ml-2">{'student.phone'}</span>
                </div>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" size="lg"/>
                    <span className="ml-2">{'student.email'}</span>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileBody;