const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
const homeconstant = require('./constants/homeconstant')
app.set('views','./views')
app.use("/public/images",express.static('./public/images'));
app.use('/assets',express.static('assets'));
app.get('/',(req,res)=>{
   res.render('home',{content:homeconstant})
})


app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})