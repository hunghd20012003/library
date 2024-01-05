import { User} from '../models/schema.js';

export const listUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
      } 
    catch (error) {
        console.error('Error fetching users:', error);
        res.stus(500).send({
            error:'Internal Server Error'
        });
    }
};

export const decleteUser = async (req, res) =>{
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
export const totalUser= async(req,res)=>{
    User.find().then(result=>{
       res.status(200).json({
           error: false,
           message: result.length,
       });
   }).catch(err=>{
       console.log(err);
           res.status(500);
   }); 
   
}