import models from '../models';

export const typeDef = `
type MatriculantProgram{
  Program: Program
  Matriculant: Matriculant
  updatedAt: String
}
input MatriculantProgramInput {
  matriculantId: Int!
  majorId: Int!
}
`
export const resolvers = {
  Query:{
    matriculantProgramAll:async()=>{
      let matriculantProgram = await await models.MatriculantProgram.findAll({
        include: [{
            model: models.Program
          },
          {
            model: models.Matriculant
          }
        ]
      })
      return matriculantProgram
    },
    matriculantProgram: async(_,{id})=>{
      return await models.MatriculantProgram.find({
        where:{
          id:id
        },
        include: [{
            model: models.Program
          },
          {
            model: models.Matriculant
          }
        ]
      })
    }
  },
  Mutation:{
    createMatriculantProgram: async(_,{input})=>{
      let result = await models.MatriculantProgram.create(input)
      let findResult= models.MatriculantProgram.find({
        where:{
          id: result.id
        },
        include:[
          {model: models.Program},
          {model: models.Matriculant}
        ]
      })
      return findResult
    }
  }
}