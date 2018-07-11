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
    userId: Int
    MatriculantPrograms: [MatriculantProgram]
    createdAt: String
    updatedAt: String
  }
  type MatriculantPerMonth {
    jan: Int
    feb: Int
    mar: Int
    apr: Int
    may: Int
    jun: Int
    jul: Int
    ags: Int
    sep: Int
    oct: Int
    nov: Int
    dec: Int
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
    userId: Int!
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
  type MatriculantCount{
    count: Int
  }
 
`
let filterMonth= (matriculants,month)=>{
  let dateTime= new Date()
  dateTime.setMonth(month)
  dateTime.setDate(1)
  let dateTimeNextMonth= new Date()
  if(month+1==11){
    dateTimeNextMonth.setMonth(0)
  }else{
    dateTimeNextMonth.setMonth(month+1)
  }
  dateTimeNextMonth.setDate(1)
  let filterMatriculant= matriculants.filter(matriculant=>{
    return ((matriculant.createdAt > dateTime) && (matriculant.createdAt< dateTimeNextMonth))
  })
  return filterMatriculant.length
}
export const resolvers={
  Query:{
    matriculantAll: async()=>{
      return await models.Matriculant.findAll({include:[
        {model: models.LastEducation},
        {model: models.Origin},
        {model: models.RegistrationGroup}
      ]})
    },
    countMatriculantByProgram: async (_, {programId,status}) => {
        let matriculant = await models.Program.find({
          where:{
            id:programId
          },
          include:[
            {model: models.MatriculantProgram,
            include:[
              {model: models.Matriculant,
              where:{
                status:status
              }
              }
            ]
            }
          ]
        })
        matriculant.count=matriculant.MatriculantPrograms.length
        return matriculant
      },
    countMatriculantByLastEdu: async (_,{lastEducationId,status})=>{
      
    },  
    matriculantPerMonth: async(_,{year})=>{
      const Op = sequelize.Op
      let dateTime = new Date()
      let dateTimeNextMonth = new Date()
      let _year = parseInt(year)
      let month = 0
      dateTime.setFullYear(_year)
      dateTime.setMonth(0)
      dateTime.setDate(1)
      dateTimeNextMonth.setFullYear(_year)
      dateTimeNextMonth.setMonth(11)
      dateTimeNextMonth.setDate(31)
      let findMatriculant= await models.Matriculant.findAll({
        where:{
          createdAt:{
            [Op.lt]: dateTimeNextMonth,
            [Op.gt]: dateTime
          }
        }
      })
      findMatriculant.jan=filterMonth(findMatriculant,0)
      findMatriculant.feb=filterMonth(findMatriculant,1)
      findMatriculant.mar=filterMonth(findMatriculant,2)
      findMatriculant.apr=filterMonth(findMatriculant,3)
      findMatriculant.may=filterMonth(findMatriculant,4)
      findMatriculant.jun=filterMonth(findMatriculant,5)
      findMatriculant.jul=filterMonth(findMatriculant,6)
      findMatriculant.ags=filterMonth(findMatriculant,7)
      findMatriculant.sep=filterMonth(findMatriculant,8)
      findMatriculant.oct=filterMonth(findMatriculant,9)
      findMatriculant.nov=filterMonth(findMatriculant,10)
      findMatriculant.dec=filterMonth(findMatriculant,11)
      console.log(findMatriculant);
      return findMatriculant

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
          {model: models.MatriculantProgram,
          include:[
            {model: models.Program}
          ]
          }
        ]})
        console.log(result);
        
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
      }
      if(status){
        search.status= status
      }
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
    },
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
        userId: input.userId,
        originId: input.Origin,
        lastEducationId: input.LastEducation

      })
      let saveProgram1 = await models.MatriculantProgram.create({
        programId: input.majorOne,
        matriculantId: create.id
      })
      let saveProgram2= await  models.MatriculantProgram.create({
        programId: input.majorTwo,
        matriculantId: create.id
      })
      let findMatriculant = await models.Matriculant.find({
        include:[
          {model: models.LastEducation},
          {model: models.Origin},
          {
            model: models.RegistrationGroup
          }, {
            model: models.MatriculantProgram,
            include: [{
              model: models.Program
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
      let result= await models.Matriculant.findById(input.id)
      return result
    },
  
  }
}
