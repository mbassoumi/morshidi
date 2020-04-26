import {UserAccount} from "../types";
import {Field, Level, Rating} from "../../shared/types";
import {Student} from "../student/types";
import {PrivateClass} from "../../class/private_class/types";
import {Course} from "../../course/types";

export interface Teacher {
    user_account: UserAccount
    rating: Rating
    bio: string
    followers: Student[]
    private_classes: PrivateClass[]
    courses: Course[]
    levels: Level[]
    fields: Field[]
}