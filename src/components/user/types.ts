import {Address, GraphqlTypeName} from "../shared/types";
import {Student} from "./student/types";
import {Teacher} from "./teacher/types";


export type User = Student | Teacher

export interface UserAccount {
    id: string
    username: string
    first_name: string
    last_name: string
    avatar: Avatar
    date_of_birth: Date
    gender: Gender
    address: Address
    contact_info: ContactInfo[]
    roles: UserRole[]
    __typename?: GraphqlTypeName
}

export interface Avatar {
    thumb: string
    uri: string
    __typename?: GraphqlTypeName
}

type Gender = 'male' | 'female';

type ContactInfoType = 'phone' | 'email'

export interface ContactInfo {
    id: string
    type: ContactInfoType
    value: string
    confirmed: Boolean
    primary: Boolean
    __typename?: GraphqlTypeName
}

type UserRole = 'student' | 'teacher' | 'admin' | 'sale_point'
