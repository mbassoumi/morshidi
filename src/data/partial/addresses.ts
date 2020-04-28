import {Address} from "../../components/shared/types";
import CITIES from "../cities";

const TYPE_NAME = 'Address';

const ADDRESSES: Address[] = [
    {
        __typename: TYPE_NAME,
        city: CITIES[0],
    },
    {
        __typename: TYPE_NAME,
        city: CITIES[1],
    },
    {
        __typename: TYPE_NAME,
        city: CITIES[2],
    },
    {
        __typename: TYPE_NAME,
        city: CITIES[3],
    },
    {
        __typename: TYPE_NAME,
        city: CITIES[4],
    },
];

export default ADDRESSES;

