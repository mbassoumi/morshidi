import {gql} from "apollo-boost";

export const CONTACT_INFO_FIELDS_FRAGMENT = gql`
    fragment contactInfoFields on ContactInfo {
        id
        primary
        confirmed
        type
        value
    }
`

export const USER_ACCOUNT_FIELDS_FRAGMENT = gql`
    fragment userAccountFields on UserAccount {
        id
        username
        first_name
        last_name
        avatar {
            thumb
            uri
        }
        date_of_birth
        gender
        roles
        address {
            city {
                id
                name
            }
        }
        contact_info {
            ...contactInfoFields
        }
            
    }
    ${CONTACT_INFO_FIELDS_FRAGMENT}
`