const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("DB connection is Successfull");
    })
    .catch((err)=>{
        console.log("Issue in DB connection");
        console.error(err.message);
        //iska kya function h?
        process.exit(1);
    })
}

module.exports = dbConnect;