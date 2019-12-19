import React from 'react';
import {TagProps} from './types';

const Tag = ({text}: TagProps) => {
    return (
        <span
            className="mx-1 px-2 py-1 bg-indigo-600 text-white inline-block rounded-lg tracking-wider text-xs md:text-sm uppercase whitespace-no-wrap">
            {text}
        </span>
    );
};

export default Tag;