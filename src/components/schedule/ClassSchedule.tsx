import React from "react";
import {GroupClass} from "../class/group_class/types";
import Schedule from "./Schedule";
import {ScheduleSlot} from "./types";

interface ClassScheduleProps {
    groupClass: GroupClass
}
const ClassSchedule = ({groupClass}: ClassScheduleProps) => {

    let schedule: ScheduleSlot[] = [];

    const classSchedule = groupClass.schedule;

    //@ts-ignore
    schedule = Object.keys(classSchedule).filter((day) => classSchedule[day].on).map((day) => {
        return (
            [
                day,
                //@ts-ignore
                classSchedule[day].on ? groupClass.nickname : '',
                //@ts-ignore
                new Date(classSchedule[day].from),
                //@ts-ignore
                new Date(classSchedule[day].to),
            ]
        )
    });

    return (
        <Schedule schedule={schedule}/>
    )
};

export default ClassSchedule;