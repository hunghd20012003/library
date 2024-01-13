import { User } from "../models/schema.js";
import { PurchaseHistory } from "../models/schema.js";
import bcrypt from 'bcrypt'
const saltRounds=10;

export const getUserInfor=async (req,res)=>{
    const userId = req.body.params.userId;
    User.findOne({_id:userId}).then((user)=>{
        if(user){ 
         PurchaseHistory.findOne({userId:userId}).then((purchar)=>{
            console.log(user.email)
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
      res.send({
        state:"ok",
        user:{
            id:userId,
            name:user.name,
            penaltyNumber:user.penaltyNumber,
            isChecked:user.isChecked,
            isMember:user.isMember,
            googleId:user.googleId,
            facebookId:user.facebookId,
            avatar:user.avatar
        }
      });
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
export const changeAvatar=async (req,res)=>{
    try {
        // Lưu đường dẫn của ảnh đại diện vào database
        const userId = req.body.params.userId; // Chắc chắn rằng bạn đã gửi userId từ frontend
        const avatarPath = req.body.params.avatar;
        User.findOne({_id:userId}).then((user)=>{
            if(user){
                user.avatar=avatarPath;
                user.save();
                res.status(200).send({
                    state:"oke",
                user:{
                    id:userId,
                    name:user.name,
                    penaltyNumber:user.penaltyNumber,
                    googleId:user.googleId,
                    facebookId:user.facebookId,
                    isChecked:user.isChecked,
                    isMember:user.isMember,
                    avatar:user.avatar,
                    googleId:user.googleId,
                    facebookId:user.facebookId
                }
                })
            }
        })
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
};