import React from 'react';
import Tag from '../shared/Tag';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {TeacherProfileBodyProps} from './types';

const TeacherProfileBody = ({details}: TeacherProfileBodyProps) => {

    const fields = details.fields.map((tag, index) => <Tag text={tag} key={index}/>);
    const levels = details.levels.map((tag, index) => <Tag text={tag} key={index}/>);

    return (
        <div>
            <div className="items-center mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">About me</span>
                <p className="ml-5 text-xs sm:text-lg text-gray-700">
                    {details.aboutMe}
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
                    <span className="ml-2">{details.contactInfo.whatsapp}</span>
                </div>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faPhone} size="lg"/>
                    <span className="ml-2">{details.contactInfo.phone}</span>
                </div>
                <div className="flex ml-4 mt-4 items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" size="lg"/>
                    <span className="ml-2">{details.contactInfo.email}</span>
                </div>
            </div>
        </div>
    );
};

export default TeacherProfileBody;