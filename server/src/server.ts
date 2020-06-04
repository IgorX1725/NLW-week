import express from 'express'

const app = express()

app.get('/users',(req,res)=>{
    res.json(["rob","diego"])
})

app.listen(3333)