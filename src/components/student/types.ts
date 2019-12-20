export interface StudentProfileHeaderProps {
    id: number,
    name: string,
    username: string,
}

export interface StudentDetails {
    interests: string[],
    level: string,
    contactInfo: ContactInformation
}

export interface ContactInformation {
    whatsapp?: string,
    phone?: string,
    email?: string,
}

export interface StudentProfileProps {
    student: Student
}

export interface Student {
    id: number,
    name: string,
    username: string,
    details: StudentDetails
}

export interface StudentProfileBodyProps {
    details: StudentDetails
}