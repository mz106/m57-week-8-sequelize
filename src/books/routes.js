const { Router } = require("express");
const bookRouter = Router();

const { addBook } = require("./controllers");

// addbook
bookRouter.post("/books/addbook", addBook);

// getallbooks

// deletebookbytitle

// updatebookauthor

module.exports = bookRouter;
