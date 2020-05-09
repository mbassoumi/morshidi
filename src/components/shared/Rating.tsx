import React from 'react';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import LibraryRating, {RatingComponentProps} from 'react-rating';
import classNames from "classnames";


const Rating = ({className, ...props}: RatingComponentProps) => {

    const ComponentClassName = classNames(
        'whitespace-no-wrap',
        className
    )
    return (
        <LibraryRating
            className={ComponentClassName}
            emptySymbol={<RatingSymbol icon={faStar} className="text-gray-500"/>}
            fullSymbol={<RatingSymbol icon={faStar} className="text-yellow-500"/>}
            {...props}
        />

    );
};

const RatingSymbol = ({className, ...props}: FontAwesomeIconProps) => {

    const smallComponentClassName = classNames(
        'md:hidden',
        className
    )
    const mediumComponentClassName = classNames(
        'hidden md:block',
        className
    )

    return (
        <>
            <FontAwesomeIcon {...props} className={smallComponentClassName} size="xs"/>
            <FontAwesomeIcon {...props} className={mediumComponentClassName} size="1x"/>
        </>
    )
}


export default Rating;