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
    RegistrationGroup: RegistrationGroup
    address: String
    status: Status
    Origin: Origin
    LastEducation: LastEducation
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
    RegistrationGroup: Int!
    address: String!
    status: Status!
    Origin: Int!
    LastEducation: Int!
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
    createMatriculant: async (_,{input})=>{
      let create = await models.Matriculant.create({
        NIK: input.NIK,
        NISN: input.NISN,
        fullName: input.fullName,
        gender: input.gender,
        bloodType: input.bloodType,
        birthPlace: input.birthPlace,
        birth: input.birth,
        religion: input.religion,
        citizenship: input.citizenship,
        fatherName: input.fatherName,
        fatherBirth: input.fatherBirth,
        motherName: input.motherName,
        motherBirth: input.motherBirth,
        parentsJob: input.parentsJob,
        email: input.email,
        phone: input.phone,
        password: input.password,
        sourceInformation: input.sourceInformation,
        registrationGroupId: input.RegistrationGroup,
        address: input.address,
        status: input.status,
        originId: input.Origin,
        lastEducationId: input.LastEducation

      })
      let findMatriculant = await models.Matriculant.find({
        include:[
          {model: models.LastEducation},
          {model: models.Origin},
          {model: models.RegistrationGroup}
        ],
        where:{
          id: create.id
        }
      })
      console.log(findMatriculant);
      return findMatriculant
    },
    changeStatusMatriculant:async (_,{input})=>{
      let change={
        status: input.status
      }
      let event = await models.Matriculant.update(change,{
        where:{
          id: input.id
        }
      })
      console.log(event);
      let result= await models.Matriculant.findById(input.id)
      return result
    },

  }
}
