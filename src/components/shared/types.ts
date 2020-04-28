import {User} from "../user/types";

export interface Level {
    id: string
    name: string
    __typename?: GraphqlTypeName
}

export interface Field {
    id: string
    name: string
    __typename?: GraphqlTypeName
}

export interface SearchKeyword {
    id: string
    name: string
    __typename?: GraphqlTypeName
}

export interface Review {
    __typename?: GraphqlTypeName
    text: string,
    rate: number,
    user?: User
}

export interface Rating {
    __typename?: GraphqlTypeName
    count: number
    average: number
    reviews: Review[]
}

export interface City {
    id: string
    name: string
    __typename?: GraphqlTypeName
}

export interface Address {
    city: City
    __typename?: GraphqlTypeName
}

export type GraphqlTypeName =
    'Teacher'
    | 'Student'
    | 'SearchKeyword'
    | 'Level'
    | 'GroupClass'
    | 'Field'
    | 'Course'
    | 'City'
    | 'Address'
    | 'ClassTime'
    | 'ContactInfo'
    | 'GroupClassSchedule'
    | 'GroupClassSettings'
    | 'Review'
    | 'UserAccount'
    | 'Rating'
    | 'Avatar'