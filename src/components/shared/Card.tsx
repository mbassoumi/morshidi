import React from 'react';
import {CardProps} from './types';
import classNames from 'classnames';

const Card = ({children, className}: CardProps) => {

    const cardStyle = classNames('w-3/4 mx-auto mt-4 border-solid border-2 border-gray-300 rounded-lg p-4 shadow-xl', className);

    return (
        <div
            className={cardStyle}>
            {children}
        </div>
    );
};

export default Card;