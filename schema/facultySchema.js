import models from '../models'

export const typeDef = `
type Faculty{
  name: String
  Programs: [Program]
  createdAt: String
  updatedAt: String
}
input FacultyInput{
   name: String!
}
`
export const resolvers = {
  Query:{
    facultyAll: async()=>{
      let result = await models.Faculty.findAll({
        include: [{
          model: models.Program
        }],
      })
      return result
    },
    faculty: async(_,{id})=>{
      let result = await models.Faculty.find({
        where:{
          id:id
        },
        include:[
          {model: models.Program}
        ]
      })
      return result
    }
  },
  Mutation:{
    createFaculty: async (_,{input})=>{
      return await models.Faculty.create(input)
    }
  }
}
