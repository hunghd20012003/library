import { User } from "../models/schema.js";
import { PurchaseHistory } from "../models/schema.js";
import bcrypt from 'bcrypt'
const saltRounds=10;
export const getUserInfor=async (req,res)=>{
    const userId = req.body.params.userId;
    User.findOne({_id:userId}).then((user)=>{
        if(user){ 
         PurchaseHistory.findOne({userId:userId}).then((purchar)=>{
          
            if(purchar){
               res.send({
                        name:user.name,
                        phone:user.phone,
                        email:user.email,
                        plan:purchar.planName,
                        endDate:purchar.endDate
                
                });
            }
            else{
                res.send({
                name:user.name,
                    phone:user.phone,
                    email:user.email,
                    plan:"",
                    endDate:""
               });
               
            }
         });
        }
        else{
           res.send("no user");
        }
    }).catch(()=>{
         res.send("error");
    })
}
export const getAllPlans=async (req,res)=>{
    const userId = req.body.params.userId;
   await  PurchaseHistory.find({userId:userId}).then((user)=>{
            res.status(200).json(user);
    })
};
export const changeInfo=async (req,res)=>{
    const userId=req.body.params.userId;
    await User.findOne({_id:userId}).then((user)=>{
      if(req.body.params.name!=="")user.name=req.body.params.name;
      if(req.body.params.phone!=="")user.phone=req.body.params.phone;
      user.save();
      res.send("ok");
    })
    .catch(()=>{res.send("error")});
}
export const changePassword=async (req,res)=>{
    const userId=req.body.params.userId;
    await User.findOne({_id:userId}).then((user)=>{
        bcrypt.compare(req.body.params.oldPassword, user.password).then(function(result) {
            if(result===true){
                bcrypt.hash(req.body.params.newPassword, saltRounds).then(function(hash) {
                    // Store hash in your password DB.
                    user.password=hash;
                    user.save();
                });
                res.send("ok");
            }
            else{
                res.send("error");
            }
        });
    })
}