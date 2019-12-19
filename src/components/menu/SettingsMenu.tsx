import React from 'react';
import SettingMenuItem from './SettingMenuItem';
import {SettingMenuProps} from './types';

const SettingsMenu = ({closeSettingsMenu}: SettingMenuProps) => {
    return (
        <div className="absolute right-0 -mt-2 mr-3 rounded-lg bg-white shadow ">
            <SettingMenuItem text="Edit Profile" closeSettingsMenu={closeSettingsMenu} withButtonBorder={true}/>
            <SettingMenuItem text="Change Password" closeSettingsMenu={closeSettingsMenu} withButtonBorder={true}/>
            <SettingMenuItem text="Manage preferences" closeSettingsMenu={closeSettingsMenu} withButtonBorder={false}/>
        </div>
    );
};

export default SettingsMenu;