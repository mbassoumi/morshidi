import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

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
        <div className="pt-3">
            <div className="flex items-center text-sm bg-white border-2 rounded-lg overflow-hidden">
                <select
                    className="text-xs appearance-none block pl-2 pr-2 py-1 w-full bg-white placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
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
                <div className="">
                    <FontAwesomeIcon icon={faAngleDown} size="lg"
                                     className="text-gray-600 hover:text-green-300 mx-2"/>
                </div>
            </div>
        </div>
    );
};

export default SelectFilter;

