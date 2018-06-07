import {makeExecutableSchema} from 'graphql-tools'
import { merge } from 'lodash'

import {typeDef as User, resolvers as userResolvers} from  './schema/userSchema.js'
import {typeDef as RegistrationGroup, resolvers as registrationGroupResolvers} from './schema/registrationGroupSchema.js'
import {typeDef as Origin , resolvers as originResolvers} from './schema/originSchema.js'
import {typeDef as LastEducation, resolvers as lasEducationResolvers} from './schema/lastEducationSchema.js'
import {typeDef as Matriculant, resolvers as matriculantResolvers} from './schema/matriculantSchema.js'

const typeDefs=`
  type Query{
    hello:String
    matriculantAll: [Matriculant]
    matriculant(id:Int!,name:String): Matriculant
    userAll: [User]
    user(id:Int!): User
    regisGroupAll: [RegistrationGroup]
    registrationGroup(id:Int!): RegistrationGroup
    originAll: [Origin]
    origin(id:Int!): Origin
    lastEducationAll: [LastEducation]
    lastEducation(id:Int!): LastEducation
    matriculantStatistic(date:String,schoolName:String,regisGroup:String,status:Status): [Matriculant]
  }
  type Mutation{
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
};
const schema = makeExecutableSchema({
  typeDefs:[typeDefs,
            User,
            RegistrationGroup,
            Origin,
            LastEducation,
            Matriculant
          ],
  resolvers:merge(resolvers,
                  userResolvers,
                  registrationGroupResolvers,
                  originResolvers,
                  lasEducationResolvers,
                  matriculantResolvers
                )
})

export default schema
