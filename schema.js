import {makeExecutableSchema} from 'graphql-tools'
import { merge } from 'lodash'
// import {typeDef as User, resolvers as userResolvers} from  './schema/user.js'
// import {typeDef as Item, resolvers as itemResolvers} from  './schema/item.js'

const typeDefs=`
  type Query{
    hello:String
  }
`
const resolvers = {
  Query: {}
};
const schema = makeExecutableSchema({
  typeDefs:[typeDefs],
  resolvers:merge(resolvers)
})

export default schema
