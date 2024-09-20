const Author = require("./model");
const Book = require("../books/model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      name: req.body.name,
    });

    res.status(201).json({ message: "success", author: author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAuthorAndBooks = async (req, res) => {
  const author = await Author.findOne({
    where: {
      name: req.params.name,
    },
  });

  const books = await Book.findAll({
    where: {
      author: author.name,
    },
  });

  res.status(200).json({ message: "success", author: author, books: books });
};

module.exports = {
  addAuthor: addAuthor,
  getAuthorAndBooks: getAuthorAndBooks,
};
