const mongoose = require('mongoose');


const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {
         useUnifiedTopology: true,
         useNewUrlParser: true 
    }, ()=>{
        console.log("Monogodb Connected")
    })
}

module.exports = dbConnect