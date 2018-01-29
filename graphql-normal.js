var express = require('express');
var graphqlHTTP = require('express-graphql');

var {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLInterfaceType,
  GraphQLInputObjectType
} = require('graphql');

var users = [
  {
    name: 'Dale',
    sex: 'female',
    intro: 'Programmer',
    skills: ['JavaScript', 'Java', 'GraphQL'],
    stature: 160
  },
  {
    name: 'Demon',
    sex: 'male',
    intro: 'Programmer',
    skills: ['JavaScript', 'Java', 'GraphQL'],
    stature: 180
  }
]

const Unit = new GraphQLEnumType({
  name: 'Unit',
  description: 'a single quantity regarded as a whole in calculation',
  value: {
    MM: { value: 'MM' },
    CM: { value: 'CM' }
  }
})

const User = new GraphQLObjectType({
  name: 'User',
  description: "Entity of User",
  fields: () => {
    return ({
      name: { type: new GraphQLNonNull(GraphQLString) },
      sex: { type: new GraphQLNonNull(GraphQLString) },
      intro: { type: new GraphQLNonNull(GraphQLString) },
      skill: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull( new GraphQLList(GraphQLString)) },
      stature: {
        type: GraphQLFloat,
        args: {
          unit: { type: Unit }
        },
        resolve: (user, { unit }) => {
          if (unit === 'MM') {
            return user.stature / 100;
          } else {
            return user.stature;
          }
        }
      }
    })
  }
})

const Query = new GraphQLObjectType({
  name: 'UserQuery',
  description: 'query user data',
  fields: () => ({
    user: {
      type: User,
      description: 'get user by id',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (source, {id}) => {
        return users[id];
      }
    },
    users: {
      type: new GraphQLList(User),
      description: 'query user list',
      resolve: () => {
        return users;
      }
    }
  })
})

const Mutation = new GraphQLObjectType({
  name: 'UserMutation',
  description: 'mutate the user entity',
  fields: () => ({
    addUser: {
      type: User,
      description: 'add user',
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        sex: { type: new GraphQLNonNull(GraphQLString) },
        intro: { type: new GraphQLNonNull(GraphQLString) },
        skills: { type: new GraphQLNonNull(new GraphQLList(GraphQLString)) },
      },
      resolve: (source, { name, sex, intro, skills }) => {
        var user = {
          name: name,
          sex: sex,
          intro: intro,
          skills: skills,
        };
        users.push(user);
        return user;
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(4000, () => console.log('localhost:4000/graphql'));
