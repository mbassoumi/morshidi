import {Teacher} from "../components/user/teacher/types";
import USER_ACCOUNTS from "./partial/user_accounts";
import LEVELS from "./levels";
import FIELDS from "./fields";
import REVIEWS from "./partial/reviews";
import RATINGS from "./partial/ratings";

const TYPE_NAME = 'Teacher';

const TEACHERS: Teacher[] = [
    {
        __typename: TYPE_NAME,
        user_account: USER_ACCOUNTS[1],
        rating: RATINGS[0],
        bio: 'This is a small bio about me',
        followers: [
            // STUDENTS[0],
        ],
        private_classes: [],
        courses: [],
        levels: [
            LEVELS[0],
            LEVELS[1],
        ],
        fields: [
            FIELDS[0],
            FIELDS[1],
        ]
    },
    {
        __typename: TYPE_NAME,
        user_account: USER_ACCOUNTS[2],
        rating: RATINGS[1],
        bio: 'This is a small bio about me',
        followers: [
            // STUDENTS[0],
            // STUDENTS[1],
        ],
        private_classes: [],
        courses: [],
        levels: [
            LEVELS[2],
            LEVELS[3],
        ],
        fields: [
            FIELDS[2],
            FIELDS[3],
            FIELDS[4],
        ]
    },
];

export default TEACHERS;