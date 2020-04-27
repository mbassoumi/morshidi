import {UserAccount} from "../../components/user/types";
import CITIES from "../cities";
import CONTACT_INFOS from "./contact_infos";
import ADDRESSES from "./addresses";

const USER_ACCOUNTS: UserAccount[] = [
    {
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000000',
        username: 'admin',
        first_name: 'Morshidi',
        last_name: 'Admin',
        avatar: {
            thumb: '/img/user1.jpg',
            uri: '/img/user1.jpg'
        },
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
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000001',
        username: 'teacher_1',
        first_name: 'Male',
        last_name: 'Teacher',
        avatar: {
            thumb: '/img/user1.jpg',
            uri: '/img/user1.jpg'
        },
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
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000002',
        username: 'teacher_2',
        first_name: 'Female',
        last_name: 'Teacher',
        avatar: {
            thumb: '/img/user7.jpeg',
            uri: '/img/user7.jpeg'
        },
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
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000003',
        username: 'student_1',
        first_name: 'Male',
        last_name: 'Student',
        avatar: {
            thumb: '/img/user2.jpg',
            uri: '/img/user2.jpg'
        },
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
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000000004',
        username: 'student_2',
        first_name: 'Female',
        last_name: 'Student',
        avatar: {
            thumb: '/img/user6.jpg',
            uri: '/img/user6.jpg'
        },
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