import React, {HTMLProps} from 'react';
import {TagProps} from './types';
import classNames from "classnames";

const Tag = ({text, bgColor, textColor, ...props}: TagProps & HTMLProps<any>) => {

    const bgClassColor = bgColor ? `bg-${bgColor}-600` : 'bg-indigo-600';
    const textClassColor = textColor ? `bg-${textColor}-300` : 'text-white';

    const componentClassName = classNames(
        'mx-1 px-2 py-1 inline-block  tracking-wider text-xs  uppercase whitespace-no-wrap',
        bgClassColor,
        textClassColor,
        props.className
    );

    return (
        <span
            className={componentClassName}
            {...props}
        >
            {text}
            {props.children}
        </span>
    );
};

export default Tag;