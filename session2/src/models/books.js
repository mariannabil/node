const mongoose = require('mongoose')
const validator = require('validator')
require('../db/mongoose')
const book = mongoose.model('book',{
    name:{
        type: String,
        require:  true,
        trim: true,
    
    },
   
    author:{
        type: String,
        require:  true,
        trim: true,
    },
    
    date:{
        type:Date,
       
     
    }
})

 module.exports = book