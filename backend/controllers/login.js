import bcrypt from 'bcrypt'
import { User } from '../models/schema.js';
import { Admin } from '../models/schema.js';
import nodemailer from 'nodemailer'
import express from 'express'
const saltRounds=10;
export const adminlogin = async (req, res) => {
    console.log(req.body.params.password);
    const adminname1=req.body.params.email;
    const password=req.body.params.password;
    Admin.findOne({email:adminname1}).then((admin)=>{
        if(admin){
            bcrypt.compare(password, admin.password).then(function(result) {
                if(result===true){
                    res.send({
                        state:"ok",
                        adminId:admin._id
                    });
                }
                else{
                    res.send("Mật khẩu không chính xác");
                }
            });
        }
        else{
            res.send("Tài khoản chưa được đăng kí, vui lòng chọn tài khoản");
        }
    })
};
export const userlogin = async (req, res) => {
    console.log(req);
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
export const adminRegister = async (req, res) => {
    const email1=req.body.email;
    console.log(email1);
    Admin.exists({email:email1}).then((result)=>{
        if(result===null){
            var id;
            
            bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
                // Store hash in your password DB.
                const newUser=new Admin({
                    name: req.body.name,
                    email:req.body.email,
                    phone:req.body.phone,
                    password:hash
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
export const userRegister = async (req, res) => {
    const email1=req.body.params.email;
    User.exists({email:email1}).then((result)=>{
        if(result===null){
            var id;
            bcrypt.hash(req.body.params.password, saltRounds).then(function(hash) {
                // Store hash in your password DB.
                const newUser=new User({
                    name: req.body.params.name,
                    phone:req.body.params.phone,
                    email:req.body.params.email,
                    password:hash,
                    googleId:"",
                    facebookId:"",
                    penaltyNumber:0,
                    resetToken:"",
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
export const forgotPassword= async (req, res)=>{
    const  email1  = req.body.params.email;
    try {
        await User.findOne({ email:email1 }).then((oldUser)=>{
            if(!oldUser){
                return res.json({ status: "User Not Exists!!" });
            }else{
                const resetToken = Math.random().toString(36).slice(2, 10);
                oldUser.resetToken = resetToken;
                oldUser.save().then(()=>console.log("Thành công1")).catch((err)=>{console.log(err)});
                const mailOptions = {
                    from: 'hoangdinhhung20012003@gmail.com',
                    to: email1,
                    subject: 'Password Reset',
                    text: `Nhập mã sau để lấy lại mật khẩu: ${resetToken}`
                };
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'hoangdinhhung20012003@gmail.com',
                      pass: 'oemf cppo gcvx nxck'
                    }
                  });
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);
                      return res.status(500).json({ message: 'Error sending email' });
                    }
                
                    res.status(200).json({ message: 'Email sent successfully' });
                  });
            }
        }).catch((err)=>{
            console.log(err);
        });
    } catch(err){
        res.status(500).send(err);
    };
       
};
export const resetPassword= async (req, res)=>{
    const email=req.body.params.email;
    const resetToken=req.body.params.token;
    await User.findOne({ email: email }).then(user=>{
        if(!user){
            return res.status(404).json({ message: 'Không tồn tại người dùng' });
        }
        else{
            if(user.resetToken===resetToken){
                let newpassword=Math.random().toString(36).slice(2, 18);
                
                bcrypt.hash(newpassword, saltRounds).then(function(hash) {
                    user.password=hash;
                    user.resetToken="";
                    user.save().then(()=>console.log("Thành công cập nhật mật khẩu")).catch((err)=>console.log(err));
                });
                const mailOptions = {
                    from: 'hoangdinhhung20012003@gmail.com',
                    to: email,
                    subject: 'Password Reset',
                    text: `Mật khẩu mới của bạn là: ${newpassword}`
                };
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'hoangdinhhung20012003@gmail.com',
                      pass: 'oemf cppo gcvx nxck'
                    }
                  });
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log(error);                     
                    }
                  });
            }
        return res.status(200).send("ok");
        }
    }).catch(err=>{
        console.log(err);
    })
};