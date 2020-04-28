import React from "react";
import STUDENTS from '../../../data/students';
import {List} from "antd";
import {Student} from "./types";
import StudentCard from "./StudentCard";

const StudentsPage = () => {

    //@ts-ignore
    const data: Student[] = STUDENTS;
    return (
        <div className="p-6">
            <div className="flex justify-center text-black text-3xl font-bold tracking-wide uppercase">
                Students List
            </div>
            <List
                grid={{
                    xs: 1,
                    sm: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 6
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
                renderItem={(student: Student) => (
                    <List.Item key={student.user_account.id}>
                        <StudentCard key={student.user_account.id} student={student}/>
                    </List.Item>
                )}
            />
        </div>
    )
};

export default StudentsPage;