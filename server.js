const express = require('express');
const port = 5000
const app = express()

const ideas = [
    {
        id: 1,
        text: 'first idea',
        tag: 'test',
        username: 'test',
        date: '2022-01-01'
    },
    {
        id: 2,
        text: 'second idea',
        tag: 'test',
        username: 'test',
        date: '2022-01-01'
    },
    {
        id: 3,
        text: 'third idea',
        tag: 'test',
        username: 'test',
        date: '2022-01-01'
    }
]

app.get('/', (req, res)=>{
    res.json({
        message: "welcome to the ideas api"
    })
})

app.get('/api/ideas', (req, res)=>{
    res.json({
        sucess: true,
        data: ideas
    })
})

app.get(`/api/ideas:id`,(req, res)=>{
    const data = ideas.find((idea)=> idea.id === +req.params.id)
    if(!data){
        return res.status(404).json({
            sucess: false,
            error: null
        })
    }
    res.json({
        sucess: true,
        data: data
    })
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})