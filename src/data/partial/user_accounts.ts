import {UserAccount} from "../../components/user/types";
import CITIES from "../cities";
import CONTACT_INFOS from "./contact_infos";
import ADDRESSES from "./addresses";
import AVATARS from "./avatars";

const TYPE_NAME = 'UserAccount';

const USER_ACCOUNTS: UserAccount[] = [
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000000',
        username: 'admin',
        first_name: 'Morshidi',
        last_name: 'Admin',
        avatar: AVATARS[0],
        date_of_birth: new Date(1995, 5, 29),
        gender: 'male',
        address: ADDRESSES[0],
        contact_info: [
            CONTACT_INFOS[0],
            CONTACT_INFOS[4],
            CONTACT_INFOS[5],
        ],
        roles: [
            'admin'
        ]
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000001',
        username: 'teacher_1',
        first_name: 'Male',
        last_name: 'Teacher',
        avatar: AVATARS[1],
        date_of_birth: new Date(1995, 5, 29),
        gender: 'male',
        address: ADDRESSES[1],
        contact_info: [
            CONTACT_INFOS[0],
            CONTACT_INFOS[4],
            CONTACT_INFOS[5],
        ],
        roles: [
            'teacher'
        ]
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000002',
        username: 'teacher_2',
        first_name: 'Female',
        last_name: 'Teacher',
        avatar: AVATARS[2],
        date_of_birth: new Date(1985, 5, 29),
        gender: 'female',
        address: ADDRESSES[2],
        contact_info: [
            CONTACT_INFOS[1],
            CONTACT_INFOS[3],
            CONTACT_INFOS[4],
        ],
        roles: [
            'teacher'
        ]
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000003',
        username: 'student_1',
        first_name: 'Male',
        last_name: 'Student',
        avatar: AVATARS[3],
        date_of_birth: new Date(2000, 5, 29),
        gender: 'male',
        address: ADDRESSES[3],
        contact_info: [
            CONTACT_INFOS[2],
            CONTACT_INFOS[3],
            CONTACT_INFOS[5],
        ],
        roles: [
            'student'
        ]
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000004',
        username: 'student_2',
        first_name: 'Female',
        last_name: 'Student',
        avatar: AVATARS[4],
        date_of_birth: new Date(2003, 5, 29),
        gender: 'female',
        address: ADDRESSES[4],
        contact_info: [
            CONTACT_INFOS[1],
            CONTACT_INFOS[3],
            CONTACT_INFOS[4],
        ],
        roles: [
            'student'
        ]
    },

];

export default USER_ACCOUNTS;