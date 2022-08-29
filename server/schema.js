const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    cityStart:
    {
        type:String,
        required:true
    },
    distance:
    {
        type:Number,
        required:true
    },
    cityEnd:
    {
        type:String,
        required:true
    }
})
const Routes=mongoose.model('routes',schema);
module.exports=Routes;