import models from '../models'
import { log } from 'util';

export const typeDef=`
type RegistrationGroup{
  type: String
  group: String
  createdAt: String
  updatedAt: String
}
type sortMatriculant{
  ia: Int
  iia: Int
  iiia: Int
  iva: Int
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
    sortMatriculant: async(_,{type})=>{
      let regisGroups= await models.RegistrationGroup.findAll({
        where:{
          type: type
        },
        include:[
          {model: models.Matriculant}
        ]
      })
      let _filterIa= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IA"
      })
      let _filterIia= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IIA"
      })
      let _filterIiia= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IIIA"
      })
      let _filterIva= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IVA"
      })
      let filterIa= await _filterIa.map(regisGroup=>{
        let countIa= regisGroup.Matriculants.length
        return countIa
      })
      let filterIia= await _filterIia.map(regisGroup=>{
        let countIIa= regisGroup.Matriculants.length
        return countIIa
      })
      let filterIiia= await _filterIiia.map(regisGroup=>{
        let countIIIa= regisGroup.Matriculants.length
        return countIIIa
      })
      let filterIva= await _filterIva.map(regisGroup=>{
        let countIVa= regisGroup.Matriculants.length
        return countIVa
      })
      regisGroups.ia = filterIa[0]
      regisGroups.iia = filterIia[0]
      regisGroups.iiia = filterIiia[0]
      regisGroups.iva = filterIva[0]
      return regisGroups
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
