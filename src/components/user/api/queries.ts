import {gql} from "apollo-boost";
import {TEACHER_FIELDS_FRAGMENT} from "../teacher/api/queries";

export const getUserByIdQuery = gql`
    query getUserById {
        user(id: "aaaaaaaa-bbbb-cccc-dddd-000000000001") @client {
            __typename
            ... on Teacher {
                ...teacherFields
            }
        }
    }
    ${TEACHER_FIELDS_FRAGMENT}
`