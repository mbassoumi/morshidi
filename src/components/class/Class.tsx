import React, {useState} from 'react';
import ClassHeader from './ClassHeader';
import ClassPreview from './ClassPreview';
import TabButton from '../shared/TabButton';
import CourseOverview from './CourseOverview';
import CourseNotifications from './CourseNotifications';
import {ClassProps} from './types';

const COURSE_OVERVIEW = 'COURSE_OVERVIEW';
const NOTIFICATIONS = 'NOTIFICATIONS';


const Class = ({classDetails}: ClassProps) => {
    const [componentName, setComponentName] = useState(COURSE_OVERVIEW);


    return (
        <div>
            <ClassHeader name={classDetails.name} nickname={classDetails.nickname} id={classDetails.id}/>

            <div className="flex pt-2 justify-center">
                <TabButton text="Course overview" active={componentName === COURSE_OVERVIEW}
                           onClick={() => setComponentName(COURSE_OVERVIEW)}/>
                <TabButton text="Notifications" active={componentName === NOTIFICATIONS}
                           onClick={() => setComponentName(NOTIFICATIONS)}/>
            </div>

            <ClassPreview>
                {
                    componentName === COURSE_OVERVIEW
                        ?
                        <CourseOverview courseOverview={classDetails.courseOverview}/>
                        :
                        <CourseNotifications/>
                }
            </ClassPreview>
        </div>
    );
};

export default Class;