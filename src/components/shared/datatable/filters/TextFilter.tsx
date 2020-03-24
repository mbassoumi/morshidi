import React from 'react';
// import {ColumnInstance, UseFiltersColumnProps} from 'react-table';

const TextFilter = ({column: {filterValue, preFilteredRows, setFilter}}: any) => {

    const count = preFilteredRows.length;

    return (
        <div className="pt-3">
            <div className="flex items-center text-sm bg-white border-2 rounded-lg overflow-hidden">
                <input
                    className="text-xs appearance-none block pl-2 pr-2 py-1 w-full bg-white placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    value={filterValue || ''}
                    onChange={e => {
                        // console.log('d');
                        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
                    }}
                    placeholder={`Search ${count} records...`}
                />
            </div>
        </div>
    );
};

export default TextFilter;