import React from 'react';
import MenuItem from './MenuItem';
import {
    faBookOpen,
    faCog,
    faIdCard,
    faPowerOff,
    faSdCard, faTable,
    faTimes,
    faUserGraduate,
    faUserTie
} from '@fortawesome/free-solid-svg-icons';
import {MenuProps} from './types';
import CustomImg from '../shared/CustomImg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useSelector} from 'react-redux';

const Menu = ({closeMenu, style}: MenuProps) => {

    //@ts-ignore
    const user = useSelector(state => state.auth.user);

    return (
        <div className="absolute p-2 top-0 left-0 h-full min-h-screen bg-indigo-900 overflow-scroll" style={style}>

            <div className="flex">
                <div className="mx-auto mt-10">
                    <CustomImg src={user.picture} alt="Profile"/>
                </div>
                <button onClick={closeMenu} className="focus:outline-none h-full">
                    <FontAwesomeIcon size="lg" icon={faTimes} className="hover:text-white text-gray-600"/>
                </button>
            </div>
            <div className="flex m-2">
                <div className="mx-auto">
                    <div className="text-white font-bold tracking-wide text-xl">{user.name}</div>
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
                <MenuItem link='/classes' icon={faSdCard} text="Classes"
                          closeMenu={closeMenu}/>
                <MenuItem link='/students' icon={faUserGraduate} text="Students"
                          closeMenu={closeMenu}/>
                <MenuItem link='/schedule' icon={faTable} text="My Schedule"
                          closeMenu={closeMenu}/>





                {/*<MenuItem link='/group_class/public' icon={faBookOpen} text="Class Public" closeMenu={closeMenu}/>*/}
                {/*<MenuItem link='/group_class/new' icon={faCoffee} text="New Class" closeMenu={closeMenu}/>*/}
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