import {Teacher} from "../../user/teacher/types";
import {Student} from "../../user/student/types";
import {ClassTime} from "../types";

export interface PrivateClass {
    id: string
    teacher: Teacher
    student: Student
    time: ClassTime
}