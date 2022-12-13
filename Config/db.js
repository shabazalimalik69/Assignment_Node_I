const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = ()=>{
    return mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("DB Connected"))
    .catch((error)=>{
        console.log(error.message)
    })
};

module.exports = connectDB;