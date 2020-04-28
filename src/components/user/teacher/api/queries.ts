import {gql} from "apollo-boost";
import {USER_ACCOUNT_FIELDS_FRAGMENT} from "../../graphql/fragments";

export const TEACHER_FIELDS_FRAGMENT = gql`
    fragment teacherFields on Teacher {
        user_account {
            ...userAccountFields
        }
        rating {
            count
            average
        }
        bio
        #        followers: [Student!]!
        #        private_classes: [PrivateClass!]!
        #        courses: [Course!]!
        levels {
            id
            name
        }
        fields{
            id
            name
        }
    }
    ${USER_ACCOUNT_FIELDS_FRAGMENT}
`

export const getAllTeachersQuery = gql`
    query getAllTeachers {
        teachers @client {
            __typename
            user_account {
                ...userAccountFields
            }
            rating {
                count
                average
            }
            #            followers {
            #                __typename
            #                user_account {
            #                    id
            #                    first_name
            #                    last_name
            #                }
            #            }
            #            private_classes {
            #                id
            #            }
            #            courses {
            #                id
            #                description
            #            }
            levels {
                id
                name
            }
            fields {
                id
                name
            }
        }
    }
    ${USER_ACCOUNT_FIELDS_FRAGMENT}
`