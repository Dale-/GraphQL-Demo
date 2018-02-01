# GraphQL Demo

![](http://www.zhaiqianfeng.com/uploads/content/share/graphql.png)

> 什么是 GraphQL?

GraphQL 为数据通信而生。你有一个客户端和一个服务器，它们需要相互通信。客户端需要告知服务器需要哪些数据，服务器需要用实际的数据来满足客户端的数据需求。GraphQL 是此种通信方式的中介。

![](/images/graphql-connect.png)

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
query {
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
mutation {
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

```graphql
  query {
    user(id:0){
      name
      MM:stature(unit:MM)
      CM:stature(unit:CM)
    }
  }
```


### GraphQL Server

* How to start ?
```
node graphql-server.js
```

### GraphQL vs. REST
