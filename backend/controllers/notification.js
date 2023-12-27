import { Notifications } from "../models/schema.js";

export const listNotification = async (req, res) => {
    try {
        const notifications = await Notifications.find();
        res.status(200).send(notifications);
      } 
    catch (error) {
        console.error('Error fetching users:', error);
        res.stus(500).send({
            error:'Internal Server Error'
        });
    }   
};