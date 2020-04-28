import {Review} from "../../components/shared/types";
import STUDENTS from "../students";

const TYPE_NAME = 'Review';

const REVIEWS: Review[] = [
    {
        __typename: TYPE_NAME,
        text: 'bad one',
        rate: 1,
        user: STUDENTS[0],
    },
    {
        __typename: TYPE_NAME,
        text: 'nice one',
        rate: 4,
        user: STUDENTS[1],
    },
    {
        __typename: TYPE_NAME,
        text: 'cool',
        rate: 4,
        user: STUDENTS[1],
    },
    {
        __typename: TYPE_NAME,
        text: 'not too much',
        rate: 3,
        user: STUDENTS[0],
    },
    {
        __typename: TYPE_NAME,
        text: 'very helpful',
        rate: 5,
        user: STUDENTS[1],
    },
];

export default REVIEWS;