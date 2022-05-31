module.exports = (app) => {
    app.get("*", (req, res) => {
        res.status(404).json({
            message: `Page not found : ${req.originalUrl}`
        })
    })

  app.use((error, req, res, next) => {
      console.log('----------',error,'----------')
    res.status(500).json({
      message: "oups, got an Error !",
    });
  });
};

// module.exports= errorHandler
