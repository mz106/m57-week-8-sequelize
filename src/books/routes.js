const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  bringMeAllTheBooks,
  paramsExample,
  getBookByGenre,
} = require("./controllers");

// addbook
bookRouter.post("/books/addbook", addBook);

// getallbooks
bookRouter.get("/books/getallbooks", getAllBooks);

// deletebookbytitle

// updatebookauthor

// example second getting all books
bookRouter.get("/books/bringmeallthebooks", bringMeAllTheBooks);

// params example
bookRouter.get("/books/paramsexample/:example", paramsExample);

// get book by genre
bookRouter.get("/books/getbookbygenre/:genre", getBookByGenre);

module.exports = bookRouter;
