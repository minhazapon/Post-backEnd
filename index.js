
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.port || 5000

app.use(cors())
app.use(express.json());

  
const user = [
     { id:1, name:'minhazul abedin', position:'full stack Developer', language:'javasCript', company:'toptal', email:'apon@gmail.com'},
     { id:2, name:'Hm nayeem', position:'full stack Developer', language:'javasCript', company:'toptal', email:'nayeem@gmail.com'},
     { id:3, name:'Jhankar mahbub', position:'full stack Developer', language:'javasCript', company:'toptal', email:'jhankar@gmail.com'}
]


app.get('/', (req, res) => {
  res.send('How To pooost requestss and bankEnd server')
})

app.get('/user', (req, res) => {
  res.send(user)
})

app.post('/user', (req, res) => {

   console.log(req.body)
   const newUser = req.body
   newUser.id = user.length + 1;
   user.push(newUser)
   res.send(newUser)



})


app.listen(port, () => {
  console.log(`post Port ---> ${port}`)
})