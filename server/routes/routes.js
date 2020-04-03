const express = require("express");
const router = express.Router();
const BooksController = require("../controllers/books");

//Default message
router.get("/", (req, res) => {
  res.send({ message: "test second server" });
});

//create
router.post("/store", BooksController.store);
//read
router.get("/index", BooksController.index);
//update
router.patch("/update/:id", BooksController.update);
//delete
router.delete("/destroy/:id", BooksController.destroy);

module.exports = router;
