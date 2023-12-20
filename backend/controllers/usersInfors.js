import { User } from "../models/schema.js";
import { PurchaseHistory } from "../models/schema.js";
export const getUserInfor=async (req,res)=>{
    const userId = req.body.params.userId;
    console.log(userId)
    User.findOne({_id:userId}).then((user)=>{
        if(user){ 
         PurchaseHistory.findOne({userId:userId}).then((purchar)=>{
          
            if(purchar){
                console.log(user.name);
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