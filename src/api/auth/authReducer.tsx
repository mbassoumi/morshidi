import {User} from '../types';
import {LOGIN, LOGOUT} from './constants/action-types';
import TEACHERS from './../../data/teachers'

type ActionType = typeof LOGIN | typeof LOGOUT;

interface PayloadType {
    user: User
}

interface ActionProps {
    type: ActionType,
    payload?: PayloadType
}

interface AuthStateType {
    user: User | undefined
}

const initialState: AuthStateType = {
    user: undefined,
    // user: TEACHERS[0],
};


export const authReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
        case LOGIN:
            return {
                user: action.payload?.user
            };
        case LOGOUT:
            return {
                user: undefined
            };
        default:
            return state;
    }
};