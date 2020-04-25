import {SelectObject} from '../shared/types';
import {ClassDetails} from "../class/types";

export interface StudentFormProps {
    defaultValues: any,
    serverErrors: any,
    cities: SelectObject[],
    interests: SelectObject[],
    levels: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

export interface Student {
    __typename: 'Student'
    id: number,
    name: string,
    username: string,
    interests: string[],
    level: string,
    whatsapp: string,
    phone: string,
    email: string,
    picture: string,
    activeClasses?: any
}

export interface StudentProps {
    student: Student
}

export interface StudentListProps {
    students: Student[],
}