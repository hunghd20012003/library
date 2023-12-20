import mongoose from 'mongoose';
import format from 'date-fns';
export const User=mongoose.model("User",{
    name:String,
    email:String,
    phone: String,
    penaltyNumber:Number,
    isChecked:Boolean,
    googleID: String,
    facebookID:String,
    isMember:Boolean
});
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
    available:Number,
    image:String,
    description:String
});
export const Bill=mongoose.model("Bill",{
    billID:String,
    userId:String,
    borrowDate: String,
    returnDate: String,
    expireDate: String,
    state:String,
    borrowedBook:[{
        bookId: String
    }]
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