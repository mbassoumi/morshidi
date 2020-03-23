import React from 'react';

const SelectFilter = ({column: {filterValue, setFilter, preFilteredRows, id}}: any) => {

    const options = React.useMemo(() => {
        const options: any = new Set();
        //@ts-ignore
        preFilteredRows.forEach(row => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectFilter;

