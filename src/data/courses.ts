import {Course} from "../components/course/types";
import FIELDS from "./fields";
import LEVELS from "./levels";
import SEARCH_KEYWORDS from "./search_keywords";
import TEACHERS from "./teachers";
import REVIEWS from "./partial/reviews";
import GROUP_CLASS_SETTINGS from "./partial/group_class_settings";
import RATINGS from "./partial/ratings";

const TYPE_NAME = 'Course';

const COURSES: Course[] = [
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000001000000',
        title: 'Course 1',
        field: FIELDS[0],
        level: LEVELS[0],
        search_keywords: [
            SEARCH_KEYWORDS[0],
            SEARCH_KEYWORDS[1],
        ],
        description: 'This is a small discretion about the course',
        requirements: [
            'labtop',
            'book',
            'paper',
            'pencil'
        ],
        teacher: TEACHERS[0],
        rating: RATINGS[0],
        group_classes: [],
        default_online_class_settings: GROUP_CLASS_SETTINGS[2],
        default_physical_class_settings: GROUP_CLASS_SETTINGS[0],
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000002000000',
        title: 'Course 2',
        field: FIELDS[1],
        level: LEVELS[1],
        search_keywords: [
            SEARCH_KEYWORDS[1],
            SEARCH_KEYWORDS[2],
        ],
        description: 'This is a small discretion about the course',
        requirements: [
            'paper',
            'pencil'
        ],
        teacher: TEACHERS[1],
        rating: RATINGS[1],
        group_classes: [],
        default_online_class_settings: GROUP_CLASS_SETTINGS[3],
        default_physical_class_settings: GROUP_CLASS_SETTINGS[1],
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000003000000',
        title: 'Course 3',
        field: FIELDS[2],
        level: LEVELS[2],
        search_keywords: [
            SEARCH_KEYWORDS[2],
            SEARCH_KEYWORDS[1],
        ],
        description: 'This is a small discretion about the course',
        requirements: [],
        teacher: TEACHERS[0],
        rating: RATINGS[2],
        group_classes: [],
        default_online_class_settings: GROUP_CLASS_SETTINGS[3],
        default_physical_class_settings: GROUP_CLASS_SETTINGS[1],
    },
];

export default COURSES;