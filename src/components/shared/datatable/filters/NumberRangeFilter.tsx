import React from 'react';

const NumberRangeFilter = ({column: {filterValue = [], preFilteredRows, setFilter, id}}: any) => {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        //@ts-ignore
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div className="pt-3">
            <div className="flex items-center text-sm">
                <div className="w-24 bg-white rounded-lg overflow-hidden">
                    <input
                        className="text-xs appearance-none block pl-2 pr-2 py-1 w-full bg-white placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        value={filterValue[0] || ''}
                        type="number"
                        onChange={e => {
                            const val = e.target.value;
                            setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
                        }}
                        placeholder={`Min (${min})`}
                    />
                </div>
                <div className="px-1">
                    to
                </div>
                <div className="w-24 bg-white rounded-lg overflow-hidden">
                    <input
                        className="text-xs appearance-none block pl-2 pr-2 py-1 w-full bg-white placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                        value={filterValue[1] || ''}
                        type="number"
                        onChange={e => {
                            const val = e.target.value;
                            setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
                        }}
                        placeholder={`Max (${max})`}
                    />
                </div>
            </div>
        </div>
    );
};

export default NumberRangeFilter;