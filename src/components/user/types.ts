import {Address} from "../shared/types";
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
}

export interface Avatar {
    thumb: string
    uri: string
}

export enum Gender {
    MALE,
    FEMALE
}

export enum ContactInfoType {
    EMAIL,
    PHONE
}

export interface ContactInfo {
    id: string
    type: ContactInfoType
    value: string
    confirmed: Boolean
    primary: Boolean
}

enum UserRole {
    STUDENT,
    TEACHER,
    ADMIN,
    SALE_POINT
}
