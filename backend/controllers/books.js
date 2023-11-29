import {Book} from "../models/schema.js"
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
      } catch (err) {
        res.status(500).json({ error: err });
      }
};

export const createBook = async (req, res) => {
    
};

export const updateBook = async (req, res) => {
    
};

export const deleteBook = async (req, res) => {
    try {
        console.log(req.body);
        const bookId = req.body.bookId;
        await Book.deleteOne({bookId: bookId})
        res.status(200).json({tt: "OK"});
      } catch (err) {
        res.status(500).json({tt: "ERR" });
      }
};