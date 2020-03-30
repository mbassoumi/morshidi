import React from 'react';
import {ClassDetailsProps} from './types';
import Tag from '../shared/Tag';

const ClassOverview = ({classDetails}: ClassDetailsProps) => {


    const schedule = () => {
        //@ts-ignore
        const activeDays: string[] = Object.keys(classDetails.schedule).filter(day => classDetails.schedule[day].on);

        return activeDays.map((day, index) => {

            return (
                <div key={index} className="flex">
                    <div className="font-semibold text-gray-600 uppercase mx-4 w-24">{day}</div>
                    <div className="text-gray-600">
                        {
                            //@ts-ignore
                            `${classDetails.schedule[day].from?.toLocaleTimeString()} - ${classDetails.schedule[day].to?.toLocaleTimeString()}`
                        }
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <div className="">
                <div className="uppercase underline font-semibold tracking-wide text-2xl text-indigo-900">
                    Class overview
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Start Date</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {classDetails.startDate.toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">End Date</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {classDetails.endDate.toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Schedule</span>
                        <span className="flex-wrap">
                            {schedule()}
                        </span>
                    </div>
                </div>
                {
                    classDetails.isOnline ? (
                            <div className="ml-8">
                                <div className="flex flex-wrap items-center mb-2">
                                    <span
                                        className="text-xl sm:text-2xl md:text-3xl text-red-700 mr-4">Online Class</span>
                                </div>
                            </div>
                        )
                        : (
                            <>
                                <div className="ml-8">
                                    <div className="flex flex-wrap items-center mb-2">
                                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">City</span>
                                        <span className="font-semibold text-gray-600 mx-4">
                                            {classDetails.city && <Tag text={classDetails.city}/>}
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-8">
                                    <div className="flex flex-wrap items-center mb-2">
                                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Physical Address</span>
                                        <span className="font-semibold text-gray-600 mx-4">
                                            {classDetails.physicalAddress}
                                        </span>
                                    </div>
                                </div>
                            </>
                        )
                }
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span
                            className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Minimum Allowed Students</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {classDetails.isOnline ? classDetails.online?.minStudentPerClass : classDetails.physical?.minStudentPerClass}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span
                            className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Maximum Allowed Students</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {classDetails.isOnline ? classDetails.online?.maxStudentPerClass : classDetails.physical?.maxStudentPerClass}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Price</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {classDetails.isOnline ? classDetails.online?.pricePerStudent : classDetails.physical?.pricePerStudent}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Referral Incentive</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {classDetails.referralIncentive}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassOverview;