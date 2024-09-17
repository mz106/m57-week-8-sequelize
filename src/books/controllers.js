const addBook = async (req, res) => {
  try {
    // try the thing
    res.status(201).json({ message: "success" });
  } catch (error) {
    // if error then does something
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
};
