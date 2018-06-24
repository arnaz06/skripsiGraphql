import {makeExecutableSchema} from 'graphql-tools'
import { merge } from 'lodash'

import {typeDef as User, resolvers as userResolvers} from  './schema/userSchema.js'
import {typeDef as RegistrationGroup, resolvers as registrationGroupResolvers} from './schema/registrationGroupSchema.js'
import {typeDef as Origin , resolvers as originResolvers} from './schema/originSchema.js'
import {typeDef as LastEducation, resolvers as lasEducationResolvers} from './schema/lastEducationSchema.js'
import {typeDef as Matriculant, resolvers as matriculantResolvers} from './schema/matriculantSchema.js'
import {typeDef as Major, resolvers as majorResolvers} from './schema/majorSchema.js'
import {typeDef as Faculty, resolvers as facultyResolvers} from './schema/facultySchema.js'
import {typeDef as MatriculantMajor, resolvers as matriculantMajorResolvers} from './schema/matriculantMajorSchema.js'

const typeDefs=`
  type Query{
    hello:String
    matriculantAll: [Matriculant]
    matriculant(id:Int!,name:String): Matriculant
    matriculantStatistic(date:String,schoolName:String,regisGroup:String,status:Status): [Matriculant]
    majorAll: [Major]
    major(id:Int!): Major
    matriculantMajorAll: [MatriculantMajor]
    matriculantMajor(id:Int!): MatriculantMajor
    facultyAll: [Faculty]
    faculty(id: Int!): Faculty
    userAll: [User]
    user(id:Int!): User
    regisGroupAll: [RegistrationGroup]
    registrationGroup(id:Int!): RegistrationGroup
    sortMatriculant(type: String!): sortMatriculant
    originAll: [Origin]
    origin(id:Int!): Origin
    lastEducationAll: [LastEducation]
    lastEducation(id:Int!): LastEducation
  }
  type Mutation{
    createMajor(input: MajorInput): Major
    createMatriculantMajor(input: MatriculantMajorInput): MatriculantMajor
    createFaculty(input: FacultyInput): Faculty
    createUser(input: UserInput) : User
    createRegistrationGroup(input: RegistrationGroupInput) : RegistrationGroup
    createOrigin(input: OriginInput) : Origin
    createLastEducation(input: LastEducationInput) : LastEducation
    createMatriculant(input: MatriculantInput) : Matriculant
    changeStatusMatriculant(input: changeStatus) : Matriculant
  }
`
const resolvers = {
  Query: {}
}
const schema = makeExecutableSchema({
  typeDefs:[typeDefs,
            User,
            RegistrationGroup,
            Origin,
            LastEducation,
            Matriculant,
            Major,
            Faculty,
            MatriculantMajor
          ],
  resolvers:merge(resolvers,
                  userResolvers,
                  registrationGroupResolvers,
                  originResolvers,
                  lasEducationResolvers,
                  matriculantResolvers,
                  majorResolvers,
                  facultyResolvers,
                  matriculantMajorResolvers
                )
})

export default schema
