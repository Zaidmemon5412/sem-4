expr = require("express");
cp = require('cookie-parser')

function buildApp() {
    app = expr();
app.use(cp())
  app.use(expr.urlencoded({ extended: true }));
  app.use(expr.json());
  app.use(expr.static("../public", { index: "index.html" }));
  app.get('/health',(req,res)=>{
    app.use((err,req,res,next)=>{
        res.status(500).send("Something went wrong")

    })
    
  })
  return app
}
module.exports = {buildApp};
