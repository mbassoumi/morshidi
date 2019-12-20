import React from 'react';
import {CardProps} from './types';
import classNames from 'classnames';

const Card = ({children, className}: CardProps) => {

    const cardStyle = classNames('w-3/4 mx-auto mt-4 border-solid border-2 border-gray-300 rounded-lg p-4 min-h-full shadow-xl', className);

    return (
        <div className="h-48">
            <div
                className={cardStyle}>
                {children}
            </div>
        </div>
    );
};

export default Card;