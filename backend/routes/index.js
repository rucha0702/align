const express=require("express");
const router=express.Router();

// this is dictionary page of all the routes
const userRoute=require("./user");
const authRoute=require("./auth");
router.get("/",(req,res)=>{
   res.send("welcome SIH Registration api");
})
// router.get("/users",async(req,res)=>{
//    try{
//       const usersData = await User.find(res.send(usersData));
//    }
//    catch(e){
//       res.send(e);
//    }
// })
router.use("/api/user",userRoute);
router.use("/api/auth",authRoute);
module.exports=router;