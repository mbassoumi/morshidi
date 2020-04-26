import React from 'react';
import TEACHERS from '../../../data/teachers';

import TeacherCard from "./TeacherCard";
import {List} from "antd";
import {Teacher} from "./types";


const TeachersPage = () => {


    //@ts-ignore
    const data: Teacher[] = TEACHERS;

    return (
        <div className="p-6">
            <div className="flex justify-center text-black text-3xl font-bold tracking-wide uppercase">
                Teachers List
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
                renderItem={(teacher: Teacher) => (
                    <List.Item key={teacher.user_account.id}>
                        <TeacherCard key={teacher.user_account.id} teacher={teacher}/>
                    </List.Item>
                )}
            />
        </div>
    );
};


export default TeachersPage;