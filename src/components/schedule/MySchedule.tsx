import React from "react";
import {useSelector} from "react-redux";
import {ScheduleSlot} from "./types";
import Schedule from "./Schedule";
import {Teacher} from "../user/teacher/types";
import {Student} from "../user/student/types";
import {GroupClass} from "../class/group_class/types"

const MySchedule = () => {

    //@ts-ignore
    const user: Teacher | Student = useSelector(state => state.auth.user);

    // const days = [
    //     'saturday',
    //     'sunday',
    //     'monday',
    //     'tuesday',
    //     'wednesday',
    //     'thursday',
    //     'friday'
    // ];
    let schedule: ScheduleSlot[] = [];

    // days.forEach((day) => {
    //     schedule.push(
    //         [
    //             day,
    //             '',
    //             // @ts-ignore
    //             new Date(undefined),
    //             // @ts-ignore
    //             new Date(undefined),
    //         ]
    //     )
    // });

    const userClasses: GroupClass[] = [];

    userClasses?.forEach((groupClass, index) => {
        //@ts-ignore
        Object.keys(groupClass.schedule).filter((day) => groupClass.schedule[day].on).forEach((day) => {
            schedule.push(
                [
                    day,
                    //@ts-ignore
                    groupClass.schedule[day].on ? groupClass.nickname : '',
                    //@ts-ignore
                    new Date(groupClass.schedule[day].from),
                    //@ts-ignore
                    new Date(groupClass.schedule[day].to),
                ]
            )
        });
    });

    console.log(schedule);
    return (
        <div className="h-screen px-12 py-12">
            <div className="flex justify-center items-center text-2xl text-black font-bold tracking-wide">My Schedule</div>
            <div className="pt-12 h-full">
            <Schedule schedule={schedule}/>
            </div>
        </div>
    )
};

export default MySchedule;