export const teacher = {
    id       : 142323432,
    name     : 'Jehad Bisoomi',
    username : '@jbesoomi',
    classes  : 120,
    sessions : 50,
    followers: 400,
    rating   : {
        count: 4329,
        avg  : 3.5
    },
    details  : {
        aboutMe    : 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields     : ['math', 'english', 'computer'],
        levels     : ['tawjihi', 'first grade'],
        contactInfo: {
            whatsapp: '(925)-332-9428',
            phone   : '0599-042378',
            email   : 'jbesoomi@gmail.com'
        }
    }
};

export const student = {
    id      : 31322233,
    name    : 'Majd Bassoumi',
    username: '@mbassoumi',
    details : {
        interests  : ['math', 'physics'],
        level      : 'tawjihi',
        contactInfo: {
            whatsapp: '(925)-332-9428',
            phone   : '0598-569530',
            email   : 'mbbassoumi@gmail.com'
        }
    }
};

export const classDetails = {
    id            : 142323432,
    name          : 'Advanced Equation',
    nickname      : 'Class Nickname',
    courseOverview: {
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
        ]
    }
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

export const cities = [
    {value: 'ramallah', label: 'Ramallah'},
    {value: 'betonia', label: 'Betonia'},
    {value: 'nablus', label: 'Nablus'},
    {value: 'al-bireh', label: 'Al-Bireh'},
];