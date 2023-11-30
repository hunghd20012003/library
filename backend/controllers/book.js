import { Book } from "../models/schema.js";
export const totalBook= async(req,res)=>{
    var total=0;
    Book.find({}).then(result=>{
        for(  var i=0;i<result.length;i++){
            total=total+result[i].amount;
        }
        res.status(200).json({
            error: false,
            message: total,
        });
    }).catch(err=>{
        console.log(err);
    });
    
}