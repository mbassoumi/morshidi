import React, {useEffect, useState} from 'react';
import ClassHeader from './ClassHeader';
import TabButton from '../shared/TabButton';
import CourseOverview from '../course/CourseOverview';
import CourseNotifications from './CourseNotifications';
import {ClassDetails} from './types';
import StudentList from '../student/StudentList';
import Card from '../shared/Card';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import CLASSES from '../../data/classes';
import COURSES from '../../data/courses';
import NotFoundException from '../shared/NotFoundException';
import {useRouteQuery} from '../../hooks/useRouteQuery';
import {CourseType} from '../course/types';
import ClassOverview from './ClassOverview';
import TeacherCard from '../teacher/TeacherCard';

const OVERVIEW = 'OVERVIEW';
const NOTIFICATIONS = 'NOTIFICATIONS';
const STUDENTS = 'STUDENTS';


const ClassPage = ({match}: RouteComponentProps) => {
    const [componentName, setComponentName] = useState(OVERVIEW);

    let routeQuery = useRouteQuery();
    const currentTab = routeQuery.get('tab');

    useEffect(() => {
        if (currentTab) {
            setComponentName(currentTab.toUpperCase());
        }
    }, [currentTab]);


    //@ts-ignore
    const classId = parseInt(match.params.class_id);


    //@ts-ignore
    const classDetails: ClassDetails | undefined = CLASSES.find(item => item.id === classId);

    //@ts-ignore
    const course: CourseType | undefined = COURSES.find(item => item.id === classDetails?.course_id);

    const renderTapComponent = () => {
        if (classDetails === undefined) {
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
                    <StudentList students={classDetails?.students}/>
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
                                        course && <ClassOverview classDetails={classDetails}/>
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
                classDetails ? <div>
                        <ClassHeader classDetails={classDetails}/>

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

export default ClassPage;