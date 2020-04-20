import React from "react";
import {ClassDetailsProps} from "./types";
import {CourseProps} from "../course/types";
import {faEye, faGlobe, faLongArrowAltRight, faMapMarkedAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ClassSchedule from "../schedule/ClassSchedule";
import {Avatar, Popover, Tabs} from "antd";
import TeacherCard from "../teacher/TeacherCard";
import AnimateHoveredComponent from "../shared/AnimatedComponents/AnimateHoveredComponent";
import CourseCard from "../course/CourseCard";
import {Link} from "react-router-dom";

const ClassCard = ({classDetails, course}: ClassDetailsProps & CourseProps) => {

    const m = {
        // schedule: ScheduleType,
    };


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
                                    {classDetails.name}
                                </div>
                                <div className="flex font-mono items-center text-gray-700 pb-2">
                                    <div>{classDetails.startDate.toDateString()}</div>
                                    <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" className="mx-2"/>
                                    <div>{classDetails.endDate.toDateString()}</div>
                                </div>
                                {
                                    classDetails.isOnline ? (
                                        <div className="flex justify-center items-center mx-auto text-indigo-500">
                                            <FontAwesomeIcon icon={faGlobe} size="lg" className=""/>
                                            <div className="ml-2">Online</div>
                                        </div>
                                    ) : (
                                        <div className="">
                                            <div className="flex justify-center items-center mx-auto text-red-600">
                                                <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" className=""/>
                                                <div className="mx-2">{classDetails.city}</div>
                                            </div>
                                            <div className="text-xs">({classDetails.physicalAddress})</div>
                                        </div>
                                    )
                                }
                                <div className="flex justify-center items-center text-green-500 pt-2">
                                    <span className="mx-2">{classDetails.students.length}</span>
                                    <FontAwesomeIcon icon={faUsers} size="lg"/>
                                </div>
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Schedule" key="2">
                        <div className="px-6 pt-3">
                            <ClassSchedule classDetails={classDetails}/>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
                <div className="flex justify-end">
                    <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer mx-2">
                        <Popover content={<TeacherCard teacher={course.teacher}/>}>
                            <Avatar src={course.teacher.picture}/>
                        </Popover>
                    </AnimateHoveredComponent>
                    <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer mx-2">
                        <Popover content={<CourseCard course={course}/>}>
                            <Avatar style={{
                                backgroundColor: 'orange'
                            }}>COURSE</Avatar>
                        </Popover>
                    </AnimateHoveredComponent>
                    <AnimateHoveredComponent animation='heartBeat infinite' className="cursor-pointer mx-2">
                        <Link
                            to={`/course/${classDetails.course_id}/class/${classDetails.id}`}
                            className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-300 inline-block">
                            <FontAwesomeIcon icon={faEye} size="lg" className="text-white"/>
                        </Link>
                    </AnimateHoveredComponent>
                </div>
            </div>
        </div>
    )
};

export default ClassCard;