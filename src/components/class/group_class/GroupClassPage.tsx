import React, {useEffect, useState} from 'react';
import GroupClassHeader from './GroupClassHeader';
import TabButton from '../../shared/TabButton';
import CourseOverview from '../../course/CourseOverview';
import CourseNotifications from './CourseNotifications';
import {GroupClass} from './types';
import StudentList from '../../user/student/StudentList';
import Card from '../../shared/Card';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import Group_classes from '../../../data/group_classes';
import COURSES from '../../../data/courses';
import NotFoundException from '../../shared/NotFoundException';
import {useRouteQuery} from '../../../hooks/useRouteQuery';
import {Course} from '../../course/types';
import GroupClassOverview from './GroupClassOverview';
import TeacherCard from '../../user/teacher/TeacherCard';

const OVERVIEW = 'OVERVIEW';
const NOTIFICATIONS = 'NOTIFICATIONS';
const STUDENTS = 'STUDENTS';


const GroupClassPage = ({match}: RouteComponentProps) => {
    const [componentName, setComponentName] = useState(OVERVIEW);

    let routeQuery = useRouteQuery();
    const currentTab = routeQuery.get('tab');

    useEffect(() => {
        if (currentTab) {
            setComponentName(currentTab.toUpperCase());
        }
    }, [currentTab]);


    //@ts-ignore
    const classId = match.params.class_id;

    //@ts-ignore
    const courseId = match.params.course_id;


    //@ts-ignore
    const groupClass: GroupClass = Group_classes.find(item => item.id === classId);

    //@ts-ignore
    const course: Course = COURSES.find(item => item.id === courseId);

    const renderTapComponent = () => {
        if (groupClass === undefined) {
            return '';
        }


        switch (componentName) {
            case NOTIFICATIONS:
                return (
                    <Card className="w-3/4 mt-4 mx-auto">
                        <CourseNotifications/>
                    </Card>
                );
            case STUDENTS:
                return (
                    //@ts-ignore
                    <StudentList students={groupClass?.enrollments}/>
                );
            case OVERVIEW:
            default:
                return (
                    <div>
                        <div className="flex justify-between flex-col lg:flex-row">
                            <div className="lg:w-3/4 mx-2">
                                <Card className="mt-4 mx-auto">
                                    {
                                        course && <CourseOverview course={course}/>
                                    }
                                </Card>
                                <Card className="mt-4 mb-12 mx-auto">
                                    {
                                        course && <GroupClassOverview groupClass={groupClass}/>
                                    }
                                </Card>
                            </div>
                            <div className=" lg:w-1/4 mx-2">
                                {course && <TeacherCard teacher={course.teacher}/>}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    const history = useHistory();

    const clickTab = (componentName: string) => {
        history.push({
            search: `?tab=${componentName}`
        });
    };

    return (
        <div>
            {
                groupClass ? <div>
                        <GroupClassHeader groupClass={groupClass}/>

                        <div className="flex pt-2 justify-center">
                            <TabButton text="Overview" active={componentName === OVERVIEW}
                                       onClick={() => clickTab(OVERVIEW)}/>
                            <TabButton text="Notifications" active={componentName === NOTIFICATIONS}
                                       onClick={() => clickTab(NOTIFICATIONS)}/>
                            <TabButton text="Students" active={componentName === STUDENTS}
                                       onClick={() => clickTab(STUDENTS)}/>

                        </div>
                        {
                            renderTapComponent()
                        }
                    </div>
                    : <NotFoundException/>
            }
        </div>
    );
};

export default GroupClassPage;