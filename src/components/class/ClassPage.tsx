import React, {useEffect, useState} from 'react';
import ClassHeader from './ClassHeader';
import TabButton from '../shared/TabButton';
import CourseOverview from './CourseOverview';
import CourseNotifications from './CourseNotifications';
import {ClassDetails} from './types';
import StudentList from '../student/StudentList';
import Card from '../shared/Card';
import {RouteComponentProps} from 'react-router-dom';
import CLASSES from '../../data/classes';
import NotFoundException from '../shared/NotFoundException';
import {useRouteQuery} from '../../hooks/useRouteQuery';
import {useHistory} from 'react-router-dom';

const COURSE_OVERVIEW = 'COURSE_OVERVIEW';
const NOTIFICATIONS = 'NOTIFICATIONS';
const STUDENTS = 'STUDENTS';


const ClassPage = ({match}: RouteComponentProps) => {
    const [componentName, setComponentName] = useState(COURSE_OVERVIEW);

    let routeQuery = useRouteQuery();
    const currentTab = routeQuery.get('tab');

    useEffect(() => {
        if (currentTab) {
            setComponentName(currentTab.toUpperCase());
        }
    }, [currentTab]);


    //@ts-ignore
    // const courseId = parseInt(match.params.course_id);
    //@ts-ignore
    const classId = parseInt(match.params.class_id);

    const classDetails: ClassDetails | undefined = CLASSES.find(item => item.id === classId);

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
            case COURSE_OVERVIEW:
            default:
                return (
                    <Card className="w-3/4 mt-4 mx-auto">
                        <CourseOverview classDetails={classDetails}/>
                    </Card>
                );
        }
    };

    const history = useHistory();

    const clickTab = (componentName: string) => {
        history.push({
            search: `?tab=${componentName}`
        })
    };

    return (
        <div>
            {
                classDetails ? <div>
                        <ClassHeader classDetails={classDetails}/>

                        <div className="flex pt-2 justify-center">
                            <TabButton text="Course overview" active={componentName === COURSE_OVERVIEW}
                                       onClick={() => clickTab(COURSE_OVERVIEW)}/>
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