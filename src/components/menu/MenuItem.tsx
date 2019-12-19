import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {MenuItemProps} from './types';

const MenuItem = ({icon, text, closeMenu}: MenuItemProps) => {
    return (
        <div className="pb-3">
            <div
                className="flex p-2 rounded cursor-pointer hover:bg-indigo-400  text-gray-400 hover:text-white font-bold text-xl tracking-wide items-center"
                onClick={closeMenu}
            >
                <div className="pr-2">
                    <FontAwesomeIcon icon={icon} size="lg"/>
                </div>
                <div className="">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default MenuItem;