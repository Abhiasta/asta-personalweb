const express = require("express");
const { console } = require("inspector");
const app = express();
const port = 1515;
const path = require("path");
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/views"));

app.use("/assets", express.static(path.join(__dirname, "./src/assets")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/contactForm", contact);
app.get("/blogDetail/:index", blogDetail);
// app.get("/testimonial", testimonial);

//Blog
app.get("/blog", project);
app.post("/blog", postProject);
app.post("/postDelete/:index", deletePost);
app.get("/blogEdit/:index", editPost);
app.post("/blogEdit/:index", editBlogPost);

const blogs = [];

function home(req, res) {
  res.render("index");
}

function project(req, res) {
  const query = `SELECT * FROM users`;
  const result = sequelize.query(query, { type: QueryTypes.SELECT });

  console.log("data blogs:", result);

  res.render("blog", { blogs });
}

function contact(req, res) {
  res.render("contactForm");
}

function blogDetail(req, res) {
  const index = req.params.id;

  res.render("blogDetail", { id: index });
}

function postProject(req, res) {
  const { projectName, projectDesc } = req.body;

  blogs.unshift({
    projectName,
    projectDesc,
    createdAt: new Date(),
    image: "../assets/image/yeahBoi.png",
  });

  res.redirect("/blog");
}

function deletePost(req, res) {
  const { index } = req.params;

  blogs.splice(index, 1);

  res.redirect("/blog");
}

// edit post

function editPost(req, res) {
  const { index } = req.params;

  const blog = blogs.find((_, idx) => idx == index);

  res.render("blogEdit", { blog, index });
}

function editBlogPost(req, res) {
  const { index } = req.params;

  const { projectName, projectDesc } = req.body;

  blogs[index] = {
    projectName,
    projectDesc,
    createdAt: new Date(),
    image: "../assets/image/yeahBoi.png",
  };

  res.redirect("/blog");
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
