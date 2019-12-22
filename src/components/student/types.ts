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

export interface StudentFormProps {
    defaultValues: any,
    serverErrors: any,
    cities: SelectObject[],
    interests: SelectObject[],
    levels: SelectObject[],
    onSubmit: (values: any, {setSubmitting}: any) => void
}

interface SelectObject {
    value: string,
    label: string,
    __isNew?: boolean
}