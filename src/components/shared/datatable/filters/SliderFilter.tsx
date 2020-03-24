import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';

const SliderFilter = ({column: {filterValue, setFilter, preFilteredRows, id}}: any) => {
    // Calculate the min and max
    // using the preFilteredRows

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
            <div className="flex items-center text-sm  overflow-hidden">
                <input
                    className="w-3/4"
                    type="range"
                    min={min}
                    max={max}
                    value={filterValue || min}
                    onChange={e => {
                        setFilter(parseInt(e.target.value, 10));
                    }}
                />
                <button className="w-1/4" onClick={() => setFilter(undefined)}>
                    <FontAwesomeIcon icon={faPowerOff} size="lg"/>
                </button>
            </div>
        </div>
    );
};

export default SliderFilter;