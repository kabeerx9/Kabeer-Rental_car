const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://kabeerx9:joshikabeer123@cluster0.whmt3hk.mongodb.net/BookCars-Kabeer' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose