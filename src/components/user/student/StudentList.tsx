import React, {useMemo} from 'react';

import DataTable from '../../shared/datatable/DataTable';
import SelectFilter from '../../shared/datatable/filters/SelectFilter';
import MultipleOptionsCell from '../../shared/datatable/components/MultipleOptionsCell';
import {CellProps} from 'react-table';
import ImageCell from '../../shared/datatable/components/ImageCell';
import {Student} from "./types";


interface StudentListProps {
    students: Student[]
}

const StudentList = ({students}: StudentListProps) => {


    const columns = useMemo(() => [
        {
            Header: 'General Info',
            columns: [
                {
                    Header: 'Picture',
                    accessor: 'picture',
                    disableSortBy: true,
                    disableFilters: true,
                    Cell: ({cell: {value, row}}: CellProps<any>) => <ImageCell src={value} alt={row.original.name}/>
                },
                {
                    Header: 'Name',
                    accessor: 'name'
                },
                {
                    Header: 'Username',
                    accessor: 'username',
                    Filter: SelectFilter,
                    filter: 'includes',
                },
                {
                    Header: 'Level',
                    accessor: 'level',
                    Filter: SelectFilter,
                    filter: 'hasOne',
                    disableSortBy: true,
                    Cell: ({cell: {value}}: CellProps<any>) => <MultipleOptionsCell values={value}/>,
                },
            ]
        },
        {
            Header: 'Contact Info.',
            columns: [
                {
                    Header: 'Whatsapp',
                    accessor: 'whatsapp'
                },
                {
                    Header: 'Phone',
                    accessor: 'phone'
                },
                {
                    Header: 'Email',
                    accessor: 'email',
                },
            ]
        }
    ], []);

    const data = useMemo(() => students, [students]);

    return (
        <div>
            <DataTable title="Users List" columns={columns} data={data}/>
        </div>
    );
};


export default StudentList;