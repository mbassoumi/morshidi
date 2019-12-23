export interface CourseFormProps {
    defaultValues: any,
    serverErrors: any,
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