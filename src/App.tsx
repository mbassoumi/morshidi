import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import TeacherProfile from './components/teacher/TeacherProfile';
import {classDetails, student, teacher} from './data';
import StudentProfile from './components/student/StudentProfile';
import Class from './components/class/Class';

const App: React.FC = () => {


    return (
        <Router>
            <div className="App">
                <Navbar/>

                <Route path="/" exact={true}>
                    <Redirect to="/teacher/public-profile"/>
                </Route>
                <Route path="/teacher/public-profile" exact={true}>
                    <TeacherProfile teacher={teacher}/>
                </Route>
                <Route path="/student/public-profile" exact={true}>
                    <StudentProfile student={student}/>
                </Route>
                <Route path="/class/public" exact={true}>
                    <Class classDetails={classDetails}/>
                </Route>

                <div className="">

                </div>
            </div>
        </Router>
    );
};

export default App;
