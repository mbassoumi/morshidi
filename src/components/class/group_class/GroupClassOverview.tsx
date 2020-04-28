import React from 'react';
import {GroupClass} from './types';
import Tag from '../../shared/Tag';


interface GroupClassOverviewProps {
    groupClass: GroupClass
}
const GroupClassOverview = ({groupClass}: GroupClassOverviewProps) => {


    const schedule = () => {
        //@ts-ignore
        const activeDays: string[] = Object.keys(groupClass.schedule).filter(day => groupClass.schedule[day].on);

        return activeDays.map((day, index) => {

            return (
                <div key={index} className="flex">
                    <div className="font-semibold text-gray-600 uppercase mx-4 w-24">{day}</div>
                    <div className="text-gray-600">
                        {
                            //@ts-ignore
                            `${groupClass.schedule[day].from?.toLocaleTimeString()} - ${groupClass.schedule[day].to?.toLocaleTimeString()}`
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
                            {groupClass.start_date.toLocaleDateString()}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">End Date</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {groupClass.end_date.toLocaleDateString()}
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
                    groupClass.class_settings.online ? (
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
                                            {groupClass.class_settings.address?.city && <Tag text={groupClass.class_settings.address.city.name}/>}
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-8">
                                    <div className="flex flex-wrap items-center mb-2">
                                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Physical Address</span>
                                        <span className="font-semibold text-gray-600 mx-4">
                                            {groupClass.class_settings.address_details}
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
                            {groupClass.class_settings.min_students}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span
                            className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Maximum Allowed Students</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {groupClass.class_settings.max_students}
                        </span>
                    </div>
                </div>
                <div className="ml-8">
                    <div className="flex flex-wrap items-center mb-2">
                        <span className="text-xl sm:text-2xl md:text-3xl text-gray-900 mr-4">Price</span>
                        <span className="font-semibold text-gray-600 mx-4">
                            {groupClass.class_settings.price_per_student}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupClassOverview;