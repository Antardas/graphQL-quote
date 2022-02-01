/* eslint-disable no-return-await */
/* eslint-disable no-underscore-dangle */
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { randomBytes } = require('crypto');
const { users } = require('./fakeDB');

const { JWT_SECRET, JWT_EXPIRE } = process.env;

const User = require('./models/UserModel');
const Quote = require('./models/QuoteModel');

const resolvers = {
    Query: {
        greet: () => "Hello Bangladesh I'm coming",
        users: async () => {
            const allUser = await User.find({});
            return allUser;
        },
        user: async (_parent, { _id }) => await User.findById(_id),
        userQuotes: async (_parent, { by }) => await Quote.find((quote) => quote.by === by),
        quotes: async () => await Quote.find({}).populate('by', '_id firstName'),
    },
    User: {
        quotes: async (user) => await Quote.find({ by: user._id }),
    },
    Mutation: {
        // _parent instead use only _
        registerUser: async (_parent, { newUser }) => {
            const existUser = await User.findOne({ email: newUser.email });
            console.log(existUser);
            if (existUser) {
                throw new Error(`${newUser.email} this email already used`);
            } else {
                const hashedPassword = await bcryptjs.hash(newUser.password, 10);

                const newUserInfo = await new User({
                    ...newUser,
                    password: hashedPassword,
                }).save();

                // return await newUserInfo.save();
                return newUserInfo;
            }
        },
        singInUser: async (_parent, { logInUserData }) => {
            const existUser = await User.findOne({ email: logInUserData.email });
            console.log(existUser, 'existUser');
            if (!existUser) {
                throw new Error(`${logInUserData.email} your email and password was not correct`);
            } else if (existUser) {
                const comparePassword = await bcryptjs.compare(
                    logInUserData.password,
                    existUser.password
                );
                console.log(comparePassword);
                if (!comparePassword) {
                    throw new Error('Your Email or Password is incorrect');
                }
                console.log(JWT_SECRET, 'JWT_SECRET');
                const token = jwt.sign({ userId: existUser._id }, JWT_SECRET, {
                    expiresIn: JWT_EXPIRE,
                });
                console.log(token);
                // return await newUserInfo.save();
                return { token };
            }
        },
        // (parent, args, context)
        createQuote: (_parent, { quote }, { userId }) => {
            if (!userId) {
                throw new Error('You must be logged in');
            }
            Quote.create({
                name: quote,
                by: userId,
            });
            return 'Quote Saved Successfully';
        },
    },
};
module.exports = resolvers;
