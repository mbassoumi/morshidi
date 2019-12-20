import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/Menu';
import classNames from 'classnames';
import SettingsMenu from '../menu/SettingsMenu';

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSettingsOpen, setSettingsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setSettingsOpen(false);
    };

    const toggleSettings = () => {
        setSettingsOpen(!isSettingsOpen);
        setMenuOpen(false);
    };

    const menuIconClasses = classNames(
        'hover:text-white',
        {
            'text-gray-600': !isMenuOpen,
            'text-white': isMenuOpen
        }
    );

    return (
        <header className="relative sticky top-0 z-10">
            <div className=" relative bg-indigo-900 w-full h-10 flex justify-between items-center">
                <div className="w-1/3 flex justify-start items-center px-3">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon size="lg" icon={isMenuOpen ? faTimes : faBars} className={menuIconClasses}/>
                    </button>
                </div>
                <div className="w-1/3 flex justify-center items-center px-3">
                    <p className="text-white font-bold tracking-wider border-2 px-2">Morshidi</p>
                </div>
                <div className="w-1/3 flex justify-end items-center px-3">
                    <button onClick={toggleSettings} className="focus:outline-none">
                        <FontAwesomeIcon size="lg" icon={faEllipsisV} className="text-gray-600 hover:text-white"/>
                    </button>
                </div>
            </div>
            {
                (isMenuOpen || isSettingsOpen) && <button
                    className="absolute h-screen w-full bg-black opacity-25 cursor-default focus:outline-none"
                    onClick={() => {setMenuOpen(false); setSettingsOpen(false); }}
                />
            }
            {isMenuOpen && <Menu closeMenu={() => setMenuOpen(false)}/>}
            {isSettingsOpen && <SettingsMenu closeSettingsMenu={() => setSettingsOpen(false)}/>}

        </header>
    );
};

export default Navbar;