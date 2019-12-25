import React from 'react';

import TeacherProfileHeader from './TeacherProfileHeader';
import Card from '../shared/Card';
import TeacherProfileBody from './TeacherProfileBody';
import {TeacherProfileProps} from './types';


const TeacherProfile = ({teacher}: TeacherProfileProps) => {
    return (
        <div>
            <TeacherProfileHeader
                id={teacher.id}
                name={teacher.name}
                username={teacher.username}
                from={teacher.from}
                classes={teacher.classes}
                sessions={teacher.sessions}
                followers={teacher.followers}
                rating={teacher.rating}
            />
            <Card>
                <TeacherProfileBody details={teacher.details}/>
            </Card>

        </div>
    );
};

export default TeacherProfile;