import { Bill, Book } from "../models/schema.js";
export const getLoans = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
      } catch (err) {
        res.status(500).json({ error: err });
      }
};

export const getLoan = async (req, res) => {
    try {
        const {billID} = req.query;
        const bill = await Bill.findOne({ billID });
        const books = [];
        for (let i = 0; i < bill.borrowedBooks.length; i++){
            const book = await Book.findOne({bookId: bill.borrowedBooks[i].bookId})
            books.push(book);
        }
        const result = {
            bill: bill,
            books: books
        }
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({ error: err });
      }
};

export const updateState = async (req, res) => {
    try{
        const bills = await Bill.find({returnDate: 'None'});
        console.log(bills);
        const today = new Date();
        await Promise.all(bills.map(async (bill) => {
            if (new Date(bill.expireDate) < today) {
                await Bill.updateOne({ billID: bill.billID }, { $set: { state: 'Overdue' } });
                console.log("Overdue");
            }
        }));
        res.status(200).json({tt:"ok"})
    }catch(err){
        res.status(500).json({tt:"err"})
    }
    
};

export const createLoan = async (req, res) => {
    
};

export const updateLoan = async (req, res) => {
    try{
        const updateBill = req.body;
        console.log(updateBill);
        const book = await Bill.findOneAndUpdate({billID: updateBill.billID}, updateBill, {new: true});
        console.log("Thành công");
        res.status(200).json({tt: "OK"})
      }catch(error){
        console.log("Lỗi", error);
        res.status(500).json({tt: "Lỗi"})
      }
};