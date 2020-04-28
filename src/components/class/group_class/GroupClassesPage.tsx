import React from "react";
import COURSES from '../../../data/courses'
import Group_classes from '../../../data/group_classes'
import GroupClassCard from "./GroupClassCard";
import {List} from "antd";
import {GroupClass} from "./types";

const GroupClassesPage = () => {

    //@ts-ignore
    const data: GroupClass[] = Group_classes;

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
                renderItem={(groupClass: GroupClass ) => (
                    <List.Item key={groupClass.id}>
                        {
                            <GroupClassCard key={groupClass.id} groupClass={groupClass}/>
                        }
                    </List.Item>
                )}
            />
        </div>
    )
};


export default GroupClassesPage;