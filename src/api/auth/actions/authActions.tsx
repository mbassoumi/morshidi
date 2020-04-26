import {LOGIN} from '../constants/action-types';
import {User} from "../../../components/user/types";

export const loginAction = (user: User) => {
    return {
        type: LOGIN,
        payload: {
            user: user
        }
    }
};