import React, {useMemo} from 'react';
import TEACHERS from '../../data/teachers';

import DataTable from '../shared/datatable/DataTable';
import SelectFilter from '../shared/datatable/filters/SelectFilter';
import MultipleOptionsCell from '../shared/datatable/components/MultipleOptionsCell';
import Rating from '../shared/Rating';
import RatingFilter from '../shared/datatable/filters/RatingFilter';
import Actions from '../shared/datatable/components/Actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';


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
                    //@ts-ignore
                    Cell: ({cell: {value}}) => <Rating count={undefined} average={value} readonly={true}/>,
                },
                {
                    Header: 'Fields',
                    accessor: 'fields',
                    Filter: SelectFilter,
                    filter: 'hasOne',
                    disableSortBy: true,
                    //@ts-ignore
                    Cell: ({cell: {value}}) => <MultipleOptionsCell values={value}/>,
                },
                {
                    Header: 'Levels',
                    accessor: 'levels',
                    Filter: SelectFilter,
                    filter: 'hasOne',
                    disableSortBy: true,
                    //@ts-ignore
                    Cell: ({cell: {value}}) => <MultipleOptionsCell values={value}/>,
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
                    //@ts-ignore
                    Cell: ({cell: {row}}) => {
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