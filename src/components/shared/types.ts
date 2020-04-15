import {Props as ReactSelectProps} from 'react-select/src/Select';

export interface TabButtonProps {
    active: boolean,
    onClick: () => void,
    text: string
}

export interface TagProps {
    text: string,
    bgColor?: string,
    textColor?: string,
}

export interface CircleImgProps {
    src: string,
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

export interface RatingType {
    average: number,
    count: number | undefined,
    readonly?: boolean
    onChange?: () => void
}


export interface SelectObject {
    value: string,
    label: string,
    __isNew?: boolean
}