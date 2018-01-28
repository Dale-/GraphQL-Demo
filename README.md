# GraphQL Demo

![](http://www.zhaiqianfeng.com/uploads/content/share/graphql.png)

### GraphQL Client

```
npm start
Open http://localhost:4000/
```

> Client Query

```
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

> Client Mutation

```
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

Anytime you change the contents, just refresh the page and it's going to be updated.

### GraphQL Server
