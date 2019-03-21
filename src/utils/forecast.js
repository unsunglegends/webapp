const request = require('request')
const forecast = (lat,long,callback) => {
    const url = 'https://api.darksky.net/forecast/d1bbda77f8f501cbde310d383153c977/'+lat+','+long+'?units=si'
    request({url,json:true},(error,{body})=>{
        
        if (error){
            callback('unable to connect to weather App',undefined)
        }else if(body.error){
            callback('invalid input',undefined)
        }else{
        callback(undefined,{
            temperature: body.currently.temperature,
            precipProbability:body.currently.precipProbability,
            summary:body.daily.summary
        } )
        }
    })
} 
module.exports=forecast;