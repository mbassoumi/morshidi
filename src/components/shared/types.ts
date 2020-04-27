import {User} from "../user/types";

export interface Level {
    id: string
    name: string
}

export interface Field {
    id: string
    name: string
}

export interface SearchKeyword {
    id: string
    name: string
}

export interface Review {
    text: string,
    rate: number,
    user?: User
}

export interface Rating {
    count: number
    average: number
    reviews: Review[]
}

export interface City {
    id: string
    name: string
}

export interface Address {
    city: City
}