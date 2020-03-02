export interface MenuItemProps {
    link: string,
    icon: any,
    text: string,
    closeMenu: () => void,
}

export interface MenuProps {
    closeMenu: () => void,
    style: any
}

export interface SettingMenuItemProps {
    text: string,
    closeSettingsMenu: () => void,
    withButtonBorder: boolean
}
export interface SettingMenuProps {
    closeSettingsMenu: () => void,
}

