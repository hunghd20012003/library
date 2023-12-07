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

export const getPage = async (req, res) =>{
    try{
      var page = req.query.page;
      var limit = req.query.limit;
      if(page && limit){
        page = parseInt(page)
        limit = parseInt(limit)
        if(page < 1){
          page = 1;
        }
        var soluongboqua = (page-1)*limit
        const books = await Book.find().skip(soluongboqua).limit(limit);
        res.status(200).json(books);
      }
    }catch(err){
      res.status(500).json({error: err})
    }
}

export const getLastPage = async(req, res) => {
      try{
        var limit = req.query.limit;
        if(limit){
          limit = parseInt(limit);
          const count = await Book.countDocuments();
          const page = Math.floor(count / limit) + 1;
          const books = await Book.find().skip((page-1) * limit).limit(limit);
          res.status(200).json({
            books: books,
            page: page
          })
        }
      }catch(err){
        res.status(500).json({error: err})
      }
}
export const namePage = async (req, res) =>{
  try{
    var page = req.query.page;
    var limit = req.query.limit;
    var s = req.query.question;
    if(page && limit){
      page = parseInt(page)
      limit = parseInt(limit)
      if(page < 1){
        page = 1;
      }
      var soluongboqua = (page-1)*limit
      const books = await Book.find({ name: { $regex: new RegExp(s, "i") } }).skip(soluongboqua).limit(limit);
      res.status(200).json(books);
    }
  }catch(err){
    res.status(500).json({error: err})
  }
}

export const nameLastPage = async(req, res) => {
    try{
      var limit = req.query.limit;
      var s = req.query.question;
      if(limit){
        limit = parseInt(limit);
        const count = await Book.countDocuments();
        const page = Math.floor(count / limit) + 1;
        const books = await Book.find({ name: { $regex: new RegExp(s, "i") } }).skip((page-1) * limit).limit(limit);
        res.status(200).json({
          books: books,
          page: page
        })
      }
    }catch(err){
      res.status(500).json({error: err})
    }
}
export const bookIdPage = async (req, res) =>{
  try{
    var page = req.query.page;
    var limit = req.query.limit;
    var s = req.query.question;
    if(page && limit){
      page = parseInt(page)
      limit = parseInt(limit)
      if(page < 1){
        page = 1;
      }
      var soluongboqua = (page-1)*limit
      const books = await Book.find({ bookId: { $regex: new RegExp(s, "i") } }).skip(soluongboqua).limit(limit);
      res.status(200).json(books);
    }
  }catch(err){
    res.status(500).json({error: err})
  }
}

export const bookIdLastPage = async(req, res) => {
    try{
      var limit = req.query.limit;
      var s = req.query.question;
      if(limit){
        limit = parseInt(limit);
        const count = await Book.countDocuments();
        const page = Math.floor(count / limit) + 1;
        const books = await Book.find({ bookId: { $regex: new RegExp(s, "i") } }).skip((page-1) * limit).limit(limit);
        res.status(200).json({
          books: books,
          page: page
        })
      }
    }catch(err){
      res.status(500).json({error: err})
    }
}
export const authorPage = async (req, res) =>{
  try{
    var page = req.query.page;
    var limit = req.query.limit;
    var s = req.query.question;
    if(page && limit){
      page = parseInt(page)
      limit = parseInt(limit)
      if(page < 1){
        page = 1;
      }
      var soluongboqua = (page-1)*limit
      const books = await Book.find({ author: { $regex: new RegExp(s, "i") } }).skip(soluongboqua).limit(limit);
      res.status(200).json(books);
    }
  }catch(err){
    res.status(500).json({error: err})
  }
}

export const authorLastPage = async(req, res) => {
    try{
      var limit = req.query.limit;
      var s = req.query.question;
      if(limit){
        limit = parseInt(limit);
        const count = await Book.countDocuments();
        const page = Math.floor(count / limit) + 1;
        const books = await Book.find({ author: { $regex: new RegExp(s, "i") } }).skip((page-1) * limit).limit(limit);
        res.status(200).json({
          books: books,
          page: page
        })
      }
    }catch(err){
      res.status(500).json({error: err})
    }
}
export const publishorPage = async (req, res) =>{
  try{
    var page = req.query.page;
    var limit = req.query.limit;
    var s = req.query.question;
    if(page && limit){
      page = parseInt(page)
      limit = parseInt(limit)
      if(page < 1){
        page = 1;
      }
      var soluongboqua = (page-1)*limit
      const books = await Book.find({ publishor: { $regex: new RegExp(s, "i") } }).skip(soluongboqua).limit(limit);
      res.status(200).json(books);
    }
  }catch(err){
    res.status(500).json({error: err})
  }
}

export const publishorLastPage = async(req, res) => {
    try{
      var limit = req.query.limit;
      var s = req.query.question;
      if(limit){
        limit = parseInt(limit);
        const count = await Book.countDocuments();
        const page = Math.floor(count / limit) + 1;
        const books = await Book.find({ publishor: { $regex: new RegExp(s, "i") } }).skip((page-1) * limit).limit(limit);
        res.status(200).json({
          books: books,
          page: page
        })
      }
    }catch(err){
      res.status(500).json({error: err})
    }
}
export const categoryPage = async (req, res) =>{
  try{
    var page = req.query.page;
    var limit = req.query.limit;
    var s = req.query.question;
    if(page && limit){
      page = parseInt(page)
      limit = parseInt(limit)
      if(page < 1){
        page = 1;
      }
      var soluongboqua = (page-1)*limit
      const books = await Book.find({ category: { $regex: new RegExp(s, "i") } }).skip(soluongboqua).limit(limit);
      res.status(200).json(books);
    }
  }catch(err){
    res.status(500).json({error: err})
  }
}

export const categoryLastPage = async(req, res) => {
    try{
      var limit = req.query.limit;
      var s = req.query.question;
      if(limit){
        limit = parseInt(limit);
        const count = await Book.countDocuments();
        const page = Math.floor(count / limit) + 1;
        const books = await Book.find({ category: { $regex: new RegExp(s, "i") } }).skip((page-1) * limit).limit(limit);
        res.status(200).json({
          books: books,
          page: page
        })
      }
    }catch(err){
      res.status(500).json({error: err})
    }
}