import React from 'react';

import Card from '../shared/Card';
import CourseHeader from './CourseHeader';
import CourseBody from './CourseBody';
import TeacherCard from '../teacher/TeacherCard';
import ClassesList from '../class/ClassesList';
import CLASSES from '../../data/classes';
import COURSES from '../../data/courses';
import {RouteComponentProps} from 'react-router-dom';
import {CourseType} from './types';
import NotFoundException from '../shared/NotFoundException';


const Course = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const courseId = parseInt(match.params.id);
    //@ts-ignore
    const course: CourseType = COURSES.find(item => item.id === courseId);
    const courseClasses = CLASSES.filter(item => item.course_id === courseId);
    return (
        <div className="pb-16">
            {
                course ? (
                        <>
                            <CourseHeader course={course}/>
                            <div className="flex justify-between flex-col lg:flex-row">
                                <div className="lg:w-3/4 mx-2">
                                    <Card className=" mt-4 mx-auto">
                                        <CourseBody course={course}/>
                                    </Card>
                                </div>
                                <div className=" lg:w-1/4 mx-2">
                                    <TeacherCard teacher={course.teacher}/>
                                </div>
                            </div>
                            {
                                courseClasses.length ?
                                    <ClassesList courseClasses={courseClasses}/>
                                    :
                                    <div className="flex justify-center">
                                        <Card className=" mt-4 mx-auto border-red-600 border-2 w-3/5">
                                            <div
                                                className="flex justify-center items-center text-center text-red-600 font-semibold uppercase tracking-wide h-32 w-full">
                                                No Classes Available
                                            </div>
                                        </Card>
                                    </div>
                            }
                        </>
                    )
                    :
                    <NotFoundException/>
            }

        </div>
    );
};

export default Course;