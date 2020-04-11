
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/assets",express.static("assets"));
app.get('/', function(req, res){
res.render("indexAlternate")
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on ${PORT}`);
})