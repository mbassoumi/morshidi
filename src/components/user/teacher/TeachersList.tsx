import React, {useMemo} from 'react';
import TEACHERS from '../../../data/teachers';

import DataTable from '../../shared/datatable/DataTable';
import SelectFilter from '../../shared/datatable/filters/SelectFilter';
import MultipleOptionsCell from '../../shared/datatable/components/MultipleOptionsCell';
import Rating from '../../shared/Rating';
import RatingFilter from '../../shared/datatable/filters/RatingFilter';
import Actions from '../../shared/datatable/components/Actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import {CellProps} from 'react-table';
import ImageCell from '../../shared/datatable/components/ImageCell';


const TeachersList = () => {

    const getRowActions = (id: number) => {
        return [
            {
                url: `teacher/${id}`,
                title: <FontAwesomeIcon icon={faEye} className=""/>
            },
        ];
    };

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
                    Header: 'From',
                    accessor: 'from',
                    Filter: SelectFilter,
                },
            ]
        },
        {
            Header: 'Career Info.',
            columns: [
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

            ]
        },
        {
            Header: 'Contact Info.',
            columns: [
                {
                    Header: 'Whatsapp',
                    accessor: 'whatsapp',
                },
                {
                    Header: 'Phone',
                    accessor: 'phone'
                },
                {
                    Header: 'Email',
                    accessor: 'email',
                },
                {
                    Header: 'Actions',
                    disableFilters: true,
                    disableSortBy: true,
                    Cell: ({cell: {row}}: CellProps<any>) => {
                        return (
                            <Actions actions={getRowActions(row.original.id)}/>
                        );
                    },
                },
            ]
        }
    ], []);

    const data = useMemo(() => TEACHERS, []);

    return (
        <div>
            <DataTable title="Teachers List" columns={columns} data={data}/>
        </div>
    );
};


export default TeachersList;