import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MenuItemProps} from './types';
import {Link} from 'react-router-dom';
import classNames from 'classnames';


const MenuItem = ({link, icon, text, closeMenu}: MenuItemProps) => {

    const linkStyles = classNames(
        'flex p-2  rounded-bl rounded-tl rounded-r-full cursor-pointer hover:bg-indigo-400 text-gray-400 hover:text-white  tracking-wide items-center outline-none focus:shadow-outline ',
        {
            'bg-indigo-400' : (window.location.pathname === link),
        }
    );

    return (
        <div className="pb-1">
            <Link to={link}
                  className={linkStyles}
                  onClick={closeMenu}
            >
                <div className="w-12 ml-2 flex">
                    <FontAwesomeIcon icon={icon} size="sm" fixedWidth={true}/>
                </div>
                <div className="">
                    {text}
                </div>
            </Link>
        </div>
    );
};

export default MenuItem;