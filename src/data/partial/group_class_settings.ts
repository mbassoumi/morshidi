import {GroupClassSettings} from "../../components/class/group_class/types";
import ADDRESSES from "./addresses";

const TYPE_NAME = 'GroupClassSettings';

const GROUP_CLASS_SETTINGS: GroupClassSettings[] = [
    {
        __typename: TYPE_NAME,
        online: false,
        min_students: 12,
        max_students: 30,
        price_per_student: 25,
        address: ADDRESSES[0],
        address_details: 'some specific address',
    },
    {
        __typename: TYPE_NAME,
        online: false,
        min_students: 32,
        max_students: 50,
        price_per_student: 55,
        address: ADDRESSES[1],
        address_details: 'some specific address too',
    },
    {
        __typename: TYPE_NAME,
        online: true,
        min_students: 32,
        max_students: 50,
        price_per_student: 90,
    },
    {
        __typename: TYPE_NAME,
        online: true,
        min_students: 22,
        max_students: 30,
        price_per_student: 65,
    },
]

export default GROUP_CLASS_SETTINGS;