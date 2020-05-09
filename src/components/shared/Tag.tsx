import React, {HTMLProps} from 'react';
import classNames from "classnames";


interface TagProps extends HTMLProps<HTMLSpanElement> {
    text: string
}

const Tag = ({text, className, children, ...props}: TagProps) => {

    const componentClassName = classNames(
        'uppercase whitespace-no-wrap text-xs sm:text-1x p-1',
        className
    );

    return (
        <span
            className={componentClassName}
            {...props}
        >
            {text}
            {children}
        </span>
    );
};

export default Tag;