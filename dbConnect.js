const mongoose = require("mongoose")

async function getConnect(){
    try {
        // await mongoose.connect("mongodb://127.0.0.1:27017/2pmWdMernServer")
        await mongoose.connect(process.env.DBKEY)
        
    } catch (error) {
        
    }
}
getConnect()