const request = require('request')
const getData = (callback)=>{
    const url = `https://jsonplaceholder.typicode.com/posts`
    request ({url, json:true},(err,response)=>{
        if(err){
            callback ('err',undefined)
        }
        else {
            callback(undefined,response.body)
        }
    })
}

const getSingle = (postId, callback) =>{
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
    request({ url, json:true }, (err, response) => {
        if(err){
            callback('err', undefined)
        }
        else{
            callback(undefined, response.body)
        }
    })
    }

module.exports =  {getData, getSingle}
