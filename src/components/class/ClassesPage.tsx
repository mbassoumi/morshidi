import React from "react";
import COURSES from './../../data/courses'
import CLASSES from './../../data/classes'
import ClassCard from "./ClassCard";
import {List} from "antd";
import {ClassDetails} from "./types";

const ClassesPage = () => {

    //@ts-ignore
    const data: ClassDetails[] = CLASSES;

    return (
        <div className="p-6">
            <div className="flex justify-center text-black text-3xl font-bold tracking-wide uppercase">
                CLASSES List
            </div>
            <List
                grid={{
                    xs: 1,
                    xl: 2,
                }}
                pagination={{
                    total: data.length,
                    defaultPageSize: 6,
                    hideOnSinglePage: true,
                    showSizeChanger: true,
                    pageSizeOptions: ['3', '6'],
                    showTitle: true,
                    size: 'default',
                    responsive: true,
                    className: 'flex justify-center',
                }}
                dataSource={data}
                renderItem={(classDetails: ClassDetails ) => (
                    <List.Item key={classDetails.id}>
                        {
                            //@ts-ignore
                            <ClassCard key={classDetails.id} classDetails={classDetails} course={COURSES.find(course => course.id === classDetails.course_id)}/>
                        }
                    </List.Item>
                )}
            />
        </div>
    )
};


export default ClassesPage;