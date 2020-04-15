import React from 'react';
import CoursesList from './CoursesList';
import COURSES from '../../data/courses';
import CourseCard from "./CourseCard";
import {List} from "antd";
import {CourseProps} from "./types";


const CoursesPage = () => {
    return (
        <div>

            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    // sm: 2,
                    md: 2,
                //     lg: 4,
                    xl: 3,
                //     xxl: 3,
                }}
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 6,
                }}
                dataSource={COURSES}
                renderItem={(course, index) => (
                    <List.Item>
                        {
                            // @ts-ignore
                            <CourseCard course={course}/>
                        }
                    </List.Item>
                )}
            />,
            {/*{*/}
            {/*    // @ts-ignore*/}
            {/*    <CourseCard course={COURSES[0]}/>*/}
            {/*}*/}
            {/*{*/}
            {/*    // @ts-ignore*/}
            {/*    <CoursesList courses={COURSES}/>*/}
            {/*}*/}
        </div>
    );
};

export default CoursesPage;