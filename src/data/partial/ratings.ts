import {Rating} from "../../components/shared/types";

const TYPE_NAME = 'Rating';

const RATINGS: Rating[] = [
    {
        __typename: TYPE_NAME,
        count: 5,
        average: 1.5,
        reviews: [
            // REVIEWS[0],
            // REVIEWS[1],
            // REVIEWS[2],
        ],
    },
    {
        __typename: TYPE_NAME,
        count: 25,
        average: 4.5,
        reviews: [
            // REVIEWS[2],
            // REVIEWS[3],
        ],
    },
    {
        __typename: TYPE_NAME,
        count: 3,
        average: 4.9,
        reviews: [
            // REVIEWS[2],
            // REVIEWS[3],
        ],
    },
]

export default RATINGS;