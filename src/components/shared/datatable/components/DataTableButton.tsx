import React, {ButtonHTMLAttributes} from 'react';
import classNames from 'classnames';

const DataTableButton = ({className, ...props}: ButtonHTMLAttributes<any>) => {

    const style = classNames(
        'bg-white hover:bg-indigo-200 text-black font-bold py-2 rounded-lg focus:outline-none focus:shadow-outline',
        className
    );

    return (
        <button
            className={style}
            {...props}
        >
            {props.children}
        </button>
    );

};

export default DataTableButton;