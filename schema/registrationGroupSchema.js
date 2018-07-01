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
  ib: Int
  ic: Int
  iia: Int
  iib: Int
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
      let _filterIb= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IB"
      })
      let _filterIc= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IC"
      })
      let _filterIia= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IIA"
      })
      let _filterIib= await regisGroups.filter(regisGroup=>{
        return regisGroup.group=="IIB"
      })
      let filterIa= await _filterIa.map(regisGroup=>{
        let countIa= regisGroup.Matriculants.length
        return countIa
      })
      let filterIb= await _filterIb.map(regisGroup=>{
        let countIIa= regisGroup.Matriculants.length
        return countIIa
      })
      let filterIc= await _filterIc.map(regisGroup=>{
        let countIIIa= regisGroup.Matriculants.length
        return countIIIa
      })
      let filterIia= await _filterIia.map(regisGroup=>{
        let countIVa= regisGroup.Matriculants.length
        return countIVa
      })
      let filterIib= await _filterIib.map(regisGroup=>{
        let countIVa= regisGroup.Matriculants.length
        return countIVa
      })
      regisGroups.ia = filterIa[0]
      regisGroups.ib = filterIb[0]
      regisGroups.ic = filterIc[0]
      regisGroups.iia = filterIia[0]
      regisGroups.iib = filterIib[0]
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
