import {SelectObject} from '../shared/types';

export interface StudentFormProps {
    defaultValues: any,
    serverErrors: any,
    cities: SelectObject[],
    interests: SelectObject[],
    levels: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

export interface Student {
    id: number,
    name: string,
    username: string,
    interests: string[],
    level: string,
    whatsapp: string,
    phone: string,
    email: string
}

export interface StudentProps {
    student: Student
}