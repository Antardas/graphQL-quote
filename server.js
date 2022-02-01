const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
require('dotenv').config();
const { ApolloServer } = require('apollo-server');

const Mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const typeDefs = require('./schemaGQL');

const { JWT_SECRET } = process.env;

Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

Mongoose.connection.on('connected', () => {
    console.log('Mongodb Connected Successfully');
});
Mongoose.connection.on('error', (e) => {
    console.log('Mongodb Connected failed at:', e);
});
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const { authorization } = req.headers;
        if (authorization) {
            const { userId } = jwt.verify(authorization, JWT_SECRET);
            return { userId };
        }
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
// ----------------------------------------------------------------
server.listen().then(({ url }) => console.log('Your server ready at', url));
