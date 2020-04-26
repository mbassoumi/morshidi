import React from 'react';
import COURSES from '../../data/courses';
import CourseCard from "./CourseCard";
import {List} from "antd";
import {Course} from "./types";
import AnimateHoveredComponent from "../shared/AnimatedComponents/AnimateHoveredComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCross, faGlobe, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const CoursesPage = () => {

    //@ts-ignore
    const data: Course[] = COURSES;

    return (
        <div className="p-6 ">
            <div className="flex justify-center text-black text-3xl font-bold tracking-wide uppercase">Courses List
            </div>
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
                    total: data.length,
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
                dataSource={data}
                renderItem={(course: Course) => (
                    <List.Item key={course.id}>
                        <CourseCard key={course.id} course={course}/>
                    </List.Item>
                )}
            />
            <div className="fixed right-0 bottom-0 mr-3 mb-12 w-12 h-12">
                <AnimateHoveredComponent animation="heartBeat infinite">
                    <Link
                        to={`/course/create`}
                        className="w-12 h-12 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-indigo-300 inline-block mr-3">
                        <FontAwesomeIcon icon={faPlus} size="lg" className="text-white"/>
                    </Link>
                </AnimateHoveredComponent>
            </div>
        </div>
    );
};

export default CoursesPage;