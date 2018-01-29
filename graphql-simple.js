var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// define schema
var schema = buildSchema(`
    type User{
        account: String!
        email: String
        id: ID!
        name: String
        password: String!
    }
    type Query {
        user(id:Int!):User
        users:[User]
    }
    type Mutation{
        addUser(account:String!,email:String,name:String,password:String!):User
    }
`);

// data from sever
var users=[
    {
      account: 'Dale0326',
      email: 'ying.du@seedlinktech.com',
      id: 0,
      name: 'DaleDu',
      password: 'SeedlinkTech'
    },
    {
      account: 'Renee0326',
      email: 'renee@seedlinktech.com',
      id: 1,
      name: 'Renee',
      password: 'SeedlinkTech'
    },
];

// define resolver
var root= {
    // query resolver
    user: ({id}) => {
        return users.find(user => user.id === id);
    },
    users: () => {
        return users;
    },
    //mutation resolver
    addUser: ({account,email,name,password}) => {
       var user = {
           account:account,
           email:email,
           name:name,
           password:password,
           id: users.length
       };
       users.push(user);
       return user;
     },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enabled GraphiQL
}));

app.listen(4000, () => console.log('Please enter this url in browser：localhost:4000/graphql'));
