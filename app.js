const express = require('express');
const app = express()
const rootRoute = require('./router')


const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(rootRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})