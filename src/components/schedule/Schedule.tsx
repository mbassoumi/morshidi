import React from "react";
import {Chart} from "react-google-charts";
import {ScheduleProps} from "./types";
import {Spin} from "antd";


const Schedule = ({schedule}: ScheduleProps) => {

    return (
        <Chart
            key={Math.random()}
            chartType="Timeline"
            // height={`340px`}
            loader={<div className="flex justify-center items-center"><Spin/></div>}
            data={[
                [
                    {type: 'string', id: 'Day'},
                    {type: 'string', id: 'Course'},
                    {type: 'date', id: 'Start'},
                    {type: 'date', id: 'End'},
                ],
                ...schedule,
            ]}
        />
    )
};

export default Schedule;