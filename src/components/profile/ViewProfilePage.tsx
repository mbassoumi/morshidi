import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

const ViewProfilePage = ({match}: RouteComponentProps) => {

    //@ts-ignore
    const id = parseInt(match.params.id);

    return (
        <div>
            test
        </div>
    )
};

export default ViewProfilePage;