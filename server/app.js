const express=require('express')
const app=express()
require('./dpconnect')
app.use(express.json())
const Routes=require('./schema');
app.get('/Search',async (req,res)=>
{
    try{
        const user=await Routes.find()
        res.send(user);
    }catch(err){
        console.log(err)
    }
})
app.post('/addRoute',(req,res,err)=>
{
   const { cityStart,distance,cityEnd}=req.body;
   if(!cityStart||!distance||!cityEnd)
       return res.status(422).json({error:"Enter all the values"});
   const  newRoute=new Routes({cityStart,distance,cityEnd});
   newRoute.save().then(()=>{
    res.status(201).json({message:"Added Successfully"});
   })
   .catch((err)=>
   {
    res.status(500).json({error:"Error occured"})
   })
})
app.post('./addRoute',async (req,res)=>
{
    const { cityStart,distance,cityEnd}=req.body;
    if(!cityStart||!distance||!cityEnd)
        return res.status(422).json({error:"Enter all the values"});
    const  newRoute=new Routes({cityStart,distance,cityEnd});    
    try
    {
        await newRoute.save();
        res.status(202).json({message:"Added successfully"});
    }    
    catch(err)
    {
       res.status(500).json({error:err})
    } 
})
const port=5000;
app.listen(port,()=>
{
    console.log(`Server is listening on port ${port}`);
})
