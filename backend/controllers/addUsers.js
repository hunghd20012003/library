import bcrypt from 'bcrypt'
import { User} from '../models/schema.js';

export const addUser = async (req, res) => {
    try {
    const email1=req.body.params.email;
    User.exists({email:email1}).then((result)=>{
        if(result==null){
            const newUser=new User({
                email:req.body.params.email,
                password:req.body.params.password,
                name: req.body.params.name,
                isChecked: false,
                isMember: false,
                googleId:" ",
            });
            newUser.save().then(()=>console.log("Thành công lưu người sử dụng")).catch((err)=>console.log(err));
            res.status(200).send("oke");
        }
        else res.send("Tài khoản đã tồn tại");
    });
    }
    catch(error) {
        res.send("Lỗi sever");
    }
};

export const listUser = async (req, res) => {
    try {
        const users = await User.find({isChecked:false});
        res.status(200).send(users);
      } 
    catch (error) {
        console.error('Error fetching users:', error);
        res.stus(500).send({
            error:'Internal Server Error'
        });
    }
};

export const acceptUser = async (req, res) => {
    const email1=req.body.params.email;
    User.exists({email:email1}).then((result)=>{
        if(result==null){
            res.status(200).send("ok");
        }
    User.updateOne({email: req.body.params.email},
        {
            $set: {
                isChecked:true
            }
    }).then(()=>{
        console.log("Lỗi update");
    }).catch((err)=>{
        console.log(err);
    });
    res.status(200).send("oke");
    });
}

export const declineUser = async (req, res) =>{
    const email1=req.body.params.email;
    console.log(req);
    User.exists({email:email1}).then((result)=>{
        if(result==null){
            return res.status(200).send("Not found");
        }
    User.deleteOne({email: email1}).then(()=>{
        console.log("Lỗi update");
    }).catch((err)=>{
        console.log(err);
    });
    res.status(200).send("oke");
    });
}