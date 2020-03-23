import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const GlobalFilter = ({preGlobalFilteredRows, globalFilter, setGlobalFilter}: any) => {
    const count = preGlobalFilteredRows.length;

    return (
        <span className="flex items-center text-sm">
            <FontAwesomeIcon icon={faSearch} size="lg"
                             className="text-gray-600 hover:text-green-300 mx-2"/>

            <input
                className="appearance-none   rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                value={globalFilter || ''}
                onChange={e => {
                    setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                }}
                placeholder={`search ${count} records...`}
            />
    </span>
    );
};


export default GlobalFilter;