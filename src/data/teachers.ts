import {Teacher} from "../components/user/teacher/types";
import USER_ACCOUNTS from "./partial/user_accounts";
import LEVELS from "./levels";
import FIELDS from "./fields";
import REVIEWS from "./partial/reviews";

const TEACHERS: Teacher[] = [
    {
        user_account: USER_ACCOUNTS[1],
        rating: {
            count: 25,
            average: 4.5,
            reviews: [
                // REVIEWS[2],
                // REVIEWS[3],
            ],
        },
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
        user_account: USER_ACCOUNTS[2],
        rating: {
            count: 5,
            average: 1.5,
            reviews: [
                // REVIEWS[0],
                // REVIEWS[1],
                // REVIEWS[2],
            ],
        },
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
    }
];

export default TEACHERS;