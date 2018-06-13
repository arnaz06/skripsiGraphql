import models from '../models'

export const typeDef = `
type Faculty{
  name: String
  Majors: [Major]
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
          model: models.Major
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
          {model: models.Major}
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
