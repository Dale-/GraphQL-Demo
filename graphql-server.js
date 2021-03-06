var { graphql, buildSchema } = require('graphql');

// define schema
var schema = buildSchema(`
    type User{
        account: String!
        email: String
        name: String
        password: String!
    }
    input UserInput {
        account: String!
        email: String
        name: String
        password: String!
    }
    type Query {
        user(id:Int!):User
        users:[User]
    }
    type Mutation{
        addUser(account:String!,email:String,name:String,password:String!):User
        addUserByInput(userInfo:UserInput!):User
    }
`);

// data from sever
var users=[
    {
      account: 'Dale0326',
      email: 'ying.du@seedlinktech.com',
      name: 'DaleDu',
      password: 'SeedlinkTech'
    },
    {
      account: 'Renee0326',
      email: 'renee@seedlinktech.com',
      name: 'Renee',
      password: 'SeedlinkTech'
    },
];

// define resolver
var root= {
    // query resolver
    user: function ({id}) {
        return users[id];
    },
    users: function () {
        return users;
    },
    //mutation resolver
    addUser:function({account,email,name,password}){
        var user={
            account:account,
            email:email,
            name:name,
            password:password
        };
        users.push(user);
        return user;
    },
    addUserByInput:function({userInfo}){
        var user={
            account:userInfo.account,
            email:userInfo.email,
            name:userInfo.name,
            password:userInfo.password
        };
        users.push(user);
        return user;
    }
};

// analysis request
graphql(schema, '{\
        users{\
            name\
            account\
        }\
    }', root).then((response) => {
    console.log(response);
});
