import React, {useMemo} from 'react';
import {useFilters, useGlobalFilter, useSortBy, useTable} from 'react-table';
import TextFilter from './filters/TextFilter';
import GlobalFilter from './filters/GlobalFilter';

const DataTable = ({title, columns, data}: any) => {

    const defaultColumn = useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: TextFilter,

        }),
        []
    );


    const filterTypes = useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            // fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            //@ts-ignore
            text: (rows, id, filterValue) => {
                //@ts-ignore
                return rows.filter(row => {
                    // const rowValue = row.values[id];
                    // return rowValue !== undefined
                    //     ? String(rowValue)
                    //         .toLowerCase()
                    //         .startsWith(String(filterValue).toLowerCase())
                    //     : true;
                    return true;
                });
            },
        }),
        []
    );

    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,

        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,

            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes,
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
    );

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                        <table {...getTableProps()} className="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th colSpan={visibleColumns.length}
                                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100">

                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold text-2xl tracking-wide text-gray-700 uppercase">
                                            {title}
                                        </div>
                                        <GlobalFilter
                                            preGlobalFilteredRows={preGlobalFilteredRows}
                                            globalFilter={state.globalFilter}
                                            setGlobalFilter={setGlobalFilter}
                                        />
                                    </div>

                                </th>
                            </tr>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="px-4 py-2">
                                    {headerGroup.headers.map(column => (
                                        <th {
                                                ...column.getHeaderProps(column.getSortByToggleProps())
                                            }
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            {column.render('Header')}

                                            {/* Render the columns filter UI */}
                                            <div>{column.canFilter ? column.render('Filter') : null}</div>

                                            <span>
                                    {
                                        column.isSorted
                                            ?
                                            column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                            </span>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>


                            <tbody {...getTableBodyProps()}>
                            {rows.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return <td {...cell.getCellProps()}
                                                       className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{cell.render('Cell')}</td>;
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>


                        <div
                            className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span className="text-xs xs:text-sm text-gray-900">
                        <div>Showing the first 20 results of {rows.length} rows</div>
                        </span>
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                        <div>
                            <pre>
                              <code>{JSON.stringify(state.filters, null, 2)}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;