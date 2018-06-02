import models from '../models'

export const typeDef=`
  type Matriculant{
    NIK: String
    NISN: String
    fullName: String
    gender: Gender
    bloodType: BloodType
    birthPlace: String
    birth: String
    religion: Religion
    citizenship: String
    fatherName: String
    fatherBirth: String
    motherName: String
    motherBirth: String
    parentsJob: String
    email: String
    phone: String
    password: String
    sourceInformation: SourceInformation
    registrationGroupId: Int
    address: String
    status: Status
    originId: Int
    lastEducationId: Int
    createdAt: String
    updatedAt: String
  }
  input MatriculantInput{
    NIK: String!
    NISN: String!
    fullName: String!
    gender: Gender!
    bloodType: BloodType!
    birthPlace: String!
    birth: String!
    religion: Religion!
    citizenship: String!
    fatherName: String!
    fatherBirth: String!
    motherName: String!
    motherBirth: String!
    parentsJob: String!
    email: String!
    phone: String!
    password: String!
    sourceInformation: SourceInformation!
    registrationGroupId: Int!
    address: String!
    status: Status!
    originId: Int!
    lastEducationId: Int!
  }
  enum Gender{
    MALE
    FEMALE
  }
  enum BloodType{
    O
    A
    B
    AB
  }
  enum Religion{
    ISLAM
    KRISTEN
    HINDU
    BUDHA
    KATOLIK
  }
  enum SourceInformation{
    TEMAN
    KELUARGA
    FORUM
    GOOGLE
    MEDIA CETAK
    BALIHO
    YOUTUBE
    FACEBOOK
  }
  enum Status{
    Mundur
    Daftar
    Ujian
    Registrasi
  }
  input changeStatus{
    id: Int!
    status: Status!
  }
`
export const resolvers={
  Query:{
    matriculantAll:()=>{
      return Promise.reolve(models.Matriculant.findAll())
    },
    matriculant: async (_,{id})=>{
      console.log(id);
      let result= await models.Matriculant.findById(id)
      return result
    }
  },
  Mutation:{
    createMatriculant:(_,{input})=>{
      return Promise.resolve(models.Matriculant.create(input))
    },
    changeStatusMatriculant:async (_,{input})=>{
      let change={
        status: input.status
      }
      let result= await models.Matriculant.update(change,{
        where:{
          id: input.id
        }
      })
      console.log(result);
      return result
    },

  }
}
