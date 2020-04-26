import React, {useMemo} from 'react';

import DataTable from '../../shared/datatable/DataTable';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faPencilAlt, faPlus, faUsers} from '@fortawesome/free-solid-svg-icons';
import {CellProps} from 'react-table';
import SliderFilter from '../../shared/datatable/filters/SliderFilter';
import DataTableLinkButton from '../../shared/datatable/components/DataTableLinkButton';
import Actions from '../../shared/datatable/components/Actions';
import {Course} from "../../course/types";
import {GroupClass} from "./types";

interface GroupClassesListProps {
    course: Course
    courseClasses: GroupClass
}

const GroupClassesList = ({course, courseClasses}: GroupClassesListProps) => {

    const getRowActions = (id: number, courseId: string) => {
        return [
            {
                url: `/course/${courseId}/class/${id}`,
                title: <span><FontAwesomeIcon icon={faEye} className="mr-2"/> View</span>
            },
            {
                url: `/course/${courseId}/class/${id}/edit`,
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
                    <Actions actions={getRowActions(row.original.id, course.id)}/>
                );
            },
        },

    ], [course]);

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


export default GroupClassesList;