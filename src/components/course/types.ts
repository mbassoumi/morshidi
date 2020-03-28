import {Teacher} from '../teacher/types';
import {RatingType, SelectObject} from '../shared/types';

export interface CourseFormProps {
    defaultValues: any,
    serverErrors: any,
    fields: SelectObject[],
    levels: SelectObject[],
    keywords: SelectObject[],
    cities: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
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
    teacher: Teacher,
    rating: RatingType,
}