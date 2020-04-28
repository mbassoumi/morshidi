import {UserAccount} from "../types";
import {GroupClass} from "../../class/group_class/types";
import {Teacher} from "../teacher/types";
import {Field, GraphqlTypeName, Level} from "../../shared/types";

export interface Student {
    user_account: UserAccount
    group_classes: GroupClass[]
    following: Teacher[]
    level: Level
    fields: Field[]
    __typename?: GraphqlTypeName,
}