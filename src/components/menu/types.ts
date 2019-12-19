export interface MenuItemProps {
    icon: any,
    text: string,
    closeMenu: () => void,
}

export interface MenuProps {
    closeMenu: () => void,
}

export interface SettingMenuItemProps {
    text: string,
    closeSettingsMenu: () => void,
    withButtonBorder: boolean
}
export interface SettingMenuProps {
    closeSettingsMenu: () => void,
}

