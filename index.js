const express = require('express')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')

const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typedef')

const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json());

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

app.get('/', (req, res) => {
    res.send('HEctor es puto')
})
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.listen(3000, () => {
    console.log('http://localhost:3000')
})