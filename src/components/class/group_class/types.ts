import {Address, GraphqlTypeName} from "../../shared/types";
import {Course} from "../../course/types";
import {Student} from "../../user/student/types";
import {ClassTime} from "../types";

export interface GroupClass {
    id: string
    course: Course
    nickname: string
    start_date: Date
    end_date: Date
    class_settings: GroupClassSettings
    schedule: GroupClassSchedule
    enrollments: GroupClassEnrollment[]
    __typename?: GraphqlTypeName
}


export interface GroupClassSettings {
    online: Boolean
    min_students: number
    max_students: number
    price_per_student: number
    address?: Address
    address_details?: string
    __typename?: GraphqlTypeName
}

export interface GroupClassSchedule {
    saturday?: ClassTime
    sunday?: ClassTime
    monday?: ClassTime
    tuesday?: ClassTime
    wednesday?: ClassTime
    thursday?: ClassTime
    friday?: ClassTime
    __typename?: GraphqlTypeName
}

export interface GroupClassEnrollment {
    id: string
    student: Student
    group_class: GroupClass
    status: GroupClassEnrollmentStatus
    __typename?: GraphqlTypeName
}

export enum GroupClassEnrollmentStatus {
    REQUESTED,
    CONFIRMED,
    ON_WAITING_LIST,
    CANCELED,
    DECLINED,
    WITHDRAWN,
}