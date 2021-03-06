import express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import schema from './schema'


const app = express()

app.use(cors())

app.get('/',(req,res)=>{
  return res.json({
    msg:'im here'
  })
})
app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(3000,()=>{
  console.log('app running on PORT 3000');
})