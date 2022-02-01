const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        greet: String
        users: [User]
        user(_id: ID!): User
        userQuotes(by: ID!): [Quote]
        quotes: [QuoteWithName]
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        quotes: [QuoteWithName]
    }
    type Quote {
        name: String
        by: ID
    }
    type QuoteWithName {
        name: String
        by: IdName
    }
    type IdName {
        _id: String
        firstName: String
    }
    type Token {
        token: String
    }
    type Mutation {
        registerUser(newUser: RegisterUserInput!): User
        singInUser(logInUserData: SignInUserInput!): Token
        createQuote(quote: String!): String
    }
    input RegisterUserInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    input SignInUserInput {
        email: String!
        password: String!
    }
`;
module.exports = typeDefs;
