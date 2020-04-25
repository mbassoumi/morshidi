import {SelectObject} from '../shared/types';
import {Student} from '../student/types';
import {CourseType} from '../course/types';

export interface ClassFormProps {
    defaultValues: any,
    serverErrors: any,
    courseName: string,
    fields: SelectObject[],
    levels: SelectObject[],
    keywords: SelectObject[],
    cities: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

interface ScheduleDayType {
    on: boolean,
    from: Date | undefined,
    to: Date | undefined
}

interface ScheduleType {
    saturday: ScheduleDayType,
    sunday: ScheduleDayType,
    monday: ScheduleDayType,
    tuesday: ScheduleDayType,
    wednesday: ScheduleDayType,
    thursday: ScheduleDayType,
    friday: ScheduleDayType,
}

interface ClassStudentDetails {
    minStudentPerClass: number | undefined,
    maxStudentPerClass: number | undefined,
    pricePerStudent: number | undefined,
}


export interface ClassDetails {
    __typename: 'Class',
    id: number,
    course_id: number,
    name: string,
    nickname: string,
    students: Student[],

    startDate: Date,
    endDate: Date,
    schedule: ScheduleType,
    isOnline: boolean,
    city?: string,
    physicalAddress?: string,
    online?: ClassStudentDetails,
    physical?: ClassStudentDetails,
    referralIncentive: number
}

export interface ClassDetailsProps {
    classDetails: ClassDetails,
}

export interface ClassesListProps {
    courseClasses: ClassDetails[],
    course: CourseType
}