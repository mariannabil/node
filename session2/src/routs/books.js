const express = require('express')
const bookModel = require('../models/books')
const router = new express.Router()
router.post('/addbook', async (req,res) => {
    const book = new bookModel(req.body)
    try{
        await book.save()
        res.send({
            status: 1,
            message:'book inserted successfuly',
            data: book
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'book inserting error',
            data: e
        })
    }
})

router.get('/booksAsync', async(req,res)=>{
try{
     alldata = await bookModel.find({})
        res.send({
            status:1,
            message: 'all data retriverd',
            data: alldata
        })
}
catch(e){
    res.send({
        status:0,
        message: 'data retreving error',
        data: e
    })
}    
})

router.get('/booksAsync/:bookid', async(req,res)=>{
    bookid = req.params.bookid
    try{
        bookData = await bookModel.findById(bookid)
        if(!bookData) return res.send({
            status:2,
            message: 'not found',
            data: ''
        })
        res.send({
            status:1,
            message: 'user data retriverd',
            data: userdata
           
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'data retrive error',
            data: e
        })
    }
   
})

        
router.patch('/booksAsync/:bookid', async(req,res)=>{
    avlUpdates = ["name", "auther"]
    const keys = Object.keys(req.body) 
    const flag = keys.every((k)=> avlUpdates.includes(k))   
    if(!flag) return res.send({
        status:0,
        message:"invalid update keys",
        data:""
    })
    try{
        const book = await bookModel.findByIdAndUpdate(
            req.params.userid,
            req.body,
            {runValidators:true}
        )
        if(!book) return res.send({
            status:2,
            message: 'user not found',
            data:''
        })
        res.send({
            status:1,
            message:"updated",
            data: user
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'error in edit',
            data: ''
        })
    }
})

router.delete('/booksAsync/:bookid', async(req,res)=>{
    try{
        const book = await bookModel.findByIdAndDelete(req.params.bookid)
        if(!book) return res.send({
            status:2,
            message: 'user not found'
        })
        res.send({
            status:1,
            message:"deleted"
        })
    }
    catch(e){
        res.send({
            status:0,
            message: 'error in delete'
        })
    }
})


module.exports = router