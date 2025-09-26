const express = require('express');
const router = express.Router();

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

//get all ideas
router.get('/', (req, res)=>{
    res.json({
        sucess: true,
        data: ideas
    })
})
//get single idea
router.get('/:id', (req, res)=>{
    const idea = ideas.find((idea)=>idea.id === +req.params.id)

    if (!idea) {
        return (
            res.status(404).json({
                sucess: false,
                error: "resource not found"
            })
        )
    }

    res.json({
        sucess: true,
        data: idea,
    })
})

//post idea

router.post('/', (req, res)=>{
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0,10)
    }

    ideas.push(idea)

    res.json({
        sucess: true,
        data: ideas
    })
})

//put idea

router.put('/:id', (req, res)=>{
    const idea = ideas.find((idea)=>idea.id === +req.params.id);

    if (!idea) {
        return (
            res.status(404).json({
                sucess: false,
                error: 'resource not found'
            })
        )
    }

    idea.text = req.body.text || idea.text
    idea.tag = req.body.tag || idea.tag

    res.json({
        sucess: true,
        data: idea
    })
})


router.delete('./:id', (req,res)=>{
    const idea =  ideas.find(idea=>idea.id === +req.params.id)

    if (!idea) {
        return (
            res.status(404).json({
                    sucess: false,
                    error: 'recourse not found'
            })
        )
    }

    ideas.filter(idea=>idea.id !== +req.params.id)
})

module.exports = router