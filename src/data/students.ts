import CLASSES from './classes';
import {Student} from "../components/student/types";

const STUDENTS: Student[] = [
    {
        __typename: 'Student',
        id: 1,
        name: 'Majd Bassoumi',
        username: '@mbassoumi',
        interests: ['math', 'physics', 'interest 3', 'interest 4', 'interest 5', 'interest 6', 'interest 7'],
        level: 'tawjihi',
        whatsapp: '(925)-332-9428',
        phone: '0598-569530',
        email: 'mbbassoumi@gmail.com',
        picture: '/img/user1.jpg',
        // activeClasses: CLASSES.slice(0, 4),
        activeClasses: []

    },
    {
        __typename: 'Student',
        id: 2,
        name: 'Jihad Bassoumi',
        username: '@jbassoumi',
        interests: ['sport', 'computer'],
        level: 'university',
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jehadbassoumi@gmail.com',
        picture: '/img/user2.jpg',
        // activeClasses: CLASSES.slice(1, 5),
        activeClasses: []
    },
    {
        __typename: 'Student',
        id: 3,
        name: '3 Bassoumi',
        username: '@mbassoumi',
        interests: ['math', 'physics'],
        level: 'tawjihi',
        whatsapp: '(925)-332-9428',
        phone: '0598-569530',
        email: 'mbbassoumi@gmail.com',
        picture: '/img/user3.jpg',
        // activeClasses: CLASSES.slice(0, 2),
        activeClasses: []
    },
    {
        __typename: 'Student',
        id: 4,
        name: '4 Bassoumi',
        username: '@jbassoumi',
        interests: ['sport', 'computer'],
        level: 'university',
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jehadbassoumi@gmail.com',
        picture: '/img/user4.jpg',
        // activeClasses: CLASSES.slice(4, 6),
        activeClasses: []
    },
    {
        __typename: 'Student',
        id: 5,
        name: '5 Bassoumi',
        username: '@mbassoumi',
        interests: ['math', 'physics'],
        level: 'tawjihi',
        whatsapp: '(925)-332-9428',
        phone: '0598-569530',
        email: 'mbbassoumi@gmail.com',
        picture: '/img/user5.jpg',
        // activeClasses: CLASSES.slice(2, 5),
        activeClasses: [],
    },
    {
        __typename: 'Student',
        id: 6,
        name: '6 Bassoumi',
        username: '@jbassoumi',
        interests: ['sport', 'computer'],
        level: 'university',
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jehadbassoumi@gmail.com',
        picture: '/img/user6.jpg',
        activeClasses: [],
        // activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Student',
        id: 7,
        name: '7 Bassoumi',
        username: '@mbassoumi',
        interests: ['math', 'physics'],
        level: 'tawjihi',
        whatsapp: '(925)-332-9428',
        phone: '0598-569530',
        email: 'mbbassoumi@gmail.com',
        picture: '/img/user7.jpeg',
        activeClasses: [],
        // activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Student',
        id: 8,
        name: '8 Bassoumi',
        username: '@jbassoumi',
        interests: ['sport', 'computer'],
        level: 'university',
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jehadbassoumi@gmail.com',
        picture: '/img/user8.png',
        activeClasses: [],
        // activeClasses: CLASSES.slice(0, 4)
    },

];

export default STUDENTS;