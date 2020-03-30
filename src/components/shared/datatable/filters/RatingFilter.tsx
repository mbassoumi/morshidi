import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff, faStar} from '@fortawesome/free-solid-svg-icons';
import LibraryRating from 'react-rating';

const RatingFilter = ({column: {filterValue, setFilter}}: any) => {

    return (
        <div className="pt-3 w-32">
            <div className="flex items-center text-sm  overflow-hidden">
                <LibraryRating
                    className="whitespace-no-wrap"
                    initialRating={filterValue}
                    onChange={value => {
                        setFilter(value);
                    }}
                    emptySymbol={<FontAwesomeIcon icon={faStar} className="text-white" size="lg"/>}
                    fullSymbol={<FontAwesomeIcon icon={faStar} className="text-yellow-500" size="lg"/>}
                />
                <button className="w-1/4" onClick={() => setFilter(undefined)}>
                    <FontAwesomeIcon icon={faPowerOff} size="lg"/>
                </button>
            </div>
        </div>
    );
};

export default RatingFilter;