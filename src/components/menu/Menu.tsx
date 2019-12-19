import React from 'react';
import MenuItem from './MenuItem';
import {faHome, faBookOpen, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {MenuProps} from './types';

const Menu = ({closeMenu}: MenuProps) => {
    return (
        <div className="absolute p-6 left-0 bg-indigo-900 h-screen w-full sm:w-1/2  lg:w-1/4">
            <MenuItem icon={faHome} text="Profile" closeMenu={closeMenu}/>
            <MenuItem icon={faBookOpen} text="My Classes" closeMenu={closeMenu}/>
            <MenuItem icon={faSignOutAlt} text="Logout" closeMenu={closeMenu}/>
        </div>
    )
};

export default Menu;