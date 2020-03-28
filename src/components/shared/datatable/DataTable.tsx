import React, {useMemo} from 'react';
import {useFilters, useGlobalFilter, usePagination, useSortBy, useTable} from 'react-table';
import TextFilter from './filters/TextFilter';
import GlobalFilter from './filters/GlobalFilter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faCaretLeft, faCaretRight, faSort, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';

const DataTable = ({title, columns, data, debug}: any = {debug: false}) => {

    const defaultColumn = useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: TextFilter,

        }),
        []
    );

    const pagesRowsLimit = [
        2,
        10,
        20,
        50,
        100
    ];


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
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            },

            //@ts-ignore
            hasOne: (rows, id, filterValue) => {
                //@ts-ignore
                return rows.filter(row => {
                    const rowValue = row.values[id];
                    if (rowValue !== undefined) {
                        return rowValue.includes(filterValue);
                    }
                    return false;
                });
            },

            //@ts-ignore
            graterThan: (rows, id, filterValue) => {
                //@ts-ignore
                return rows.filter(row => {
                    const rowValue = row.values[id];
                    if (rowValue !== undefined) {
                        return rowValue >= filterValue;
                        // return rowValue.includes(filterValue);
                    }
                    return false;
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

        state: {
            filters,
            globalFilter,
            pageIndex,
            pageSize,
        },
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,


        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
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
        usePagination,
    );


    return (
        <div className="px-4 sm:px-8">
            <div className="py-8">

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">

                        <table {...getTableProps()} className="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th colSpan={visibleColumns.length}
                                    className="px-5 py-3 border-b border-indigo-700 bg-indigo-900">

                                    <div className="flex justify-between items-center">
                                        <div className="font-semibold text-2xl tracking-wide text-white uppercase">
                                            {title}
                                        </div>


                                        <div
                                            className="flex items-center text-sm bg-white border-2 rounded-lg overflow-hidden">

                                            <div className="flex items-center border-r-2 cursor-pointer">
                                                <select
                                                    className=" cursor-pointer appearance-none block pl-2 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                                    value={pageSize}
                                                    onChange={e => {
                                                        setPageSize(Number(e.target.value));
                                                    }}
                                                >
                                                    {pagesRowsLimit.map(pageSize => (
                                                        <option key={pageSize} value={pageSize}>
                                                            Show {pageSize}
                                                        </option>
                                                    ))}
                                                </select>
                                                <div className="py-2">
                                                    <FontAwesomeIcon icon={faAngleDown} size="lg"
                                                                     className="text-gray-600 hover:text-green-300 mx-2"/>
                                                </div>
                                            </div>

                                            <div className="flex items-center text-sm bg-white overflow-hidden">
                                                <input
                                                    className="text-center appearance-none block pl-2  py-2 w-24 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                                                    type="number"
                                                    min={1}
                                                    max={pageOptions.length}
                                                    onChange={e => {
                                                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                                        gotoPage(page);
                                                    }}
                                                    placeholder={`Go to page`}
                                                />
                                            </div>
                                        </div>


                                        <GlobalFilter
                                            preGlobalFilteredRows={preGlobalFilteredRows}
                                            globalFilter={globalFilter}
                                            setGlobalFilter={setGlobalFilter}
                                        />
                                    </div>

                                </th>
                            </tr>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()} className="px-4 py-2">
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}
                                            className="relative px-5 py-3 border-b border-indigo-700 bg-indigo-900 text-left text-xs font-semibold text-white uppercase tracking-wider">

                                            <div  {...column.getHeaderProps(column.getSortByToggleProps())}
                                                  className="flex justify-between absolute top-0 mt-2 w-32">
                                                <div>
                                                    {column.render('Header')}
                                                </div>
                                                <div>
                                                    {
                                                        column.isSorted
                                                            ?
                                                            column.isSortedDesc
                                                                ? (
                                                                    <FontAwesomeIcon icon={faSortDown} size="lg"
                                                                                     className="text-green-500"/>
                                                                )
                                                                : (
                                                                    <FontAwesomeIcon icon={faSortUp} size="lg"
                                                                                     className="text-red-500"/>
                                                                )
                                                            : (
                                                                column.canSort ?
                                                                    <FontAwesomeIcon icon={faSort} size="lg"
                                                                                     className="text-white"/>
                                                                    : ''
                                                            )
                                                    }
                                                </div>
                                            </div>
                                            {/* Render the columns filter UI */}
                                            <div className="pt-2">
                                                {column.canFilter ? column.render('Filter') :
                                                    <div className="w-32"></div>}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}

                            </thead>


                            <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
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
                                <div>Showing the first {pageSize} results of {rows.length} rows</div>
                            </span>


                            <div className="inline-flex mt-2 xs:mt-0">

                                <button
                                    onClick={() => gotoPage(0)} disabled={!canPreviousPage}
                                    className={(!canPreviousPage ? 'cursor-not-allowed  ' : ' hover:bg-indigo-400 ') + 'bg-indigo-900 text-sm text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-lg focus:bg-indigo-500 rounded-l'}>
                                    <FontAwesomeIcon icon={faCaretLeft} size="2x"/>
                                    <FontAwesomeIcon icon={faCaretLeft} size="2x"/>
                                </button>
                                <button
                                    onClick={() => previousPage()} disabled={!canPreviousPage}
                                    className={(!canPreviousPage ? 'cursor-not-allowed  ' : ' hover:bg-indigo-400 ') + 'bg-indigo-900 text-sm text-white font-semibold py-2 px-4  focus:outline-none focus:shadow-lg focus:bg-indigo-500'}>
                                    Prev
                                </button>
                                <button
                                    onClick={() => nextPage()} disabled={!canNextPage}
                                    className={(!canNextPage ? 'cursor-not-allowed  ' : ' hover:bg-indigo-400 ') + 'bg-indigo-900 text-sm text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-lg focus:bg-indigo-500'}>
                                    Next
                                </button>
                                <button
                                    onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}
                                    className={(!canNextPage ? 'cursor-not-allowed ' : ' hover:bg-indigo-400 ') + 'bg-indigo-900 text-sm text-white font-semibold py-2 px-4  focus:outline-none focus:shadow-lg focus:bg-indigo-500 rounded-r'}>
                                    <FontAwesomeIcon icon={faCaretRight} size="2x"/>
                                    <FontAwesomeIcon icon={faCaretRight} size="2x"/>
                                </button>
                            </div>
                            <strong className="text-gray-600">
                                {`Page ${pageIndex + 1} of ${pageOptions.length}  `}
                            </strong>
                        </div>
                        {debug && (
                            <div>
                                <pre>
                                  <code>{JSON.stringify(filters, null, 2)}</code>
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataTable;