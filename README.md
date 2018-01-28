# GraphQL Demo

![](http://www.zhaiqianfeng.com/uploads/content/share/graphql.png)

> Why is GitHub using GraphQL?
GitHub is moving to GraphQL for v4 of our API because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want—and only the data you want—is a powerful advantage over the REST API v3 endpoints.
GraphQL is a new way to think about building and querying APIs. Rather than construct several REST requests to fetch data that you’re interested in, you can often make a single call to fetch the information you need.

### Schemas & Types
[Schemas & Types](https://toddmotto.com/react-create-class-versus-component/#syntax-differences)

### GraphQL Client

* How to start ?
```
node graphql-client.js
Open http://localhost:4000/
```

* Client Query

```graphql
{
  user(id:0) {
    name
 		email
    password
  }
  users {
    name
 		email
    password
  }
}
```

* Client Mutation

```graphql
mutation{
  addUser(
    account: "demo",
    name: "demo",
    password: "demo1234",
    email: "demo@gmail.com"
  ){
    account
    name
    password
    email
  }
  addUserByInput(
    userInfo:{
      account: "luna",
      name: "luna",
      password: "luna1234",
      email: "luna@gmail.com"
    }
  ){
    account
    name
    password
    email
  }
}
```


### GraphQL Server

* How to start ?

node graphql-server.js
