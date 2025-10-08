const path = require('path')
const express = require('express');
const cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()
const app = express()

// Static Folder this will make our public folder static
app.use(express.static(path.join(__dirname, 'public')))

//body parser middelware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//cors middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:9000'],
}))

app.get('/', (req, res)=>{
    res.json({
        message: "welcome to the ideas api"
    })
})

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter)


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})