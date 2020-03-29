import {useLocation} from 'react-router-dom';

export const useRouteQuery = () => {
    return new URLSearchParams(useLocation().search);
};