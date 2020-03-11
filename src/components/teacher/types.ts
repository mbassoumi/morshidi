import {Rating, SelectObject} from '../shared/types';

export interface TeacherFormProps {
    defaultValues: any,
    serverErrors: any,
    cities: SelectObject[],
    fields: SelectObject[],
    levels: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

export interface Teacher {
    id: number,
    name: string,
    username: string,
    from: string,
    classes: number,
    sessions: number,
    followers: number,
    rating: Rating
    aboutMe: string,
    fields: string[],
    levels: string[],
    whatsapp: string,
    phone: string,
    email: string
}

export interface TeacherProps {
    teacher: Teacher,
}