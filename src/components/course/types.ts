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
    course: CourseType
}

export interface CourseType {
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


    keywords: string[],
    city?: string,
    physicalAddress?: string,
    minStudentPerPhysicalClass?: number,
    maxStudentPerPhysicalClass?: number,
    pricePerPhysicalStudent?: number,
    minStudentPerOnlineClass?: number,
    maxStudentPerOnlineClass?: number,
    pricePerOnlineStudent?: number,
}

export interface CoursesListProps {
    courses: CourseType[]
}