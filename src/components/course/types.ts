import {Field, GraphqlTypeName, Level, Rating, SearchKeyword} from "../shared/types";
import {Teacher} from "../user/teacher/types";
import {GroupClassSettings, GroupClass} from "../class/group_class/types";

export interface Course {
    id: string
    title: string
    field: Field
    level: Level
    search_keywords: SearchKeyword[]
    description: string
    requirements: string[]
    teacher: Teacher
    rating: Rating
    group_classes: GroupClass[]
    default_online_class_settings: GroupClassSettings
    default_physical_class_settings: GroupClassSettings
    __typename?: GraphqlTypeName
}