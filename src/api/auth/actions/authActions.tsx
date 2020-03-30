import {User} from '../../types';
import {LOGIN} from '../constants/action-types';

export const loginAction = (user: User) => {
    return {
        type: LOGIN,
        payload: {
            user: user
        }
    }
};