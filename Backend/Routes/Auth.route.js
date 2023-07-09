const express = require('express')

const AuthRouter = express.Router()

AuthRouter.get('/api/signup',(res,req)=>{
    res.json({
        message: 'Signup'
    })
})

module.exports = AuthRouter