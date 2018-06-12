import models from '../models'

export const typeDef = `
type Major{
  name: String
  Faculty: Faculty
  createdAt: String
  updatedAt: String
}
input MajorInput{
  name: String!
  facultyId: Int!
}
`
export const resolvers = {
  Query:{
    majorAll: async()=>{
      let result = await models.Major.findAll({
        include: [{
          model: models.Faculty
        }]
      })
      return result
    },
    major: async(_,{id})=>{
      let result= await models.Major.find({
        where:{
          id:id
        },
        include:[
          {model:models.Faculty}
        ]
      })
      console.log(result)
      return result
    }
  },
   Mutation:{
     createMajor: async (_,{input})=>{
       return await models.Major.create(input)
     }
   }
}
