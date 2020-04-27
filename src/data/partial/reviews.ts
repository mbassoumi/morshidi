import {Review} from "../../components/shared/types";
import STUDENTS from "../students";

const REVIEWS: Review[] = [
    {
        text: 'bad one',
        rate: 1,
        user: STUDENTS[0],
    },
    {
        text: 'nice one',
        rate: 4,
        user: STUDENTS[0],
    },
    {
        text: 'cool',
        rate: 4,
        user: STUDENTS[0],
    },
    {
        text: 'not too much',
        rate: 3,
        user: STUDENTS[0],
    },
    {
        text: 'very helpful',
        rate: 5,
        user: STUDENTS[0],
    },
];

export default REVIEWS;