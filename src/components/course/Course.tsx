import React from 'react';

import Card from '../shared/Card';
import {CourseProps} from './types';
import CourseHeader from './CourseHeader';
import CourseBody from './CourseBody';
import TeacherCard from '../teacher/TeacherCard';


const Course = ({course}: CourseProps) => {
    return (
        <div className="pb-16">
            <CourseHeader course={course}/>
            <Card>
                <CourseBody course={course}/>
            </Card>

            <TeacherCard teacher={course.teacher}/>
        </div>
    );
};

export default Course;