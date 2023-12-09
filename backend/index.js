import express from "express"
import bodyParser from "body-parser"
import books from "./routers/books.js"
import loans from "./routers/loans.js"
import plans from "./routers/plans.js"
import users from "./routers/users.js"
import mongoose  from "mongoose"
import cors from 'cors';
import { Bill } from "./models/schema.js";
import {format, parse} from 'date-fns'
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true , limit: '30mb' }));

mongoose.connect("mongodb+srv://hoangdinhhung20012003:hust20210399@cluster1.ixp6j2h.mongodb.net/").then(()=>{
    // const newBill = new Bill({
    //     billID: 'A1001',
    //     userId: '20215452',
    //     borrowDate: '2023-12-01',
    //     returnDate: 'None',
    //     expireDate: '2023-12-03',
    //     state: 'Borrowed',
    //     borrowedBook: [
    //         {
    //             bookId: 'DRM1'
    //         },
    //         {
    //             bookId: 'DRM2'
    //         },
    //     ]
    // });
    
    // newBill.save().then(savedBill => {
    //     console.log('Bill saved:', savedBill);
    // })
    // .catch(error => {
    //     console.error('Error saving bill:', error);
    // });
    console.log("thành công")})
    .catch(()=>{console.log("Thất bại")});

app.use('/books', books);
app.use('/loans', loans);
app.use('/plans', plans);
app.use('/users', users);

app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});