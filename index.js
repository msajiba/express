const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  const data = [
    {name:"sajib", age:"25"},
    {name:"b", age:"20"},
  ]
  res.send(data);
});

app.post("/order", (req, res) => {
  console.log('res', req.body);
  res.send(req.body);
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broke",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
