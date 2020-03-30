import TEACHERS from './teachers';

export default [
    {
        __typename: 'Course',
        id: 1,
        name: 'Course 1',
        classes: 12,
        students: 50,
        rating: {
            count: 50,
            average: 3.5
        },
        fields: ['math'],
        levels: ['tawjihi'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 1),

        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
    },
    {
        __typename: 'Course',
        id: 2,
        name: 'Course 2',
        classes: 13,
        students: 55,
        rating: {
            count: 4,
            average: 2.5
        },
        fields: ['calculus'],
        levels: ['first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 2),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 3,
        name: 'Course 3',
        classes: 15,
        students: 67,
        rating: {
            count: 439,
            average: 4
        },
        fields: ['english'],
        levels: [ '8th grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 3),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 4,
        name: 'Course 4',
        classes: 123,
        students: 32,
        rating: {
            count: 329,
            average: 5
        },
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 4),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 5,
        name: 'Course 5',
        classes: 10,
        students: 50,
        rating: {
            count: 432,
            average: 3
        },
        fields: ['physics'],
        levels: ['tawjihi', '7th grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 5),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 6,
        name: 'Course 6',
        classes: 120,
        students: 50,
        rating: {
            count: 4329,
            average: 3.5
        },
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 6),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 7,
        name: 'Course 7',
        classes: 120,
        students: 50,
        rating: {
            count: 4329,
            average: 3.5
        },
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 7),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 8,
        name: 'Course 8',
        classes: 120,
        students: 50,
        rating: {
            count: 4329,
            average: 3.5
        },
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 8),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 9,
        name: 'Course 9',
        classes: 120,
        students: 50,
        rating: {
            count: 4329,
            average: 3.5
        },
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 9),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
    {
        __typename: 'Course',
        id: 10,
        name: 'Course 10',
        classes: 120,
        students: 50,
        rating: {
            count: 4329,
            average: 3.5
        },
        fields: ['math'],
        levels: ['tawjihi', 'first grade'],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
            'asdasdas\n' +
            'asdad\n' +
            'asdasda\n' +
            'asddsadasdd\n' +
            'asdasdasdsad\n',
        requirements: [
            'A laptop',
            'Knowledge with Triangles and calculators',
            'Test 123',
            'More requirements'
        ],
        teacher: TEACHERS.find(teacher => teacher.id === 10),


        keywords                  : ['online'],
        city                      : 'ramallah',
        physicalAddress           : 'Irsal street',
        minStudentPerPhysicalClass: 1,
        maxStudentPerPhysicalClass: 20,
        pricePerPhysicalStudent   : 21,
        minStudentPerOnlineClass  : 1,
        maxStudentPerOnlineClass  : 20,
        pricePerOnlineStudent     : 21,
    },
];