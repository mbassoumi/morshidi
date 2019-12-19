import React from 'react';
import {ClassHeaderProps} from './types';

const ClassHeader = ({name, nickname, id}: ClassHeaderProps) => {
    return (
        <div className="bg-indigo-800 w-full text-center">
            <div className="pt-6 pb-1">
                <span className="text-white text-lg sm:text-2xl font-bold tracking-wider">{name}</span>
            </div>
            <div className="p-1">
                <span className="text-white tracking-wider text-sm sm:text-lg">{nickname}</span>
            </div>
            <div className="py-5">
                <span className="text-white tracking-wider text-sm sm:text-lg">ID: {id}</span>
            </div>
        </div>
    );
};

export default ClassHeader;