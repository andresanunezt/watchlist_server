const express = require('express');
const app = express()
const {body, validationResult} = require('express-validator');

const {Show, User} = require('./models/index.js')
const PORT = 3000;
const seed = require('./seed')

app.use(express.json());

app.listen(PORT, async() => {
      seed()
    console.log(`Servers up and running at http://localhost:${PORT}`)
})


app.get("/users", async(req, res) => {
    const users = await User.findAll()
    res.json(users)
})

app.get("/users/:id", async(req, res) => {

    const user = await User.findByPk(req.params.id, {include: Show})
    res.json(user)
})

app.get("/users/:id/shows", async(req, res) => {

    const shows = await Show.findAll({
        where: {UserId: req.params.id} })
    res.json(shows)
})

app.post("/users", async(req, res) => {
    const user = await User.create(req.body)
    res.json(user)
})

app.get("/shows", async(req, res) => {
    const users = await Show.findAll()
    res.json(users)
})


app.get("/shows/:id", async(req, res) => {
    const show = await Show.findByPk(req.params.id, {include: User})
    res.json(show)
})

app.post("/shows", async(req, res) => {
    const show = await Show.create(req.body)
    res.json(show)
})

app.put("/shows/:id", async(req, res) => {

 await Show.update(req.body,
    {where: { id: req.params.id}})
    res.send("Updated")
})

app.delete("/shows/:id", async(req, res) => {

    await Show.destroy(req.body,
       {where: { id: req.params.id}})
       res.send("destroyed!!!")
   })


app.get("/:genre", async(req, res) => {
    const shows = await Show.findAll({
        where: {genre: req.params.genre }
    })
    console.log("SHOWS:", shows)
    res.json(shows)
});







