import models from '../models'

export const typeDef=`
type LastEducation{
  schoolName: String
  major: String
  originId: Origin
  createdAt: String
  updatedAt: String
}
input LastEducationInput{
  schoolName: String!
  major: String!
  originId: Int!
}
`
export const resolvers={
  Query:{
    lastEducationAll:()=>{
      return Promise.resolve(models.LastEducation.findAll())
    },
    lastEducation: async (_,{id})=>{
      return  await models.LastEducation.findById(id)
    }
  },
  Mutation:{
    createLastEducation:(_,{input})=>{
      return Promise.resolve(models.LastEducation.create(input))
    }
  }
}
