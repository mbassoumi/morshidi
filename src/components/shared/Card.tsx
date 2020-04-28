import React, {HTMLProps} from 'react';
import classNames from 'classnames';

const Card = ({className, ...props}: HTMLProps<HTMLDivElement>) => {

    const cardStyle = classNames(' border-solid border-2 border-gray-300 rounded-lg p-4 shadow-xl', className);


    return (
        <div className={cardStyle} {...props}/>
    );
};

export default Card;