import bcrypt from 'bcrypt'
import { User } from '../models/schema.js';

const saltRounds=10;
export const userlogin = async (req, res) => {
    const username1=req.body.params.email;
    const password=req.body.params.password;
    User.findOne({email:username1}).then((user)=>{
        if(user){
            bcrypt.compare(password, user.password).then(function(result) {
                if(result===true){
                    res.send({
                        state:"ok",
                        userId:user._id
                    });
                }
                else{
                    res.send("Mật khẩu không chính xác");
                }
            });
        }
        else{
            res.send("Tài khoản chưa được đăng kí, vui lòng đăng kí tài khoản");
        }
    })
};
export const userRegister = async (req, res) => {
    const email1=req.body.params.email;
    User.exists({email:email1}).then((result)=>{
        if(result===null){
            var id;
            bcrypt.hash(req.body.params.password, saltRounds).then(function(hash) {
                // Store hash in your password DB.
                const newUser=new User({
                    name: req.body.params.firstName+" "+req.body.params.lastName,
                    email:req.body.params.email,
                    password:hash,
                    googleId:"",
                    facebookId:"",
                    penaltyNumber:0,
                    isChecked:false,
                    isMember:false
                });
                newUser.save().then((result)=>id=result._id).catch((err)=>console.log(err));
            });
            
            res.status(200).send({
                state:"oke",
                userId:id
            });
        }
        else res.send("Tài khoản đã tồn tại");
    });

};
