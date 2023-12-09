import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({ 
    name:String,
    email:String,
    password:String, 
    googleId: String,
    facebookId:String,
    resetToken:String,
    penaltyNumber:Number,
    isChecked:Boolean,
    isMember:Boolean
});
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
    borrowDate: String,
    returnDate:String,
    expireDate:String,
    state:String,
    borrowedBook:[{
        bookId:String
    }]
});
export const Plan=mongoose.model("Plan",{
    planId: mongoose.Schema.Types.ObjectId,  // Trường làm khóa chính
    title: String,
    amount: Number,
    duration: Number,
    status: String,
});
export const PurchaseHistory=mongoose.model("PurchaseHistory",{
    userId: String,
    planName: String,
    startDate: Date,
    endDate: Date,
    status: String,
});