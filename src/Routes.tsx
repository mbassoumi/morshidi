import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StudentList from './components/student/StudentList';
import TeacherProfile from './components/teacher/TeacherProfile';
import {
    cities,
    classDetails,
    course,
    fields,
    initialCourseFormValues,
    interests,
    keywords,
    levels,
    student,
    teacher
} from './data';
import TeacherForm from './components/teacher/TeacherForm';
import StudentForm from './components/student/StudentForm';
import StudentProfile from './components/student/StudentProfile';
import Course from './components/course/Course';
import CourseForm from './components/course/CourseForm';
import Class from './components/class/Class';
import ClassForm from './components/class/ClassForm';
import TestComponent from './components/TestComponent';
import Login from './components/Login';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import Profile from './components/pages/Profile';
import TeachersList from './components/teacher/TeachersList';
import TeacherProfilePage from './components/pages/TeacherProfilePage';
import NotFoundException from './components/shared/NotFoundException';


const Routes = () => {

    const onSubmit = (values: any, {setSubmitting}: any) => {
        console.log('values => ', values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <Router>
            <Switch>
                <PublicRoute component={Login} exact={true} path="/login"/>

                <PrivateRoute component={StudentList} path="/" exact={true}/>

                <PrivateRoute component={Profile} path="/profile" exact={true}/>

                <PrivateRoute component={TeachersList} path="/teachers" exact={true}/>

                <PrivateRoute component={TeacherProfilePage} path="/teacher/:id" exact={true}/>


                {/*<PrivateRoute component={TeacherProfile} exact={true} path="/teacher/public-profile"/>*/}

                <Route path="/teacher/public-profile" exact={true} com>
                    <TeacherProfile teacher={teacher}/>
                </Route>


                <Route path="/teacher/profile-new" exact={true}>
                    <TeacherForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities}
                                 fields={fields} levels={levels}/>
                </Route>

                <Route path="/student/profile-new" exact={true}>
                    <StudentForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities}
                                 interests={interests} levels={levels}/>
                </Route>

                <Route path="/student/public-profile" exact={true}>
                    <StudentProfile student={student}/>
                </Route>

                <Route path="/course/public" exact={true}>
                    <Course course={course}/>
                </Route>

                <Route path="/course/new" exact={true}>
                    <CourseForm defaultValues={initialCourseFormValues} serverErrors={{}} onSubmit={onSubmit}
                                cities={cities} fields={fields} keywords={keywords} levels={levels}/>
                </Route>

                <Route path="/class/public" exact={true}>
                    <Class classDetails={classDetails}/>
                </Route>

                <Route path="/class/new" exact={true}>
                    <ClassForm courseName="Grammar - 101" defaultValues={{}} serverErrors={{}} onSubmit={onSubmit}
                               cities={cities} fields={fields} keywords={keywords} levels={levels}/>
                </Route>

                <Route path="/test" exact={true}>
                    <TestComponent/>
                </Route>

                <Route path="/" component={NotFoundException}/>
            </Switch>
        </Router>
    );
};

export default Routes;