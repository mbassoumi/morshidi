export const teacher = {
    id       : 142323432,
    name     : 'Jehad Bisoomi',
    username : '@jbesoomi',
    from     : 'Ramallah',
    classes  : 120,
    sessions : 50,
    followers: 400,
    rating   : {
        count  : 4329,
        average: 3.5
    },
    aboutMe  : 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
        '                    job nice nice nice!',
    fields   : ['math', 'english', 'computer'],
    levels   : ['tawjihi', 'first grade'],
    whatsapp : '(925)-332-9428',
    phone    : '0599-042378',
    email    : 'jbesoomi@gmail.com'
};

export const student = {
    id       : 31322233,
    name     : 'Majd Bassoumi',
    username : '@mbassoumi',
    interests: ['math', 'physics'],
    level    : 'tawjihi',
    whatsapp : '(925)-332-9428',
    phone    : '0598-569530',
    email    : 'mbbassoumi@gmail.com'
};

export const classDetails = {
    id          : 142323432,
    course_id   : 2,
    name        : 'Advanced Equation',
    nickname    : 'Class Nickname',
    fields      : [
        'math'
    ],
    targetLevels: [
        'Tawjihi',
        'First Grade'
    ],
    description : 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
        '                    asdasdas\n' +
        '                    asdad\n' +
        '                    asdasda\n' +
        '                    asddsadasdd\n' +
        '                    asdasdasdsad',
    requirements: [
        'A laptop',
        'Knowledge with Triangles and calculators',
        'Test 123',
        'More requirements'
    ],
    students    : [
        student
    ]
};


export const fields = [
    {label: 'MATH', value: 'math'},
    {label: 'ENGLISH', value: 'english'},
    {label: 'COMPUTER', value: 'computer'},
    {label: 'ENGINEER', value: 'engineer'},
    {label: 'ARABIC', value: 'arabic'},
    {label: 'SPORT', value: 'sport'},
];

export const levels = [
    {label: 'TAWJIHI', value: 'tawjihi'},
    {label: 'FIRST GRADE', value: 'first grade'},
    {label: 'UNIVERSITY', value: 'university'},
    {label: 'BACHELOR', value: 'bachelor'},
    {label: 'MASTER', value: 'master'},
];

export const interests = [
    {label: 'SWIMMING', value: 'swimming'},
    {label: 'WRITING', value: 'writing'},
    {label: 'PLAYING', value: 'playing'},
    {label: 'PROGRAMMING', value: 'programming'},
    {label: 'DO NOTHING', value: 'do nothing'},
];

export const cities = [
    {value: 'ramallah', label: 'Ramallah'},
    {value: 'betonia', label: 'Betonia'},
    {value: 'nablus', label: 'Nablus'},
    {value: 'al-bireh', label: 'Al-Bireh'},
];

export const keywords = [
    {value: 'online', label: 'Online'},
    {value: 'physical', label: 'Physical'},
];


export const initialCourseFormValues = {
    courseName                : 'Math',
    fields                    : ['math', 'engineer'],
    levels                    : ['university', 'bachelor'],
    keywords                  : ['online'],
    description               : 'some description',
    requirements              : [
        'tawjihi + 95%',
        ' feda is stupid',
    ],
    isOnline                  : true,
    city                      : 'ramallah',
    physicalAddress           : 'Irsal street',
    minStudentPerPhysicalClass: 1,
    maxStudentPerPhysicalClass: 20,
    pricePerPhysicalStudent   : 21,
    minStudentPerOnlineClass  : 1,
    maxStudentPerOnlineClass  : 20,
    pricePerOnlineStudent     : 21,

};

export const course = {
    id          : 142323432,
    name        : 'Advanced Equations',
    classes     : 120,
    students    : 50,
    rating      : {
        count  : 4329,
        average: 3.5
    },
    fields      : ['math'],
    levels      : ['tawjihi', 'first grade'],
    description : 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
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
    teacher     : teacher,
};