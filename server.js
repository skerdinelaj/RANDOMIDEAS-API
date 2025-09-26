const express = require('express');
const port = 5000
const app = express()

//body parser middelware
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

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