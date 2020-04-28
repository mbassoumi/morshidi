import {ContactInfo} from "../../components/user/types";

const TYPE_NAME = 'ContactInfo';

const CONTACT_INFOS: ContactInfo[] = [
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000100000',
        type: 'email',
        value: 'email1@morshidi.com',
        confirmed: true,
        primary: true,
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000200000',
        type: 'email',
        value: 'email2@morshidi.com',
        confirmed: true,
        primary: false,
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000300000',
        type: 'email',
        value: 'email3@morshidi.com',
        confirmed: true,
        primary: false,
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000400000',
        type: 'phone',
        value: '0599123456789',
        confirmed: true,
        primary: true,
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000500000',
        type: 'phone',
        value: '0599123123123',
        confirmed: true,
        primary: false,
    },
    {
        __typename: TYPE_NAME,
        id: 'aaaaaaaa-bbbb-cccc-dddd-000000600000',
        type: 'phone',
        value: '0599876123564',
        confirmed: true,
        primary: false,
    },

]

export default CONTACT_INFOS;