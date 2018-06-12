import models from '../models';

export const typeDef = `
type MatriculantMajor{
  Matriculant: Matriculant
  Major: Major
  createdAt: String
  updatedAt: String
}
input MatriculantMajorInput {
  matriculantId: Int!
  majorId: Int!
}
`
export const resolvers = {
  Query:{
    matriculantMajorAll:async()=>{
      return await models.MatriculantMajor.findAll({
        include: [{
            model: models.Major
          },
          {
            model: models.Matriculant
          }
        ]
      })
    },
    matriculantMajor: async(_,{id})=>{
      return await models.MatriculantMajor.find({
        where:{
          id:id
        },
        include: [{
            model: models.Major
          },
          {
            model: models.Matriculant
          }
        ]
      })
    }
  },
  Mutation:{
    createMatriculantMajor: async(_,{input})=>{
      let result = await models.MatriculantMajor.create(input)
      let findResult= models.MatriculantMajor.find({
        where:{
          id: result.id
        },
        include:[
          {model: models.Major},
          {model: models.Matriculant}
        ]
      })
      return findResult
    }
  }
}