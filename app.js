const express = require('express');
const app = express()
const rootRoutes = require('./routes')
let cors = require('cors')
app.use(cors())
const db = require('./config/config')
const Sequelize = require('sequelize');


const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(rootRoutes)

const sequelize = new Sequelize(
    db.development.database,
    db.development.username,
    db.development.password,
    {
      host: db.development.host,
      dialect: db.development.dialect,
      port: db.development.port,
    }
  );
  

async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection()


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})