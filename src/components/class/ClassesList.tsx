import React, {useMemo} from 'react';

import DataTable from '../shared/datatable/DataTable';
import SelectFilter from '../shared/datatable/filters/SelectFilter';
import MultipleOptionsCell from '../shared/datatable/components/MultipleOptionsCell';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {CellProps} from 'react-table';
import SliderFilter from '../shared/datatable/filters/SliderFilter';
import {Link} from 'react-router-dom';
import {ClassesListProps} from './types';


const ClassesList = ({courseClasses}: ClassesListProps) => {

    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Nickname',
            accessor: 'nickname'
        },
        {
            Header: 'Fields',
            accessor: 'fields',
            Filter: SelectFilter,
            filter: 'hasOne',
            disableSortBy: true,
            Cell: ({cell: {value}}: CellProps<any>) => <MultipleOptionsCell values={value}/>,
        },
        {
            Header: 'Levels',
            accessor: 'targetLevels',
            Filter: SelectFilter,
            filter: 'hasOne',
            disableSortBy: true,
            Cell: ({cell: {value}}: CellProps<any>) => <MultipleOptionsCell values={value}/>,
        },
        {
            Header: 'Students',
            accessor: 'students.length',
            Filter: SliderFilter,
            filter: 'graterThan',
            Cell: ({cell: {value, row}}: CellProps<any>) => (
                <Link to={`/course/${row.original.course_id}/class/${row.original.id}`}
                      className="flex items-center text-green-500 hover:text-blue-500 cursor-pointer">
                    <span className="mx-2">{value}</span>
                    <FontAwesomeIcon icon={faUsers} size="lg"/>
                </Link>
            ),
        },
    ], []);

    const data = useMemo(() => courseClasses, [courseClasses]);

    return (
        <div>
            <DataTable title="Classes List" columns={columns} data={data}/>
        </div>
    );
};


export default ClassesList;