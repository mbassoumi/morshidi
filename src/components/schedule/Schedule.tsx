import React, {useRef} from "react";
import {Chart} from "react-google-charts";
import {ScheduleProps} from "./types";
import {Spin} from "antd";
import {useWindowSize} from "../../hooks/useWindowSize";


const Schedule = ({schedule}: ScheduleProps) => {

//     // set a padding value to cover the height of title and axis values
//     var paddingHeight = 40;
// // set the height to be covered by the rows
//     var rowHeight = data.getNumberOfRows() * 15;
// // set the total chart height
//     var chartHeight = rowHeight + paddingHeight;

    const chartRef = useRef(null);
    const [width, height] = useWindowSize();

    console.log(chartRef);


    return (
        <Chart
            ref={chartRef}
            key={Math.random()}
            chartType="Timeline"
            height={`100%`}
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