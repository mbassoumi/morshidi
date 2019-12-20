import React from 'react';
import Navbar from './components/navbar/Navbar';
import StudentProfile from './components/student/StudentProfile';


const student = {
    id: 31322233,
    name: 'Majd Bassoumi',
    username: '@mbassoumi',
    details: {
        interests: ['math', 'physics'],
        level: 'tawjihi',
        contactInfo: {
            whatsapp: '(925)-332-9428',
            phone: '0598-569530',
            email: 'mbbassoumi@gmail.com'
        }
    }
};

const App: React.FC = () => {


  return (
    <div className="App">
      <Navbar/>

      <div className="">
          <StudentProfile student={student}/>
      </div>
    </div>
  );
};

export default App;
