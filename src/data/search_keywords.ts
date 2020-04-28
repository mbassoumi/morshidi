import {SearchKeyword} from "../components/shared/types";

const TYPE_NAME = 'SearchKeyword';

const SEARCH_KEYWORDS: SearchKeyword[] = [
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000001000',
        name: 'Online'
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000002000',
        name: 'Physical'
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000003000',
        name: 'Spring boot'
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000004000',
        name: 'python'
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000005000',
        name: 'whiteboard'
    }
];

export default SEARCH_KEYWORDS;