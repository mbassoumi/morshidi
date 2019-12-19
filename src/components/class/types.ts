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