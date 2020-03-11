import {Props as ReactSelectProps} from 'react-select/src/Select';

export interface TabButtonProps {
    active: boolean,
    onClick: () => void,
    text: string
}

export interface TagProps {
    text: string,
}

export interface CircleImgProps {
    src: string | any,
    alt: string,
}

export interface CardProps {
    children: any,
    className?: string
}

type InputFieldType = 'text' | 'number';


export interface InputFieldProps {
    className?: string,
    label?: string,
    id: string,
    name: string,
    type: InputFieldType,
    placeholder?: string,
    disabled?: boolean,
    value?: any
}

export interface TextAreaFieldProps {
    className?: string,
    label?: string,
    id: string,
    name: string,
    placeholder?: string,
    rows?: number,
}

export type SelectFieldProps = ReactSelectProps & { name: string }

export interface CheckboxFieldProps {
    id: string,
    name: string,
    children?: any
}

export interface Rating {
    average: number,
    count: number
}


export interface SelectObject {
    value: string,
    label: string,
    __isNew?: boolean
}