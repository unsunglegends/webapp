const path = require('path');
const express = require('express')
const hbs =require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()

const publicDir = path.join(__dirname,'../public')
const viewsDir = path.join(__dirname,'../templates/views')
const partialsDir = path.join(__dirname,'../templates/partials')
app.set('view engine','hbs')
app.set('views',viewsDir)
hbs.registerPartials(partialsDir)
app.use(express.static(publicDir))
app.get("",(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:"chaitanya"
    })
})

app.get("/about",(req,res)=>{
    res.render('about',{
        title:"About us",
        name:"chaitanya"
    })
})
app.get("/help",(req,res)=>{
    res.render('help',{
        title:"Help",
        message:"hello you are on weather app",
        name:"chaitanya"
    })
})
app.get('/help/*',(req,res)=>{
    res.render("404",{
        title:"Help",
        message:"Help article not found",
        name:"chaitanya"
    })
})
app.get('/weather',(req,res)=>{
    if(! req.query.address){
        return res.send({
            error:'you must enter address'
        })
    }
    geocode(req.query.address , (error,{name,latitude,longitude}={})=>{
        if (error){
            return res.send({error})
        }
        
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error){
                return res.send({error})
            }
            res.send({name,
            Data:forecastdata})
          })
    })
})
app.get('/products',(req,res)=>{
    if(! req.query.search){
        return res.send({
            error:'you must enter address'
        })
    }
    console.log(req.query.search)
    res.send({
        product:[]
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:"Help",
        message:"Page not found",
        name:"chaitanya"
    })
})
app.listen(2099,( )=>{
    console.log("port is running on 2099")
})