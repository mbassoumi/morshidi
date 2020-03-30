import React from 'react';
import StudentProfileHeader from './StudentProfileHeader';
import {StudentProps} from './types';
import Card from '../shared/Card';
import StudentProfileBody from './StudentProfileBody';

const StudentProfile = ({student}: StudentProps) => {
    return (
        <div>
            <StudentProfileHeader student={student}/>
            <Card className="w-3/4 mt-4 mx-auto">
                <StudentProfileBody student={student}/>
            </Card>
        </div>
    );
};

export default StudentProfile;