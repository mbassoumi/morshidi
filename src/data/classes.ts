import STUDENTS from './students';

export default [
    {
        __typename: 'Class',
        id: 1,
        course_id: 1,
        name: 'Class 1',
        nickname: 'Class Nickname 1',

        students: STUDENTS.slice(0, 6),

        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: true,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: 20,
            maxStudentPerClass: 40,
            pricePerStudent: 190,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 2,
        course_id: 2,
        name: 'Class 2',
        nickname: 'Class Nickname 2',
        students: STUDENTS.slice(2, 6),

        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 3,
        course_id: 1,
        name: 'Class 3',
        nickname: 'Class Nickname 3',

        students: STUDENTS.slice(3, 9),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 4,
        course_id: 2,
        name: 'Class 4',
        nickname: 'Class Nickname 4',

        students: STUDENTS.slice(4),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 5,
        course_id: 3,
        name: 'Class 5',
        nickname: 'Class Nickname 5',
        students: STUDENTS.slice(3, 6),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 6,
        course_id: 3,
        name: 'Class 6',
        nickname: 'Class Nickname 6',

        students: STUDENTS.slice(5, 9),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 7,
        course_id: 4,
        name: 'Class 7',
        nickname: 'Class Nickname 7',
        students: STUDENTS.slice(0, 6),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 8,
        course_id: 5,
        name: 'Class 8',
        nickname: 'Class Nickname 8',
        students: [],
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: false,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: undefined,
            maxStudentPerClass: undefined,
            pricePerStudent: undefined,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
    {
        __typename: 'Class',
        id: 9,
        course_id: 5,
        name: 'Class 9',
        nickname: 'Class Nickname 9',

        students: STUDENTS.slice(0, 2),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: true,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: 34,
            maxStudentPerClass: 56,
            pricePerStudent: 12,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10

    },
    {
        __typename: 'Class',
        id: 10,
        course_id: 10,
        name: 'Class 10',
        nickname: 'Class Nickname 10',

        students: STUDENTS.slice(0, 6),
        startDate: new Date(2020, 3, 7),
        endDate: new Date(2020, 4, 27),
        schedule: {
            saturday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            sunday: {
                on: false,
                from: undefined,
                to: undefined
            },
            monday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            tuesday: {
                on: false,
                from: undefined,
                to: undefined
            },
            wednesday: {
                on: true,
                from: new Date(0, 0, 0, 16, 15),
                to: new Date(0, 0, 0, 17, 15)
            },
            thursday: {
                on: false,
                from: undefined,
                to: undefined
            },
            friday: {
                on: false,
                from: undefined,
                to: undefined
            },
        },
        isOnline: true,
        city: 'city_3',
        physicalAddress: 'Somewhere in the world',
        online: {
            minStudentPerClass: 20,
            maxStudentPerClass: 30,
            pricePerStudent: 120,
        },
        physical: {
            minStudentPerClass: 15,
            maxStudentPerClass: 25,
            pricePerStudent: 150,
        },
        referralIncentive: 10
    },
];