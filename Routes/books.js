const router = require("express").Router();
const { testRecievedBook } = require("../tools/bookCheck");
const data = require("../data/data.json");
const { errorHandler } = require("../error/errorHandler");

router.get("/", (req, res, next) => {
  // return next("my erroor")
  res.status(200).json({
    message: data,
  });
});

router.get("/:id", (req, res, next) => {
  console.log("route ");
  try {
    console.log(req.params.id);
    const result = data.items.find((book) => book.id === req.params.id);
    fictif.push({})
    if (result) {
      res.status(200).json({
        result,
      });
    } else {
      res.status(404).json({
        message: "book not found!",
      });
    }
  } catch (e) {
    return next(e);
  }
});

router.post("/", (req, res, next) => {
  try {
    const bookTS = req.body;
    if (testRecievedBook(bookTS)) {
      console.log("print ", data);
      data.items.push({
        ...bookTS,
        id: "random",
        etag: "random etag",
      });
      console.log("new store : ", data);
      res.status(200).json({
        message: "book received !",
      });
      return;
    }
    res.status(404).json({
      message: "wrong object !",
    });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = router;
