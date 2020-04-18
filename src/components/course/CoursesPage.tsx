import React from 'react';
import COURSES from '../../data/courses';
import CourseCard from "./CourseCard";
import {List} from "antd";
import {CourseType} from "./types";


const CoursesPage = () => {

    //@ts-ignore
    const data: CourseType[] = COURSES;

    return (
        <div className="p-6">
            <div className="flex justify-center text-black text-3xl font-bold tracking-wide uppercase">Courses List</div>
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
                    total: COURSES.length,
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
                renderItem={(course: CourseType) => (
                    <List.Item key={course.id}>
                        <CourseCard key={course.id} course={course}/>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default CoursesPage;