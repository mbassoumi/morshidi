import React, {ImgHTMLAttributes} from 'react';
import {CustomImgProps} from './types';
import classNames from "classnames";

const CustomImg = ({size, circle= true, className, ...props}: CustomImgProps & ImgHTMLAttributes<any>) => {

    const componentClassName = classNames(
        className,
        'border-2 border-indigo-500 shadow-lg overflow-hidden object-cover ',
        {
            "w-24 h-24 sm:w-32 sm:h-32": size === undefined,
            'w-24 h-24': size === 'sm',
            'w-32 h-32': size === 'lg',
            'w-48 h-48': size === 'xl',
            'rounded-full': circle
        }
    );

    return (
        <img
            {...props}
            className={componentClassName}
        />
    );

};

export default CustomImg;