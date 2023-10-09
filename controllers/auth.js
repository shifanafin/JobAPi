const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const BadRequestError = require('../errors/bad-request')
const bcrypt = require('bcryptjs')


const register = async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name || !email || !password){
        throw new BadRequestError("Please All the Fields")
        }
        const random = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,random)
        const hashedUser = {name,email,password:hashPassword}
        const user = await User.create({...req.body})
        res.status(StatusCodes.CREATED).json({hashedUser})
console.log(req.body)
        
    } catch (error) {
        console.log(error)
        
    }

}

const login = async(req,res)=>{
    try {
        res.send("ite is login")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports={
    register,
    login
}