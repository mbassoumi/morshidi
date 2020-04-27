import React from 'react';

import Card from '../shared/Card';
import CourseHeader from './CourseHeader';
import CourseBody from './CourseBody';
import Group_classes from '../../data/group_classes';
import COURSES from '../../data/courses';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Course as CourseProps} from './types';
import NotFoundException from '../shared/NotFoundException';
import {List} from "antd";
import {GroupClass} from "../class/group_class/types";
import GroupClassCard from "../class/group_class/GroupClassCard";
import AnimateHoveredComponent from "../shared/AnimatedComponents/AnimateHoveredComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const Course = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const courseId = match.params.id;
    //@ts-ignore
    const course: CourseProps = COURSES.find(item => item.id === courseId);
    //@ts-ignore
    const courseClasses: GroupClass[] = Group_classes.filter(item => item.course_id === courseId);
    return (
        <div className="pb-16">
            {
                course ? (
                        <>
                            <CourseHeader course={course}/>
                            <div className="flex justify-between flex-col lg:flex-row">
                                <Card className=" mt-4 mx-auto">
                                    <CourseBody course={course}/>
                                </Card>
                            </div>
                            <div className="fixed right-0 bottom-0 mr-6 mb-12 w-12 h-12 z-10">
                                <AnimateHoveredComponent animation="heartBeat infinite" className="">
                                    <Link
                                        to={`/course/${course.id}/class/create`}
                                        className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-indigo-300 inline-block mr-3">
                                        <FontAwesomeIcon icon={faPlus} size="lg" className="text-white"/>
                                    </Link>
                                </AnimateHoveredComponent>
                            </div>
                            {
                                courseClasses.length ?
                                    <div className="mt-4 mx-2">
                                        <List
                                            grid={{
                                                xs: 1,
                                                md: 2,
                                                xl: 3,
                                            }}
                                            pagination={{
                                                onChange: page => {
                                                    console.log('page', page);

                                                },
                                                onShowSizeChange: (current: number, size: number) => {
                                                    console.log('current', current);
                                                    console.log('size', size);
                                                },
                                                total: courseClasses.length,
                                                // defaultCurrent: 1
                                                // disabled: true
                                                // current: 2,
                                                defaultPageSize: 6,
                                                // pageSize: 6,
                                                //     onChange?: (page: number, pageSize?: number) => void,
                                                hideOnSinglePage: true,
                                                showSizeChanger: true,
                                                pageSizeOptions: ['3', '6'],
                                                // showQuickJumper: true,
                                                //     showQuickJumper?: boolean | {
                                                //         goButton?: React.ReactNode;
                                                // };

                                                showTitle: true,

                                                // showTotal: (total: number, range: [number, number]) =>
                                                //     <div>total: {total} range: {range[0]} to {range[1]}</div>,
                                                size: 'default',
                                                responsive: true,
                                                // simple: true,
                                                // style: {
                                                //     backgroundColor: 'red'
                                                // },
                                                //     locale?: Object,
                                                className: 'flex justify-center',
                                                //     prefixCls?: string,
                                                //     selectPrefixCls?: string,
                                                //     itemRender: (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactElement<HTMLElement>) => (
                                                //         <div>
                                                //             page: {page}
                                                //         </div>
                                                //     ),
                                                //     role?: string,
                                                //     showLessItems?: boolean,
                                            }}
                                            dataSource={courseClasses}
                                            renderItem={(groupClass: GroupClass) => (
                                                <List.Item key={groupClass.id}>
                                                    <GroupClassCard key={groupClass.id} groupClass={groupClass}/>
                                                </List.Item>
                                            )}
                                        />
                                    </div>
                                    :
                                    <div className="flex justify-center">
                                        <Card className=" mt-4 mx-auto border-red-600 border-2 w-3/5">
                                            <div
                                                className="flex justify-center items-center text-center text-red-600 font-semibold uppercase tracking-wide h-32 w-full">
                                                No Classes Available
                                            </div>
                                        </Card>
                                    </div>
                            }
                        </>
                    )
                    :
                    <NotFoundException/>
            }

        </div>
    );
};

export default Course;