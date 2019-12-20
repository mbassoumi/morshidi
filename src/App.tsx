import React from 'react';
import Navbar from './components/navbar/Navbar';
import TeacherProfile from './components/teacher/TeacherProfile';

const teacher  = {
    id: 142323432,
    name: 'Jehad Bisoomi',
    username: '@jbesoomi',
    classes: 120,
    sessions: 50,
    followers: 400,
    rating: {
        count: 4329,
        avg: 3.5
    },
    details: {
        aboutMe: 'I have been been with Samasource for 3 years. I taught Math & Arabic at al hashimeya schoool. Nice\n' +
            '                    job nice nice nice!',
        fields: ['math', 'english', 'computer'],
        levels: ['tawjihi', 'first grade'],
        contactInfo: {
            whatsapp: '(925)-332-9428',
            phone: '0599-042378',
            email: 'jbesoomi@gmail.com'
        }
    }
};

const App: React.FC = () => {


  return (
    <div className="App">
      <Navbar/>

      <div className="">
          <TeacherProfile teacher={teacher}/>
      </div>
    </div>
  );
};

export default App;
