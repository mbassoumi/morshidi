import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {cities, fields, interests, keywords, levels} from './data';
import TeacherForm from './components/teacher/TeacherForm';
import StudentForm from './components/student/StudentForm';
import Course from './components/course/Course';
import ClassPage from './components/class/ClassPage';
import ClassForm from './components/class/ClassForm';
import Login from './components/Login';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import Profile from './components/pages/Profile';
import TeachersList from './components/teacher/TeachersList';
import TeacherProfilePage from './components/pages/TeacherProfilePage';
import NotFoundException from './components/shared/NotFoundException';
import WelcomePage from './components/pages/WelcomePage';
import CoursesPage from './components/course/CoursesPage';
import CreateCoursePage from './components/course/CreateCoursePage';
import EditCoursePage from './components/course/EditCoursePage';
import CreateClassPage from './components/class/CreateClassPage';
import EditClassPage from './components/class/EditClassPage';


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
                <PrivateRoute component={WelcomePage} path="/" exact={true}/>


                <PrivateRoute component={Profile} path="/profile" exact={true}/>
                <PrivateRoute component={TeachersList} path="/teachers" exact={true}/>
                <PrivateRoute component={TeacherProfilePage} path="/teacher/:id" exact={true}/>



                {/*COURSE ROUTES*/}
                <PrivateRoute component={CoursesPage} path="/courses" exact={true}/>
                <PrivateRoute component={CreateCoursePage} path="/course/create" exact={true}/>
                <PrivateRoute component={EditCoursePage} path="/course/:id/edit" exact={true}/>
                <PrivateRoute component={Course} path="/course/:id" exact={true}/>



                {/*CLASS ROUTES*/}
                <PrivateRoute component={CreateClassPage} path="/course/:course_id/class/create" exact={true}/>
                <PrivateRoute component={ClassPage} path="/course/:course_id/class/:class_id" exact={true}/>
                <PrivateRoute component={EditClassPage} path="/course/:course_id/class/:class_id/edit" exact={true}/>


                <Route path="/" component={NotFoundException}/>




                <Route path="/teacher/profile-new" exact={true}>
                    <TeacherForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities}
                                 fields={fields} levels={levels}/>
                </Route>

                <Route path="/student/profile-new" exact={true}>
                    <StudentForm defaultValues={{}} serverErrors={{}} onSubmit={onSubmit} cities={cities}
                                 interests={interests} levels={levels}/>
                </Route>

            </Switch>
        </Router>
    );
};

export default Routes;