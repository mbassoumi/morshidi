import React from 'react';

interface MultipleOptionsCellProps {
    values: string[]
}

const MultipleOptionsCell = ({values}: MultipleOptionsCellProps) => {


    return (
        <div>
            {
                values.map((field, index) => (
                    <span className="inline-block bg-indigo-500 text-white uppercase m-1 px-1 rounded-md"
                          key={index}>{field}</span>
                ))
            }
        </div>
    );
};

export default MultipleOptionsCell;