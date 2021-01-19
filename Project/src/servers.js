
const path = require('path')
const hbs = require('hbs')
const express = require('express')
const getapi = require('./utils/getapi')

const app = express()

const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../template/views')
const partialsDirectory = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsDirectory)

app.use(express.static(publicDirectory))

app.get('',(req,res)=>{
getapi.getData(( err, data)=>{
    if(err){
    pageData = []
    err = true
}
else {
    pageData =  data
    err = false
}

res.render('about',{pageData , err})
})
  
})
app.get('/:id',(req,res)=>{
    getapi.getSingle(req.params.id,(err,data)=>{
        if(err){
            pageData = []
            err = true
        }
        else {
            pageData =  data
            err = false
        }
       
res.render('single',{pageData,err})        

    })
})


app.listen(2000)