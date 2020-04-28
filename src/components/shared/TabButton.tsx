import React, {HTMLProps} from 'react';
import classNames from 'classnames';

interface TabButtonProps extends HTMLProps<HTMLButtonElement>{
    active?: boolean,
    text: string
}

const TabButton = ({text, active, onClick}: TabButtonProps) => {

    const tabDivStyle = classNames(
        'mx-1 text-center',
        {
            'border-b-4 border-indigo-900': active,
            'border-b-2 border-gray-600': !active,
        }
    );

    const tabButtonStyle = classNames(
        'tracking-wide focus:outline-none text-xs sm:text-lg md:text-xl whitespace-no-wrap',
        {
            'text-indigo-900 font-bold': active,
            'text-gray-600': !active
        }
    );

    return (
        <div className={tabDivStyle}>
            <button className={tabButtonStyle} onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default TabButton;