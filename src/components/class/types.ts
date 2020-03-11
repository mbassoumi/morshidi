import {SelectObject} from '../shared/types';

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

export interface ClassDetails {
    id: number,
    name: string,
    nickname: string,
    fields: string[],
    targetLevels: string[],
    description: string,
    requirements: string[],
}

export interface ClassDetailsProps {
    classDetails: ClassDetails
}