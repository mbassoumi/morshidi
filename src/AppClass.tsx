import React from 'react';
import Navbar from './components/navbar/Navbar';
import Class from './components/class/Class';


const classDetails = {
    id: 142323432,
    name: 'Advanced Equation',
    nickname: 'Class Nickname',
    courseOverview: {
        fields: [
            'math'
        ],
        targetLevels: [
            'Tawjihi',
            'First Grade'
        ],
        description: 'This course is about a lot of stupid stuf that is not useful to anyone...\n' +
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

const AppClass: React.FC = () => {


    return (
        <div className="App">
            <Navbar/>

            <div className="">
                <Class classDetails={classDetails}/>
            </div>
        </div>
    );
};

export default AppClass;
