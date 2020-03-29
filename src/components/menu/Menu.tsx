import React from 'react';
import MenuItem from './MenuItem';
import {faBookOpen, faCog, faIdCard, faPowerOff, faTimes, faUserTie} from '@fortawesome/free-solid-svg-icons';
import {MenuProps} from './types';
import CircleImg from '../shared/CircleImg';
import Majd from '../../img/Majd.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Menu = ({closeMenu, style}: MenuProps) => {

    return (
        <div className="absolute p-2 top-0 left-0 h-full min-h-screen bg-indigo-900 overflow-scroll" style={style}>

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


                <MenuItem link='/profile' icon={faIdCard} text="My Profile"
                          closeMenu={closeMenu}/>
                <MenuItem link='/teachers' icon={faUserTie} text="Teachers"
                          closeMenu={closeMenu}/>
                <MenuItem link='/courses' icon={faBookOpen} text="Courses"
                          closeMenu={closeMenu}/>


                {/*<MenuItem link='/class/public' icon={faBookOpen} text="Class Public" closeMenu={closeMenu}/>*/}
                {/*<MenuItem link='/class/new' icon={faCoffee} text="New Class" closeMenu={closeMenu}/>*/}
                {/*<MenuItem link='/teacher/profile-new' icon={faSchool} text="New teacher profile" closeMenu={closeMenu}/>*/}
                {/*<MenuItem link='/student/profile-new' icon={faSchool} text="New student profile" closeMenu={closeMenu}/>*/}
                {/*<MenuItem link='/course/public' icon={faCoffee} text="Course Public" closeMenu={closeMenu}/>*/}
                {/*<MenuItem link='/course/new' icon={faBook} text="New Course" closeMenu={closeMenu}/>*/}
            </div>


            <div className="pt-10 mr-10">
                <MenuItem link='/settings' icon={faCog} text="Settings"
                          closeMenu={closeMenu}/>

                <div className="pb-1">
                    <div
                        className="flex p-2  rounded-bl rounded-tl rounded-r-full cursor-pointer hover:bg-indigo-400 text-gray-400 hover:text-white  tracking-wide items-center outline-none focus:shadow-outline"
                        onClick={closeMenu}
                    >
                        <div className="w-12 ml-2 flex">
                            <FontAwesomeIcon icon={faPowerOff} size="sm" fixedWidth={true}/>
                        </div>
                        <div className="">
                            Log Out
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Menu;