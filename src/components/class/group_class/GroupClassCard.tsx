import React from "react";
import {GroupClass} from "./types";
import {faEye, faGlobe, faLongArrowAltRight, faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ClassSchedule from "../../schedule/ClassSchedule";
import {Avatar, Popover, Tabs} from "antd";
import TeacherCard from "../../user/teacher/TeacherCard";
import AnimateHoveredComponent from "../../shared/AnimatedComponents/AnimateHoveredComponent";
import CourseCard from "../../course/CourseCard";
import {Link} from "react-router-dom";


interface ClassCardProps {
    groupClass: GroupClass
}

const GroupClassCard = ({groupClass}: ClassCardProps) => {


    return (
        <div className="p-3 animated zoomIn">
            <div className="bg-gray-100 shadow-2xl border border-gray-200 rounded-lg p-2">

                <Tabs defaultActiveKey="1" tabBarGutter={36} style={{
                    minHeight: '300px'
                }}>
                    <Tabs.TabPane tab="Details" key="1">
                        <div className="flex justify-center items-center py-5 text-center">
                            <div>
                                <div className="text-2xl text-black font-bold tracking-wide whitespace-no-wrap pb-2">
                                    {groupClass.nickname}
                                </div>
                                <div className="flex font-mono items-center text-gray-700 pb-2">
                                    <div>{groupClass.start_date.toDateString()}</div>
                                    <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" className="mx-2"/>
                                    <div>{groupClass.end_date.toDateString()}</div>
                                </div>
                                {
                                    groupClass.class_settings.online ? (
                                        <div className="flex justify-center items-center mx-auto text-indigo-500">
                                            <FontAwesomeIcon icon={faGlobe} size="lg" className=""/>
                                            <div className="ml-2">Online</div>
                                        </div>
                                    ) : (
                                        <div className="">
                                            <div className="flex justify-center items-center mx-auto text-red-600">
                                                <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" className=""/>
                                                <div className="mx-2">{groupClass.class_settings.address.city}</div>
                                            </div>
                                            <div className="text-xs">({groupClass.class_settings.address_details})</div>
                                        </div>
                                    )
                                }
                                <div className="flex justify-center items-center text-green-500 pt-2">
                                    <span className="mx-2">{groupClass.enrollments.length}</span>
                                    <FontAwesomeIcon icon={faUsers} size="lg"/>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Schedule" key="2">
                        <div className="px-6 pt-3">
                            <ClassSchedule groupClass={groupClass}/>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
                <div className="flex justify-end">
                    <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer mx-2">
                        <Popover content={<TeacherCard teacher={groupClass.course.teacher}/>}>
                            <Avatar src={groupClass.course.teacher.user_account.avatar.thumb}/>
                        </Popover>
                    </AnimateHoveredComponent>
                    <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer mx-2">
                        <Popover content={<CourseCard course={groupClass.course}/>}>
                            <Avatar style={{
                                backgroundColor: 'orange'
                            }}>COURSE</Avatar>
                        </Popover>
                    </AnimateHoveredComponent>
                    <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer mx-2">
                        <Link
                            to={`/course/${groupClass.course.id}/class/${groupClass.id}`}
                            className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-300 inline-block">
                            <FontAwesomeIcon icon={faEye} size="lg" className="text-white"/>
                        </Link>
                    </AnimateHoveredComponent>
                </div>
            </div>
        </div>
    )
};

export default GroupClassCard;