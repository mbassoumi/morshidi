import {GroupClass} from "../components/class/group_class/types";
import COURSES from "./courses";
import GROUP_CLASS_SETTINGS from "./partial/group_class_settings";
import GROUP_CLASS_SCHEDULES from "./partial/group_class_schedules";

const TYPE_NAME = 'GroupClass';

const GROUP_CLASSES: GroupClass[] = [
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000010000000',
        course: COURSES[0],
        nickname: 'group_class_1',
        start_date: new Date(2020, 4, 1),
        end_date: new Date(2020, 6, 1),
        class_settings: GROUP_CLASS_SETTINGS[0],
        schedule: GROUP_CLASS_SCHEDULES[0],
        enrollments: []
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000020000000',
        course: COURSES[1],
        nickname: 'group_class_2',
        start_date: new Date(2020, 4, 1),
        end_date: new Date(2020, 6, 1),
        class_settings: GROUP_CLASS_SETTINGS[1],
        schedule: GROUP_CLASS_SCHEDULES[6],
        enrollments: []
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000030000000',
        course: COURSES[2],
        nickname: 'group_class_3',
        start_date: new Date(2020, 4, 1),
        end_date: new Date(2020, 6, 1),
        class_settings: GROUP_CLASS_SETTINGS[2],
        schedule: GROUP_CLASS_SCHEDULES[2],
        enrollments: []
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000040000000',
        course: COURSES[2],
        nickname: 'group_class_4',
        start_date: new Date(2020, 4, 1),
        end_date: new Date(2020, 6, 1),
        class_settings: GROUP_CLASS_SETTINGS[3],
        schedule: GROUP_CLASS_SCHEDULES[8],
        enrollments: []
    },

];

export default GROUP_CLASSES;