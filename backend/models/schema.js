import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({ 
    email:String,
    password:String, 
    googleId: String,
    facebookId:String,
});
const userInfo=new mongoose.Schema({
    userID:String,
    name:String,
    penaltyNumber:Number,
    isChecked:Boolean,
    googleID: String,
    facebookID:String,
    isMember:Boolean
})
export const UserInfo=mongoose.model("UserInfo",userInfo);
export const User=mongoose.model("User",userSchema);
export const Admin=mongoose.model("Admin",{
    name:String,
    email:String,
    phone: String,
    isChecked:Boolean,
    googleID: String,
    facebookID:String,
});
export const Book=mongoose.model("Book",{
    bookId:String,
    name:String,
    author:String,
    publishor:String,
    category:String,
    amount:Number,
    available:Number
});
export const Bill=mongoose.model("Bill",{
    billID:String,
    userId:String,
    borrowDate: Date,
    returnDate:Date,
    expireDate:Date,
    state:String,
    borrowedBook:[String]
});
export const Plan=mongoose.model("Plan",{
    title:String,
    amount:Number,
    duration: Number,
    status:Boolean,
});
export const PurchaseHistory=mongoose.model("PurchaseHistory",{
    userId:String,
    planName:String,
    startDate:Date,
    endDate:Date,
    status:String
});