import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {RatingType} from './types';
import LibraryRating from 'react-rating';

const Rating = ({count, average, readonly, onChange}: RatingType) => {

    return (
        <div className="flex flex-wrap mx-auto py-1 px-2 justify-center items-center rounded-lg bg-white shadow-xl w-1/2 sm:w-1/4">
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
    );
};


export default Rating;