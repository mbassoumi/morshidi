import {gql} from 'apollo-boost';

export default gql`
    type Rating {
        count: Int!
        average: Float!
    }

    type Teacher {
        id       : ID!
        name     : String!
        username : String!
        from: String!
        classes  : Int!
        sessions : Int!
        followers: Int
        rating   : Rating!
        aboutMe    : String!
        fields     : [String!]!
        levels     : [String!]!
        whatsapp: String!
        phone   : String!
        email   : String!
    }

    type Student {
        id      : ID!
        name    : String!
        username: String!
        interests  : [String!]!
        level      : String!
        whatsapp: String!
        phone   : String!
        email   : String!
    }

    type Class {
        id            : ID!
        name          : String!
        nickname      : String!
        fields      : [String!]!
        targetLevels: [String!]!
        description : String!
        requirements: [String!]!
    }

    type City {
        label: String!
        value: String!
    }

    type Field {
        label: String!
        value: String!
    }

    type Interest {
        label: String!
        value: String!
    }
    type Keyword {
        label: String!
        value: String!
    }

    type Level {
        label: String!
        value: String!
    }

    type Course {
        id       : ID!
        name     : String!
        classes  : Int!
        students : Int!
        rating   : Rating!
        fields     : [String!]!
        levels     : [String!]!
        description: String!
        requirements: [String!]!
        teacher: Teacher!,
    }


    type Query {
        teachers: [Teacher!]!
        teacher(id: ID!): Teacher
        students: [Student!]!
        student(id: ID!): Student
        classes: [Class!]!
        class(id: ID!): Class
        courses: [Course!]!
        course(id: ID!): Course

        fields: [Field!]!
        levels: [Level!]!
        interests: [Interest!]!
        cities: [City!]!
        keywords: [Keyword!]!
    }
`;
