import React from 'react';
import StudentProfileHeader from './StudentProfileHeader';
import {StudentProfileProps} from './types';
import Card from '../shared/Card';
import StudentProfileBody from './StudentProfileBody';

const StudentProfile = ({student}: StudentProfileProps) => {
    return (
        <div>
            <StudentProfileHeader id={student.id} name={student.name} username={student.username}/>
            <Card>
                <StudentProfileBody details={student.details}/>
            </Card>
        </div>
    );
};

export default StudentProfile;