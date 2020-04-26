import React from 'react';
import StudentProfileHeader from './StudentProfileHeader';
import Card from '../../shared/Card';
import StudentProfileBody from './StudentProfileBody';
import {Student} from "./types";

interface StudentProfileProps {
    student: Student
}

const StudentProfile = ({student}: StudentProfileProps) => {
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