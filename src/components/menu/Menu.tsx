import React, {useEffect} from 'react';
import MenuItem from './MenuItem';
// import {faHome, faBookOpen, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {
    faBook,
    faBookOpen,
    faCoffee,
    faSchool,
    faUserGraduate,
    faUserTie,
    faCog,
    faPowerOff, faTimes, faBars
} from '@fortawesome/free-solid-svg-icons';
import {MenuProps} from './types';
import CircleImg from '../shared/CircleImg';
import Majd from '../../img/Majd.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Menu = ({closeMenu}: MenuProps) => {

    return (
        <div className="absolute p-2 top-0 left-0 h-full min-h-screen bg-indigo-900 overflow-scroll">

            <div className="flex">
                <div className="mx-auto mt-10">
                    <CircleImg src={Majd} alt="Profile"/>
                </div>
                <button onClick={closeMenu} className="focus:outline-none h-full">
                    <FontAwesomeIcon size="lg" icon={faTimes} className="hover:text-white text-gray-600"/>
                </button>
            </div>
            <div className="flex m-2">
                <div className="mx-auto">
                    <div className="text-white font-bold tracking-wide text-xl">Majd Bassoumi</div>
                </div>
            </div>
            <div className="border-white border-solid border-t-2"/>


            <div className="mt-12 mr-10">
                <MenuItem link='/teacher/public-profile' icon={faUserTie} text="Teacher Public Profile"
                          closeMenu={closeMenu}/>
                <MenuItem link='/student/public-profile' icon={faUserGraduate} text="Student Public Profile"
                          closeMenu={closeMenu}/>
                <MenuItem link='/class/public' icon={faBookOpen} text="Class Public" closeMenu={closeMenu}/>
                <MenuItem link='/class/new' icon={faCoffee} text="New Class" closeMenu={closeMenu}/>
                <MenuItem link='/teacher/profile-new' icon={faSchool} text="New teacher profile" closeMenu={closeMenu}/>
                <MenuItem link='/student/profile-new' icon={faSchool} text="New student profile" closeMenu={closeMenu}/>
                <MenuItem link='/course/public' icon={faCoffee} text="Course Public" closeMenu={closeMenu}/>
                <MenuItem link='/course/new' icon={faBook} text="New Course" closeMenu={closeMenu}/>
            </div>


            <div className="pt-10 mr-10">
                <MenuItem link='/' icon={faCog} text="Settings"
                          closeMenu={closeMenu}/>

                <MenuItem link='/' icon={faPowerOff} text="Log Out"
                          closeMenu={closeMenu}/>

            </div>
        </div>
    );
};

export default Menu;