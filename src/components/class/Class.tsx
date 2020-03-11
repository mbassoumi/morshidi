import React, {useState} from 'react';
import ClassHeader from './ClassHeader';
import TabButton from '../shared/TabButton';
import CourseOverview from './CourseOverview';
import CourseNotifications from './CourseNotifications';
import {ClassDetailsProps} from './types';
import Card from '../shared/Card';

const COURSE_OVERVIEW = 'COURSE_OVERVIEW';
const NOTIFICATIONS = 'NOTIFICATIONS';


const Class = ({classDetails}: ClassDetailsProps) => {
    const [componentName, setComponentName] = useState(COURSE_OVERVIEW);



    return (
        <div>
            <ClassHeader classDetails={classDetails}/>

            <div className="flex pt-2 justify-center">
                <TabButton text="Course overview" active={componentName === COURSE_OVERVIEW}
                           onClick={() => setComponentName(COURSE_OVERVIEW)}/>
                <TabButton text="Notifications" active={componentName === NOTIFICATIONS}
                           onClick={() => setComponentName(NOTIFICATIONS)}/>
            </div>
            <Card>
                {
                    componentName === COURSE_OVERVIEW
                        ?
                        <CourseOverview classDetails={classDetails}/>
                        :
                        <CourseNotifications/>
                }
            </Card>
        </div>
    );
};

export default Class;