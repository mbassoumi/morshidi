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

export interface Rating {
    count: number
    average: number
    reviews: string[]
}

export interface City {
    id: string
    name: string
}

export interface Address {
    city: City
}