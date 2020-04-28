import React from "react";
import {GroupClass} from "../class/group_class/types";
import Schedule from "./Schedule";
import {ScheduleSlot} from "./types";

interface ClassScheduleProps {
    groupClass: GroupClass
}
const GroupClassSchedule = ({groupClass}: ClassScheduleProps) => {

    let schedule: ScheduleSlot[] = [];

    const classSchedule = groupClass.schedule;

    //@ts-ignore
    schedule = Object.keys(classSchedule).map((day) => {
        return (
            [
                day,
                //@ts-ignore
                groupClass.nickname,
                //@ts-ignore
                new Date(classSchedule[day].start_time),
                //@ts-ignore
                new Date(classSchedule[day].end_time),
            ]
        )
    });

    console.log('schedule', schedule);

    return (
        <Schedule schedule={schedule}/>
    )
};

export default GroupClassSchedule;