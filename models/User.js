const mongoose  = require('mongoose')
const  userScehma=new  mongoose.Schema({
    name :{
        type:String,
        required:[true,'Provide the name'],
        minLength : 3,
        maxLength: 50
        
    },
    email :{
        type:String,
        required:[true,'Provide the email'],
        minLength : 3,
        maxLength: 50,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'pease Provide a valid email'],
        unique:true
    },
    password :{

        type:String,
        required:[true,'Provide the Password'],
        minLength : 9,
        maxLength: 12,
   

    },

})

module.exports=mongoose.model('jobs',userScehma)