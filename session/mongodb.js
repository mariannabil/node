// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient
// const  {MongoClient , ObjectID} = require('mongodb')
// const connectionURL = "mongodb://127.0.0.1:27017"
// const dbName = "firstDb"
// MongoClient.connect(connectionURL, {useNewUrlParser:true}, (err,client)=>{
//     if(err) console.log('db not connected')
//     const db = client.db(dbName)
//     const db = client.db(dbName)
//     console.log('connected')
        //     db.collection('name').insertOne(
        // {name:'marian', age:22}
     
    // db.collection('sister').insertMany([
    //     {name:'marina'} , {age:19}
    // ])
    // db.collection('sister').find({}).toArray((err,data)=>{
    //     console.table(data)
    // })
// db.collection('sister').findOne({_id: new ObjectID("6002cf85dac9a413c8db5239")}
// // ,(err,data)=>{console.log(data);})
// db.collection('sister').updateOne({_id: new ObjectID("6002cf85dac9a413c8db5239")},{$inc:{age:1}})
// .then(res=>console.log(res))
// .catch(err=> console.log(err))
// db.collection('sister').deleteOne({name:'marina'})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)})
// })

//task
const mongodb = require('mongodb')
const  {MongoClient , ObjectID} = require('mongodb')
const connectionURL = "mongodb://127.0.0.1:27017"
const dbName = "bank"
 const  yargs = require('yargs')
 MongoClient.connect(connectionURL, {useNewUrlParser:true}, (err,client)=>{
    if(err) console.log('db not connected')
    const db = client.db(dbName)
    console.log('connected')
yargs.commend({
    command: 'adduser',
  describe: 'add New User',
   builder:{
        name:{
                demandOption:true,
            describe:'title content',
            type: 'string'
        },
        balance:{
            demandOption:true,
            describe:'title content',
            type: 'string' 
        },
        account:{
            demandOption:true,
            describe:'title content',
            type: 'number'
        }
    },
        handler: function(argv) {
            let users =
            db.collection('users').insertMany([
         
    {name:argv.name, balance:argv.balance, account:argv.account}
            ])
        }
            
})

})
yargs.command({
   
        command:'showAllNotes',
        describe:'show all stored notes',
        handler: function(){

 db.collection('showAllNotes').updateOne({_id: new ObjectID("6002cf85dac9a413c8db5239")},{$inc:{age:1}})
 .then(res=>console.log(res))
 .catch(err=> console.log(err))
            showAllData()
        }
     
})
yargs.command({
    command:"addNewNote",
    describe:"add new note to our file",
    builder:{
        name:{ type:'string', demandOption:true},
        balance:{ type:'string'},
        account:{type:'number'},
    },
    handler: function(argv){
        let note = {name: argv.name, balance:argv.balance,account:argv.account}
        addNewData(note)
    }
})

yargs.argv
