import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {cities, fields, interests, levels} from './data';
import TeacherForm from './components/user/teacher/TeacherForm';
import StudentForm from './components/user/student/StudentForm';
import Course from './components/course/Course';
import GroupClassPage from './components/class/group_class/GroupClassPage';
import Login from './components/Login';
import PublicRoute from './components/routes/PublicRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import MyProfilePage from './components/profile/MyProfilePage';
import TeacherProfilePage from './components/profile/TeacherProfilePage';
import NotFoundException from './components/shared/NotFoundException';
import WelcomePage from './components/pages/WelcomePage';
import CoursesPage from './components/course/CoursesPage';
import CreateCoursePage from './components/course/CreateCoursePage';
import EditCoursePage from './components/course/EditCoursePage';
import CreateGroupClassPage from './components/class/group_class/CreateGroupClassPage';
import EditGroupClassPage from './components/class/group_class/EditGroupClassPage';
import TeachersPage from "./components/user/teacher/TeachersPage";
import GroupClassesPage from "./components/class/group_class/GroupClassesPage";
import StudentsPage from "./components/user/student/StudentsPage";
import StudentProfilePage from "./components/profile/StudentProfilePage";
import MySchedule from "./components/schedule/MySchedule";
import CreateTeacherPage from "./components/user/teacher/CreateTeacherPage";
import EditTeacherPage from "./components/user/teacher/EditTeacherPage";


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


                <PrivateRoute component={MySchedule} path="/schedule" exact={true}/>
                <PrivateRoute component={MyProfilePage} path="/profile" exact={true}/>


                <PrivateRoute component={TeachersPage} path="/teachers" exact={true}/>
                <PrivateRoute component={TeachersPage} path="/teachers" exact={true}/>
                <PrivateRoute component={CreateTeacherPage} path="/teacher/create" exact={true}/>
                <PrivateRoute component={TeacherProfilePage} path="/teacher/:id" exact={true}/>
                <PrivateRoute component={EditTeacherPage} path="/teacher/:id/edit" exact={true}/>

                <PrivateRoute component={StudentsPage} path="/students" exact={true}/>
                <PrivateRoute component={StudentProfilePage} path="/student/:id" exact={true}/>


                {/*COURSE ROUTES*/}
                <PrivateRoute component={CoursesPage} path="/courses" exact={true}/>
                <PrivateRoute component={CreateCoursePage} path="/course/create" exact={true}/>
                <PrivateRoute component={EditCoursePage} path="/course/:id/edit" exact={true}/>
                <PrivateRoute component={Course} path="/course/:id" exact={true}/>


                {/*CLASS ROUTES*/}
                <PrivateRoute component={GroupClassesPage} exact={true} path="/classes"/>
                <PrivateRoute component={CreateGroupClassPage} path="/course/:course_id/class/create" exact={true}/>
                <PrivateRoute component={GroupClassPage} path="/course/:course_id/class/:class_id" exact={true}/>
                <PrivateRoute component={EditGroupClassPage} path="/course/:course_id/class/:class_id/edit" exact={true}/>


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