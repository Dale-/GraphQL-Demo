# GraphQL Demo

![](http://www.zhaiqianfeng.com/uploads/content/share/graphql.png)

> Why is GitHub using GraphQL?

> GitHub is moving to GraphQL for v4 of our API because it offers significantly more flexibility for our integrators. The ability to define precisely the data you want—and only the data you want—is a powerful advantage over the REST API v3 endpoints.

> GraphQL is a new way to think about building and querying APIs. Rather than construct several REST requests to fetch data that you’re interested in, you can often make a single call to fetch the information you need.

### Schemas & Types
* [Schemas & Types](https://toddmotto.com/react-create-class-versus-component/#syntax-differences)

### GraphQL Simple

* How to start ?
```
node graphql-simple.js
Open http://localhost:4000/
```

* Simple Query

```graphql
{
  user(id:1) {
    name
    email
    account
    password
    id
  }
  users {
    name
    email
    account
    password
    id
  }
}
```

* Simple Mutation

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
}
```

### GraphQL Normal


### GraphQL Server

* How to start ?
```
node graphql-server.js
```
