export interface ClassHeaderProps {
    name: string,
    nickname: string,
    id: number
}

export interface ClassPreviewProps {
    children: any
}

export interface CourseOverviewProps {
    courseOverview: CourseOverviewDetails
}

export interface CourseOverviewDetails {
    fields: string[],
    targetLevels: string[],
    description: string,
    requirements: string[]
}

export interface ClassDetails {
    id: number,
    name: string,
    nickname: string,
    courseOverview: CourseOverviewDetails
}

export interface ClassProps {
    classDetails: ClassDetails
}

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

interface SelectObject {
    value: string,
    label: string,
    __isNew?: boolean
}