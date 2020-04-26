import React, {useMemo} from 'react';

import DataTable from '../shared/datatable/DataTable';
import SelectFilter from '../shared/datatable/filters/SelectFilter';
import MultipleOptionsCell from '../shared/datatable/components/MultipleOptionsCell';
import Rating from '../shared/Rating';
import RatingFilter from '../shared/datatable/filters/RatingFilter';
import Actions from '../shared/datatable/components/Actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faPencilAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
import {CellProps} from 'react-table';
import SliderFilter from '../shared/datatable/filters/SliderFilter';
import {Course} from './types';
import DataTableLinkButton from '../shared/datatable/components/DataTableLinkButton';


interface CoursesListProps {
    courses: Course[]
}

const CoursesList = ({courses}: CoursesListProps) => {

    const getRowActions = (id: number) => {
        return [
            {
                url: `/course/${id}`,
                title: <span><FontAwesomeIcon icon={faEye} className="mr-2"/> View</span>
            },
            {
                url: `/course/${id}/edit`,
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
            Header: 'Teacher',
            accessor: 'teacher.name'
        },
        {
            Header: 'Rating',
            accessor: 'rating.average',
            Filter: RatingFilter,
            filter: 'graterThan',
            Cell: ({cell: {value}}: CellProps<any>) => <Rating count={undefined} average={value} readonly={true}/>,
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
            accessor: 'levels',
            Filter: SelectFilter,
            filter: 'hasOne',
            disableSortBy: true,
            Cell: ({cell: {value}}: CellProps<any>) => <MultipleOptionsCell values={value}/>,
        },
        {
            Header: 'Classes',
            accessor: 'classes',
            Filter: SliderFilter,
            filter: 'graterThan',
        },
        {
            Header: 'Students',
            accessor: 'students',
            Filter: SliderFilter,
            filter: 'graterThan',
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

    const buttons = [
        <DataTableLinkButton key="create-course" className="w-32 mx-1" to="/course/create">
            <span className="mx-2">
                Create
            </span>
            <FontAwesomeIcon icon={faPlus} size="sm"/>
        </DataTableLinkButton>

    ];

    const data = useMemo(() => courses, [courses]);

    return (
        <div>
            <DataTable title="Courses List" columns={columns} data={data} buttons={buttons}/>
        </div>
    );
};


export default CoursesList;