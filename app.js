const express = require("express");
const { console } = require("inspector");
const app = express();
const port = 1515;
const path = require("path");
const config = require("./src/config/config.json");
const { Sequelize, QueryTypes } = require("sequelize");
const { register } = require("module");
const sequelize = new Sequelize(config.development);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./src/views"));

app.use("/assets", express.static(path.join(__dirname, "./src/assets")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/contactForm", contact);
app.get("/blogDetail/:id", blogDetail);

// LOGIN-REGIST
app.get("/login", login);
app.get("/register", regist);
app.post("/register", registPost);

function login(req, res) {
  res.render("login");
}

function regist(req, res) {
  res.render("register");
}

async function registPost(res, req) {
  const { name, email, password } = req.body;

  const query = `INSERT INTO users(name, email, password) VALUES('${name}', '${email}', '${password}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });

  console.log("registPost");

  res.redirect("login");
}

//Blog
app.get("/blog", project);
app.post("/blog", postProject);
app.post("/postDelete/:id", deletePost);
app.get("/blogEdit/:id", editPost);
app.post("/blogEdit/:id", editBlogPost);

function home(req, res) {
  res.render("index");
}

async function project(req, res) {
  const query = `SELECT * FROM blogs`;
  const result = await sequelize.query(query, { type: QueryTypes.SELECT });

  // blogs = blogs.map((blog) => {
  //   return{
  //     ...blog,
  //   }
  // })

  res.render("blog", { blogs: result });
}

function contact(req, res) {
  res.render("contactForm");
}

async function blogDetail(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM blogs WHERE id = ${id}`;
  const blog = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("blogDetail", { blog: blog[0] });
}

async function postProject(req, res) {
  const { projectName, projectDesc, image } = req.body;

  // blogs.unshift({
  //   projectName,
  //   projectDesc,
  //   createdAt: new Date(),
  //   image: "../assets/image/yeahBoi.png",
  // });

  const query = `INSERT INTO blogs(name,description,image) VALUES('${projectName}','${projectDesc}','https://i.pinimg.com/564x/4e/84/ed/4e84ed8a05068070277f2705858e8133.jpg')`;

  await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("/blog");
}

async function deletePost(req, res) {
  const { id } = req.params;

  const query = `DELETE FROM blogs WHERE id=${id}`;
  await sequelize.query(query, { type: QueryTypes.DELETE });

  res.redirect("/blog");
}

// edit post

async function editPost(req, res) {
  const { id } = req.params;

  const query = `SELECT * FROM blogs WHERE id=${id}`;
  const blog = await sequelize.query(query, { type: QueryTypes.SELECT });

  res.render("blogEdit", { blog: blog[0] });
}

async function editBlogPost(req, res) {
  const { id } = req.params;

  const { projectName, projectDesc } = req.body;

  const query = `UPDATE blogs SET name='${projectName}',description='${projectDesc}' WHERE id=${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });

  res.redirect("/blog");
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
