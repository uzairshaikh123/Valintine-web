const express = require('express')
const connection = require('./config')
const AuthRouter = require('./Routes/Auth.route')
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/",AuthRouter)

app.listen(8080, async () => {
    try {
        await connection
    } catch (error) {
        console.log(error.message)
    }
  console.log('Example app listening on port 3000!')
})