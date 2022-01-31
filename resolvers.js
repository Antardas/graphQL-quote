const { randomBytes } = require('crypto');
const { quotes, users } = require('./fakeDB');

const resolvers = {
    Query: {
        greet: () => "Hello Bangladesh I'm coming",
        users: () => users,
        user: (_parent, { id }) => users.find((user) => user.id === id),
        userQuotes: (_parent, { by }) => quotes.filter((quote) => quote.by === by),
    },
    User: {
        quotes: (user) => quotes.filter((quote) => user.id === quote.by),
    },
    Mutation: {
        registerUser: (_parent, { newUser }) => {
            const id = randomBytes(5).toString('hex');
            console.log(id);
            users.push({ id, ...newUser });
            return users.find((user) => user.id === id);
        },
    },
};
module.exports = resolvers;
