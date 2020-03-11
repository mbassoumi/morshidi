import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';


import typeDefs from './schema';

import resolvers from './resolvers';


export const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    resolvers,
    typeDefs
});

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
    console.log(result);
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
    console.log(result);
});