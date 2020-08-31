// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql `
    input BookInput {
        bookId: Int
        authors: [String]
        description: String
        title: String
        image: Int
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: Int
        authors: [String]
        description: String
        title: String
        image: Int
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email:String!, password: String!): Auth
        addUser(username:String!, email: String!, password:String!):Auth
        saveBook(input: BookInput): User
        removeBook(bookId: Int): User
    }
`;

module.exports = typeDefs;