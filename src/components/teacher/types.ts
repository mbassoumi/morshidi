import {RatingType, SelectObject} from '../shared/types';
import {ClassDetails} from "../class/types";

export interface TeacherFormProps {
    defaultValues: any,
    serverErrors: any,
    cities: SelectObject[],
    fields: SelectObject[],
    levels: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

export interface Teacher {
    __typename: 'Teacher',
    id: number,
    name: string,
    username: string,
    from: string,
    classes: number,
    sessions: number,
    followers: number,
    rating: RatingType
    aboutMe: string,
    fields: string[],
    levels: string[],
    whatsapp: string,
    phone: string,
    email: string,
    picture: string,
    activeClasses?: ClassDetails[]
}

export interface TeacherProps {
    teacher: Teacher,
}