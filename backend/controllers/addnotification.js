import { Notifications} from '../models/schema.js';

export const addNotification = async (req, res) => {
    try{
    const newNotification = new Notifications({
        title: req.body.params.title,
        content: req.body.params.content,
        date: req.body.params.date,
    });
    newNotification.save().then(()=>console.log("Thành công lưu người sử dụng")).catch((err)=>console.log(err));
    res.status(200).send("oke");
    }
    catch(error){
        res.status(404).send("Error");
    }
}