import models from '../models'

export const typeDef = `
type Program{
  name: String
  Faculty: Faculty
  createdAt: String
  updatedAt: String
}
input ProgramInput{
  name: String!
  facultyId: Int!
}
`
export const resolvers = {
  Query:{
    majorAll: async()=>{
      let result = await models.Program.findAll({
        include: [{
          model: models.Faculty
        }]
      })
      return result
    },
    major: async(_,{id})=>{
      let result= await models.Program.find({
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
     createProgram: async (_,{input})=>{
       return await models.Program.create(input)
     }
   }
}
