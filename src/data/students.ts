import {Student} from "../components/user/student/types";
import USER_ACCOUNTS from "./partial/user_accounts";
import LEVELS from "./levels";
import FIELDS from "./fields";


const TYPE_NAME = 'Student';

const STUDENTS: Student[] = [
    {
        __typename: TYPE_NAME,
        user_account: USER_ACCOUNTS[3],
        group_classes: [],
        following: [
            // TEACHERS[0],
            // TEACHERS[1],
        ],
        level: LEVELS[1],
        fields: [
            FIELDS[0],
            FIELDS[1],
            FIELDS[2],
        ]
    },
    {
        __typename: TYPE_NAME,
        user_account: USER_ACCOUNTS[4],
        group_classes: [],
        following: [
            // TEACHERS[1],
        ],
        level: LEVELS[3],
        fields: [
            FIELDS[2],
            FIELDS[3],
        ]
    },
];

export default STUDENTS;