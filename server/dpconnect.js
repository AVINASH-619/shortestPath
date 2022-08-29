const mongoose=require('mongoose');
//In the DB we must change arrow it password and must add the database name beforr the ?
const DB="mongodb+srv://backend:backend@cluster0.i8sjoay.mongodb.net/routedata?retryWrites=true&w=majority" ;
mongoose.connect(DB).then(()=>
{
    console.log("Connection successful")
}).catch((err)=>
{
    console.log("error occured");
});