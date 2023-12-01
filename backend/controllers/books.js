import {Book} from "../models/schema.js"
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
      } catch (err) {
        res.status(500).json({ error: err });
      }
};

export const getBook = async (req, res) => {
  try {
    console.log(req.query.bookId);
    const { bookId } = req.query;
    const book = await Book.findOne({ bookId });
    return res.status(200).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};

export const createBook = async (req, res) => {
  try{
    console.log(req.body);
    const book = new Book(req.body);
    book.save();
    res.status(200).json({tt: "OK"})  
  }catch(error){
    res.status(500).json({tt: "ERROR"})
  }
};

export const updateBook = async (req, res) => {
    try{
      const updateBook = req.body;
      console.log(updateBook);
      const book = await Book.findOneAndUpdate({bookId: updateBook.bookId}, updateBook, {new: true});
      console.log("Thành công");
      res.status(200).json({tt: "OK"})
    }catch(error){
      console.log("Lỗi", error);
      res.status(500).json({tt: "Lỗi"})
    }
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