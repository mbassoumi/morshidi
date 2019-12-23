import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MenuItemProps} from './types';
import {Link} from 'react-router-dom';

const MenuItem = ({link, icon, text, closeMenu}: MenuItemProps) => {
    return (
        <div className="pb-3">
            <Link to={link}
                  className="flex p-2 rounded cursor-pointer hover:bg-indigo-400  text-gray-400 hover:text-white font-bold text-xl tracking-wide items-center"
                  onClick={closeMenu}
            >
                <div className="pr-2">
                    <FontAwesomeIcon icon={icon} size="lg"/>
                </div>
                <div className="">
                    {text}
                </div>
            </Link>
        </div>
    );
};

export default MenuItem;