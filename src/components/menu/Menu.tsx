import React from 'react';
import MenuItem from './MenuItem';
// import {faHome, faBookOpen, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {faBookOpen, faSchool, faUserGraduate, faUserTie} from '@fortawesome/free-solid-svg-icons';
import {MenuProps} from './types';

const Menu = ({closeMenu}: MenuProps) => {
    return (
        <div className="absolute p-6 left-0 bg-indigo-900 h-screen w-full sm:w-1/2  lg:w-1/3">
            {/*<MenuItem icon={faHome} text="Profile" closeMenu={closeMenu}/>*/}
            {/*<MenuItem icon={faBookOpen} text="My Classes" closeMenu={closeMenu}/>*/}
            {/*<MenuItem icon={faSignOutAlt} text="Logout" closeMenu={closeMenu}/>*/}
            <MenuItem link='/teacher/public-profile' icon={faUserTie} text="Teacher Public Profile" closeMenu={closeMenu}/>
            <MenuItem link='/student/public-profile' icon={faUserGraduate} text="Student Public Profile" closeMenu={closeMenu}/>
            <MenuItem link='/class/public' icon={faBookOpen} text="Class Public" closeMenu={closeMenu}/>
            <MenuItem link='/teacher/profile-new' icon={faSchool} text="New teacher profile" closeMenu={closeMenu}/>
            <MenuItem link='/student/profile-new' icon={faSchool} text="New student profile" closeMenu={closeMenu}/>
        </div>
    )
};

export default Menu;