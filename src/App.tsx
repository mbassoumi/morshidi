import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TeacherProfile from './components/teacher/TeacherProfile';
import {cities, classDetails, fields, interests, levels, student, teacher} from './data';
import StudentProfile from './components/student/StudentProfile';
import Class from './components/class/Class';
import TeacherForm from './components/teacher/TeacherForm';
// import TestComponent from './components/TestComponent';
import StudentForm from './components/student/StudentForm';

const App: React.FC = () => {

    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <Router>
            <div className="App">
                <Navbar/>

                <Route path="/" exact={true}>
                    {/*<TestComponent/>*/}
                    <div className="h-screen flex flex-col text-5xl text-center mx-auto justify-center align-middle items-center">
                        <div className="text-indigo-900">See menu and give me feedback about pages</div>
                    </div>
                </Route>
                <Route path="/teacher/public-profile" exact={true}>
                    <TeacherProfile teacher={teacher}/>
                </Route>
                <Route path="/teacher/profile-new" exact={true}>
                    <TeacherForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities} fields={fields} levels={levels}/>
                </Route>
                <Route path="/student/profile-new" exact={true}>
                    <StudentForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities} interests={interests} levels={levels}/>
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
