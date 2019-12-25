import React from 'react';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TeacherProfile from './components/teacher/TeacherProfile';
import {
    cities,
    classDetails, course,
    fields,
    initialCourseFormValues,
    interests,
    keywords,
    levels,
    student,
    teacher
} from './data';
import StudentProfile from './components/student/StudentProfile';
import Class from './components/class/Class';
import TeacherForm from './components/teacher/TeacherForm';
// import TestComponent from './components/TestComponent';
import StudentForm from './components/student/StudentForm';
import CourseForm from './components/course/CourseForm';
import ClassForm from './components/class/ClassForm';
import TestComponent from './components/TestComponent';
import Course from './components/course/Course';

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
                <Route path="/course/public" exact={true}>
                    <Course course={course}/>
                </Route>
                <Route path="/course/new" exact={true}>
                    <CourseForm defaultValues={initialCourseFormValues} serverErrors={{}} onSubmit={onSubmit} cities={cities} fields={fields} keywords={keywords} levels={levels}/>
                </Route>
                <Route path="/class/public" exact={true}>
                    <Class classDetails={classDetails}/>
                </Route>
                <Route path="/class/new" exact={true}>
                    <ClassForm courseName="Grammar - 101" defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities} fields={fields} keywords={keywords} levels={levels}/>
                </Route>
                <Route path="/test" exact={true}>
                    <TestComponent/>
                </Route>

                <div className="">

                </div>
            </div>
        </Router>
    );
};

export default App;
