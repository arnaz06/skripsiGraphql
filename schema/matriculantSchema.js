import models from '../models'
import sequelize from 'sequelize'

export const typeDef=`
  type Matriculant{
    id: Int
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
    MatriculantMajors: [MatriculantMajor]
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
    majorOne: Int!
    majorTwo: Int!
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
    matriculantAll: async()=>{
      return await models.Matriculant.findAll({include:[
        {model: models.LastEducation},
        {model: models.Origin},
        {model: models.RegistrationGroup}
      ]})
    },
    matriculant: async (_,{id})=>{
    
      let result= await models.Matriculant.find({
        where:{
          id: id
        },
        include:[
          {model: models.LastEducation},
          {model: models.Origin},
          {model: models.RegistrationGroup},
          {model: models.MatriculantMajor,
          include:[
            {model: models.Major}
          ]
          }
        ]})
      return result
    },
    matriculantStatistic: async (_,{date,schoolName,regisGroup,status})=>{
      // https://stackoverflow.com/questions/33271413/sequelize-or-clause-with-multiple-models
      let dateToInt=parseInt(date)
      let Op= sequelize.Op
      let findSchool= await models.LastEducation.findOne({
        where:{
          schoolName: schoolName
        }
      })
      let search={}
      if(regisGroup){
        let findRegisGroup= await models.RegistrationGroup.findOne({
          where:{
            group: regisGroup
          }
        })
        if(findRegisGroup){
          search.registrationGroupId= findRegisGroup.id
        }else{
          search.registrationGroupId= 0
        }
      }
      if(schoolName){
        let findSchool= await models.LastEducation.findOne({
          where:{
            schoolName: schoolName
          }
        })
        if(findSchool){
          search.lastEducationId= findSchool.id
        }else{
          search.lastEducationId=0
        }
      }

      if(date){
        let createdAt = {}
        let dateTime= new Date()
        let dateTimeNextMonth= new Date()
        let year= parseInt(date)
        let month=0
        dateTime.setFullYear(year)
        dateTime.setMonth(0)
        dateTime.setDate(1)
        dateTimeNextMonth.setFullYear(year)
        dateTimeNextMonth.setMonth(11)
        dateTimeNextMonth.setDate(31)
        createdAt={
          [Op.lt]: dateTimeNextMonth,
          [Op.gt]: dateTime
        }
        search.createdAt=createdAt
        console.log(search);
      }
      if(status){
        search.status= status
      }
      console.log(search);
      let findMatriculant= await models.Matriculant.findAll({
        where:{
          $and: search
          },
        include:[
          {model: models.LastEducation},
          {model: models.Origin},
          {model: models.RegistrationGroup}
        ],
      })
      // console.log(findMatriculant);
      return findMatriculant
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
      let saveMajor1= await models.MatriculantMajor.create({
        majorId: input.majorOne,
        matriculantId: create.id
      })
      let saveMajor2= await  models.MatriculantMajor.create({
        majorId: input.majorTwo,
        matriculantId: create.id
      })
      
      let findMatriculant = await models.Matriculant.find({
        include:[
          {model: models.LastEducation},
          {model: models.Origin},
          {
            model: models.RegistrationGroup
          }, {
            model: models.MatriculantMajor,
            include: [{
              model: models.Major
            }]
          }
        ],
        where:{
          id: create.id
        }
      })
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
