export interface TeacherProfileHeaderProps {
    id: number,
    name: string,
    username: string,
    classes: number,
    sessions: number,
    followers: number,
    rating: Rating
}

export interface Rating {
    avg: number,
    count: number
}

export interface TeacherProfileBodyProps {
    details: TeacherProfileBodyDetails,
}

export interface TeacherProfileBodyDetails {
    aboutMe: string,
    fields: string[],
    levels: string[],
    contactInfo: ContactInformation
}

export interface ContactInformation {
    whatsapp?: string,
    phone?: string,
    email?: string,
}

export interface TeacherProfileProps {
    teacher: TeacherDetails,
}

export interface TeacherDetails {
    id: number,
    name: string,
    username: string,
    classes: number,
    sessions: number,
    followers: number,
    rating: Rating,
    details: TeacherProfileBodyDetails
}