import CLASSES from "./classes";
import {Teacher} from "../components/teacher/types";

const TEACHER: Teacher[] = [
    {
        __typename: 'Teacher',
        id: 1,
        name: 'Teacher 1',
        username: '@teacher_1',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 15,
            average: 4.5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user1.jpg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 2,
        name: 'Teacher 2',
        username: '@teacher_2',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 429,
            average: 2.5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['english'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user2.jpg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 3,
        name: 'Teacher 3',
        username: '@teacher_3',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 123,
            average: 3
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['computer'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user3.jpg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 4,
        name: 'Teacher 4',
        username: '@teacher_4',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 938,
            average: 2
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'english', 'computer'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user4.jpg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 5,
        name: 'Teacher 5',
        username: '@teacher_5',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 8938,
            average: 5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'english'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user5.jpg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 6,
        name: 'Teacher 6',
        username: '@teacher_6',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 1329,
            average: 3.3
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: [ 'english', 'computer'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user6.jpg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 7,
        name: 'Teacher 7',
        username: '@teacher_7',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 4329,
            average: 3.5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'computer'],
        levels: ['tawjihi'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user7.jpeg',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 8,
        name: 'Teacher 8',
        username: '@teacher_8',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 4329,
            average: 3.5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'english', 'computer'],
        levels: ['first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user8.png',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 9,
        name: 'Teacher 9',
        username: '@teacher_9',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 4329,
            average: 3.5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'english', 'computer'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user9.png',
        activeClasses: CLASSES.slice(0, 4)
    },
    {
        __typename: 'Teacher',
        id: 10,
        name: 'Teacher 10',
        username: '@teacher_10',
        from: 'Ramallah',
        classes: 120,
        sessions: 50,
        followers: 400,
        rating: {
            count: 4329,
            average: 3.5
        },
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'english', 'computer'],
        levels: ['tawjihi', 'first grade'],
        whatsapp: '(925)-332-9428',
        phone: '0599-042378',
        email: 'jbesoomi@gmail.com',
        picture: '/img/user10.png',
        activeClasses: CLASSES.slice(0, 4)
    },
];

export default TEACHER;