import React from 'react';

import TeacherProfileHeader from './TeacherProfileHeader';
import Card from '../../shared/Card';
import TeacherProfileBody from './TeacherProfileBody';
import {Teacher} from './types';

interface TeacherProfileProps {
    teacher: Teacher
}

const TeacherProfile = ({teacher}: TeacherProfileProps) => {
    return (
        <div>
            <TeacherProfileHeader teacher={teacher}/>
            <Card className="w-3/4 mt-4 mx-auto">
                <TeacherProfileBody teacher={teacher}/>
            </Card>

        </div>
    );
};

export default TeacherProfile;
