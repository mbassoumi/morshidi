import React from 'react';
import {ClassDetailsProps} from './types';

const ClassHeader = ({classDetails}: ClassDetailsProps) => {
    return (
        <div className="bg-indigo-800 w-full text-center">
            <div className="pt-6 pb-1">
                <span className="text-white text-lg sm:text-2xl font-bold tracking-wider">{classDetails.name}</span>
            </div>
            <div className="p-1">
                <span className="text-white tracking-wider text-sm sm:text-lg">{classDetails.nickname}</span>
            </div>
            <div className="py-5">
                <span className="text-white tracking-wider text-sm sm:text-lg">ID: {classDetails.id}</span>
            </div>
        </div>
    );
};

export default ClassHeader;