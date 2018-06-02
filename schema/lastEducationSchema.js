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
    }
  },
  Mutation:{
    createLastEducation:(_,{input})=>{
      return Promise.resolve(models.LastEducation.create(input))
    }
  }
}
