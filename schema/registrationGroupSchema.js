import models from '../models'

export const typeDef=`
type RegistrationGroup{
  type: String
  group: String
  createdAt: String
  updatedAt: String
}

input RegistrationGroupInput{
  type: String!
  group: String!
}
`

export const resolvers={
  Query:{
    regisGroupAll:()=>{
      return Promise.resolve(models.RegistrationGroup.findAll())
    },
    registrationGroup: async(_,{id})=>{
      return  await models.RegistrationGroup.findById(id)
    }
  },
  Mutation:{
    createRegistrationGroup:(_,{input})=>{
      return Promise.resolve(models.RegistrationGroup.create(input))
    }
  }
}
