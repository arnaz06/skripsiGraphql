import models from '../models'

export const typeDef=`
type User{
  name: String
  password: String
  email: String
  createdAt: String
  updatedAt: String
}
input UserInput{
  name: String!
  password: String!
  email: String!
}
`
export const resolvers={
  Query:{
    userAll:()=>{
      return Promise.resolve(models.User.findAll())
    }
  },
  Mutation:{
    createUser:(_,{input})=>{
      return Promise.resolve(models.User.create(input))
    }
  }
}
