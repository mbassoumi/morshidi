import React from 'react';
import classNames from 'classnames';
import {Link, LinkProps} from 'react-router-dom';

const DataTableLinkButton = ({className, ...props}: LinkProps) => {

    const style = classNames(
        'bg-white hover:bg-indigo-200 text-black font-bold py-2 rounded-lg focus:outline-none focus:shadow-outline',
        className
    );

    return (
        <Link
            className={style}
            {...props}
        >
            {props.children}
        </Link>
    );

};

export default DataTableLinkButton;