const path = require('path')
const fs = require('fs').promises

const {sequelize} = require('./db/database')
const {Show, User} = require('./models/index.js')

const seed = async () => {

    await sequelize.sync({force: true})

    const seedPath = path.join(__dirname, './seed_data/users.json')
    const seedPath2 = path.join(__dirname, './seed_data/shows.json')

    const buffer = await fs.readFile(seedPath)
    const buffer2 = await fs.readFile(seedPath2)

    const {users} = JSON.parse(String(buffer))
    const {shows} = JSON.parse(String(buffer2))
  
    const userPromises = users.map(user => { User.create(user)})
    const showPromises = shows.map(show => {Show.create(show)})
   
    const user1 = await User.findByPk(1)
    const derryGirls = await Show.findByPk(10)
    const user2 = await User.findByPk(2)
    const show2 = await Show.findByPk(4)
    const user3 = await User.findByPk(3)
    const show3 = await Show.findByPk(8)
    user1.addShow(derryGirls)
    user2.addShow(show2)
    user3.addShow(show3)
    
    await Promise.all(userPromises)
    await Promise.all(showPromises)

    console.log("Seed have been planted :D")

    
}

module.exports = seed
