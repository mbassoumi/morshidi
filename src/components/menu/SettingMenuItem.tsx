import React from 'react';
import {SettingMenuItemProps} from './types';

const SettingMenuItem = ({text, closeSettingsMenu, withButtonBorder}: SettingMenuItemProps) => {
    return (
        <div onClick={closeSettingsMenu}>
            <div
                className="text-gray-900  p-2 m-2 cursor-pointer rounded-lg hover:text-white hover:bg-indigo-400 text-sm items-center">
                {text}
            </div>
            {withButtonBorder && <div className="border-solid border-gray-400 border-b-2 -mt-2 mx-3 hover:border-b-0"/>}
        </div>
    );
};

export default SettingMenuItem;