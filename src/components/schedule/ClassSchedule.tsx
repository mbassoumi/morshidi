import React from "react";
import {ClassDetailsProps} from "../class/types";
import Schedule from "./Schedule";
import {ScheduleSlot} from "./types";

const ClassSchedule = ({classDetails}: ClassDetailsProps) => {

    let schedule: ScheduleSlot[] = [];

    const classSchedule = classDetails.schedule;

    //@ts-ignore
    schedule = Object.keys(classSchedule).filter((day) => classSchedule[day].on).map((day) => {
        return (
            [
                day,
                //@ts-ignore
                classSchedule[day].on ? classDetails.nickname : '',
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