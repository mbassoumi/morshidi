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
            {/*{new Array(1).fill(1, 0, 20).map(value => <TeacherCard teacher={data[0]}/>)}*/}
            <div className="flex justify-center text-black text-3xl font-bold tracking-wide uppercase">
                Teachers List
            </div>
            <List
                grid={{
                    xs: 1,
                    md: 2,
                    xl: 3,
                    xxl: 4,
                }}
                pagination={{
                    total: data.length,
                    defaultPageSize: 10,
                    hideOnSinglePage: true,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '30', '40'],
                    showTitle: true,
                    size: 'default',
                    responsive: true,
                    className: 'flex justify-center',
                }}
                dataSource={data}
                renderItem={(teacher: Teacher) => (
                    <List.Item key={teacher.user_account?.id}>
                        <div className="animated zoomIn">
                            <TeacherCard key={teacher.user_account?.id} teacher={teacher}/>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};


export default TeachersPage;