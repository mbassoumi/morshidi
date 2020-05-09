import {UserAccount} from "../types";
import {Field, GraphqlTypeName, Level, Rating} from "../../shared/types";
import {Student} from "../student/types";
import {PrivateClass} from "../../class/private_class/types";
import {Course} from "../../course/types";

export interface Teacher {
    __typename?: GraphqlTypeName,
    user_account?: UserAccount
    rating?: Rating
    bio?: string
    followers?: Student[]
    private_classes?: PrivateClass[]
    courses?: Course[]
    levels?: Level[]
    fields?: Field[]
}