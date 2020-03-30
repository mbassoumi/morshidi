import React, {useMemo} from 'react';

import DataTable from '../shared/datatable/DataTable';
import SelectFilter from '../shared/datatable/filters/SelectFilter';
import MultipleOptionsCell from '../shared/datatable/components/MultipleOptionsCell';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faPencilAlt, faPlus, faUsers} from '@fortawesome/free-solid-svg-icons';
import {CellProps} from 'react-table';
import SliderFilter from '../shared/datatable/filters/SliderFilter';
import {ClassesListProps} from './types';
import DataTableLinkButton from '../shared/datatable/components/DataTableLinkButton';
import Actions from '../shared/datatable/components/Actions';


const ClassesList = ({course, courseClasses}: ClassesListProps) => {

    const getRowActions = (id: number) => {
        return [
            {
                url: `/course/${course.id}/class/${id}`,
                title: <span><FontAwesomeIcon icon={faEye} className="mr-2"/> View</span>
            },
            {
                url: `/course/${course.id}/class/${id}/edit`,
                title: <span><FontAwesomeIcon icon={faPencilAlt} className="mr-2"/> Edit</span>
            },
        ];
    };

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
            Header: 'Students',
            accessor: 'students.length',
            Filter: SliderFilter,
            filter: 'graterThan',
            Cell: ({cell: {value, row}}: CellProps<any>) => (
                <div className="flex items-center text-green-500">
                    <span className="mx-2">{value}</span>
                    <FontAwesomeIcon icon={faUsers} size="lg"/>
                </div>
            ),
        },
        {
            Header: 'Actions',
            disableFilters: true,
            disableSortBy: true,
            Cell: ({row}: CellProps<any>) => {
                return (
                    <Actions actions={getRowActions(row.original.id)}/>
                );
            },
        },

    ], []);

    const data = useMemo(() => courseClasses, [courseClasses]);

    const buttons = [
        <DataTableLinkButton key="create-class" className="w-32 mx-1" to={`/course/${course.id}/class/create`}>
            <span className="mx-2">
                Create
            </span>
            <FontAwesomeIcon icon={faPlus} size="sm"/>
        </DataTableLinkButton>

    ];

    return (
        <div>
            <DataTable title="Classes List" columns={columns} data={data} buttons={buttons}/>
        </div>
    );
};


export default ClassesList;