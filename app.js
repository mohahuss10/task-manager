const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']); 
const express = require('express')
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

const app = express()


//middlewares
app.use(express.static('./public'))
app.use(express.json())


//routes

app.use('/api/v1/tasks',tasks)

app.use(notFound)




const port   = 4000

 const start = async()=>{
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port} .....`))
        
    } catch (error) {
        console.log(error)
        
    }
 }


 start()
