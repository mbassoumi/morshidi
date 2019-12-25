import {TeacherDetails} from '../teacher/types';

export interface CourseFormProps {
    defaultValues: any,
    serverErrors: any,
    fields: SelectObject[],
    levels: SelectObject[],
    keywords: SelectObject[],
    cities: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

interface SelectObject {
    value: string,
    label: string,
    __isNew?: boolean
}

export interface DefaultPhysicalClassSettingProps {
    values: object,
    cities: SelectObject[],
}

export interface CourseProps {
    course: Course
}

export interface Course {
    id: number,
    name: string,
    classes: number
    students: number,
    fields: string[],
    levels: string[],
    description: string,
    requirements: string[],
    teacher: TeacherDetails,
    rating: Rating,
}

export interface CourseHeaderProps {
    id: number,
    name: string,
    teacherName: string,
    classes: number
    students: number,
    rating: Rating,
}

export interface Rating {
    avg: number,
    count: number
}