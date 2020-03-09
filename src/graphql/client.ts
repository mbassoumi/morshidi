import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

import STUDENTS from './../data/students'

const typeDefs = gql`
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

    type Query {
        students: [Student!]!
        student(id: ID!): Student
    }
`;

const resolvers = {
    Query: {
        students() {
            return STUDENTS;
        },
        //@ts-ignore
        student(parent, args, { client }) {
            return STUDENTS.find(student => student.id === args.id)
        }
    },
};



export const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    resolvers,
    typeDefs
});

//
// gql`
//     directive @cacheControl(
//         maxAge: Int
//         scope: CacheControlScope
//     ) on FIELD_DEFINITION | OBJECT | INTERFACE
//     enum CacheControlScope {
//         PUBLIC
//         PRIVATE
//     }
//
//     type ExchangeRate {
//         currency: String
//         rate: String
//         name: String
//     }
//
//     type Query {
//         rates(currency: String!): [ExchangeRate]
//     }
//
//     scalar Upload
//
// `;

client.query({
    query: gql`
        query getStudentsList {
            students @client {
                __typename
                id
                name
                interests
            }
        }
    `
})
.then(result => {
    console.log('result getStudentsList');
    console.log(result)
});

client.query({
    query: gql`
        query getStudent {
            student(id: 4) @client {
                __typename
                id
                name
                interests
            }
        }
    `
})
.then(result => {
    console.log('result getStudent');
    console.log(result)
});