import React from 'react';
import CoursesList from './CoursesList';
import COURSES from '../../data/courses';


const CoursesPage = () => {
    return (
        <div>
            {
                // @ts-ignore
                <CoursesList courses={COURSES}/>
            }
        </div>
    );
};

export default CoursesPage;