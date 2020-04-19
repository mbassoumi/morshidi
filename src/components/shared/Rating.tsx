import React, {HTMLProps} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {RatingType} from './types';
import LibraryRating from 'react-rating';
import classNames from "classnames";

const Rating = ({count, average, readonly, onChange, className, ...props}: RatingType & HTMLProps<any>) => {

    const combinedClassNames = classNames(
        className,
        'flex justify-center items-center whitespace-no-wrap',
    );
    return (
        <div
            className={combinedClassNames}>
            <div className="flex flex-no-wrap px-2 py-1 rounded-lg bg-white shadow-xl">

                <LibraryRating
                    readonly={readonly}
                    className="whitespace-no-wrap"
                    initialRating={average}
                    onChange={onChange}
                    emptySymbol={<FontAwesomeIcon icon={faStar} className="text-gray-500" size="lg"/>}
                    fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}
                />
                {
                    count ? (
                        <div className="ml-2">
                            ({count})
                        </div>
                    ) : ''
                }
            </div>

        </div>
    );
};


export default Rating;