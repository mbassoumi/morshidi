import {HTMLProps} from "react";
import {Props as ReactSelectProps} from 'react-select/src/Select';

export interface InputFieldProps extends HTMLProps<HTMLInputElement>{
    name: string
}

export interface TextAreaFieldProps extends HTMLProps<HTMLTextAreaElement>{
    name: string
}

// export interface SelectFieldProps extends ReactSelectProps{
//     name: string
// }
//
export type SelectFieldProps = ReactSelectProps & { name: string }
