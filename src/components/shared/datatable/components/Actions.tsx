import React, {ComponentProps} from 'react';
import './actions.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

interface Action {
    url: string,
    title: string | ComponentProps<any>
}

interface ActionsProps {
    title?: string,
    actions: Action[]
}

const Actions = ({title, actions}: ActionsProps) => {

    const items = actions.map((action, index) => {
        return (
            <li key={index} className="bg-indigo-700 hover:bg-indigo-500 block whitespace-no-wrap">
                <Link className="py-2 px-4 block text-center" to={action.url}>{action.title}</Link>
            </li>
        );
    });

    return (
        <div>
            <div className="dropdown inline-block relative">
                <button className="bg-indigo-900 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span>
                        {
                            title ? title : <FontAwesomeIcon icon={faEllipsisV} size="lg"/>
                        }

                    </span>
                </button>
                <ul className="dropdown-content z-10 absolute hidden rounded-lg overflow-hidden  text-white pt-1">
                    {items}
                </ul>
            </div>
        </div>
    );
};

export default Actions;