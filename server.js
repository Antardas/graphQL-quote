const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { ApolloServer } = require('apollo-server');

const resolvers = require('./resolvers');
const typeDefs = require('./schemaGQL');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
// ----------------------------------------------------------------
server.listen().then(({ url }) => console.log('Your server ready at', url));
