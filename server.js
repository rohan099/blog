const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

const data =require('./data.json')

const Blog = db.blog;

db.sequelize.sync({force: true}).then(() => {
  //console.log('Drop and Resync Db');
  initial();
});

const initial = ()=>{
  for(let i=0; i<=data.length;i++){
    Blog.create(data[i]);
  }
}

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/auth')(app);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my blog." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});