import React from 'react';
import {GroupClass} from './types';

interface GroupClassHeaderProps {
    groupClass: GroupClass
}

const GroupClassHeader = ({groupClass}: GroupClassHeaderProps) => {
    return (
        <div className="bg-indigo-800 w-full text-center">
            <div className="pt-6 pb-1">
                <span className="text-white text-lg sm:text-2xl font-bold tracking-wider">{groupClass.course.title}</span>
            </div>
            <div className="p-1">
                <span className="text-white tracking-wider text-sm sm:text-lg">{groupClass.nickname}</span>
            </div>
            <div className="py-5">
                <span className="text-white tracking-wider text-sm sm:text-lg">ID: {groupClass.id}</span>
            </div>
        </div>
    );
};

export default GroupClassHeader;