import React from 'react';
import Tag from '../../shared/Tag';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {Teacher} from "./types";

interface TeacherProfileBodyProps {
    teacher: Teacher
}

const TeacherProfileBody = ({teacher}: TeacherProfileBodyProps) => {

    const fields = teacher.fields?.map((field, index) => <Tag text={field.name} key={field.id}/>);
    const levels = teacher.levels?.map((level, index) => <Tag text={level.name} key={level.id}/>);

    return (
        <div>
            <div className="items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">About me</span>
                <p className="ml-5 text-xs sm:text-lg text-gray-700">
                    {teacher.bio}
                </p>
            </div>
            <div className="flex-wrap items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Field</span>
                <span className="flex-wrap">
                    {fields}
                </span>
            </div>
            <div className="flex-wrap items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4 whitespace-no-wrap">Levels</span>
                <span className="">
                    {levels}
                </span>
            </div>
            <div className="items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Contact Information</span>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" size="lg"/>
                    <span className="ml-2">{'teacher.whatsapp'}</span>
                </div>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faPhone} size="lg"/>
                    <span className="ml-2">{'teacher.phone'}</span>
                </div>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" size="lg"/>
                    <span className="ml-2">{'teacher.email'}</span>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfileBody;