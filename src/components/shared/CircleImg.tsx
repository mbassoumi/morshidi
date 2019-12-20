import React from 'react';
import {CircleImgProps} from './types';

const CircleImg = ({src, alt}: CircleImgProps) => {

    return (
        <img
            src={src}
            alt={alt}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden object-cover"
        />
    );

};

export default CircleImg;