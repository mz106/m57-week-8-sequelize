const Book = require("./model");

// addBook

const addBook = async (req, res) => {
  try {
    // try the thing
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    // if error then does something
    res.status(500).json({ message: error.message, error: error });
  }
};

// getAllBooks

// deleteBookbyTitle

// updateBookAuthor

module.exports = {
  addBook: addBook,
};
