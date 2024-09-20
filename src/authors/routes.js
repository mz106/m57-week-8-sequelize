const { Router } = require("express");
const { addAuthor, getAuthorAndBooks } = require("./controllers");
const authorRouter = Router();

authorRouter.post("/author/addauthor", addAuthor);

authorRouter.get("/author/getauthorandbooks/:name", getAuthorAndBooks);

module.exports = authorRouter;
