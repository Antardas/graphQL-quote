const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greet: String
        users: [User]
        user(id: ID!): User
        userQuotes(by: ID!): [Quote]
    }
    type User {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        quotes: [Quote]
    }
    type Quote {
        name: String
        by: ID
    }
    type Mutation {
        registerUser(newUser: UserInput!): User
    }
    input UserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
`;

module.exports = typeDefs;
