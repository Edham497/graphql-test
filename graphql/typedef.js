module.exports = `
type Query {
 #comentario
 users: [String]   
}

type user {
    id: ID
    nombre: String!
    edad: Int
}

type Mutation {
    deleteUser(id: Int):String
}

`