import models from '../models'

export const typeDef=`
type Origin{
  name: String
  district: String
  subDistrict: String
  zipcode: String
  createdAt: String
  updatedAt: String
}

input OriginInput{
  name: String!
  district: String!
  subDistrict: String!
  zipcode: String!
}
`
export const resolvers={
  Query:{
    originAll:()=>{
      return Promise.resolve(models.Origin.findAll())
    }
  },
  Mutation:{
    createOrigin:(_,{input})=>{
      console.log(input);
      return Promise.resolve(models.Origin.create(input))
    }
  }
}
