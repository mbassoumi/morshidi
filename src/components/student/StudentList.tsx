import React, {useMemo} from 'react';
import STUDENTS from '../../data/students';

import DataTable from '../shared/datatable/DataTable';
import SelectFilter from '../shared/datatable/filters/SelectFilter';
import SliderFilter from '../shared/datatable/filters/SliderFilter';
import NumberRangeFilter from '../shared/datatable/filters/NumberRangeFilter';


const StudentList = () => {


    const columns = useMemo(() => [
        {
            Header: 'General Info',
            columns: [
                {
                    Header: 'ID',
                    accessor: 'id',
                    // Filter: SliderFilter,
                    // filter: 'equals',
                    Filter: NumberRangeFilter,
                    filter: 'between',
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
                    accessor: 'level'
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
                    accessor: 'email'
                },
            ]
        }
    ], []);

    const data = useMemo(() => STUDENTS, []);

    return (
        <div>
            <DataTable title="Users List" columns={columns} data={data}/>
            {/*<StyledDataTable/>*/}

        </div>
    );
};


export default StudentList;