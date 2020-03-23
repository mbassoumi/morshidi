import React from 'react';
// import {ColumnInstance, UseFiltersColumnProps} from 'react-table';

const TextFilter = ({column: {filterValue, preFilteredRows, setFilter}}: any) => {

    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                // console.log('d');
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    );
};

export default TextFilter;