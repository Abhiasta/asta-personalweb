const express = require("express");
const app = express();
const port = 1515;

app.set("view engine", "hbs");

app.use("/assets/css", express.static("assets/css"));
app.use("/assets/js", express.static("assets/js"));
app.use("/assets/image", express.static("assets/image"));
app.use("/views", express.static("views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", home);
app.get("/project", project);
app.get("/testimonial", testimonial);
app.get("/contact", contact);
app.get("/project-detail/:id", blogDetail);

app.post("/add-project", projectPost);
function home(req, res) {
  res.render("index");
}

function project(req, res) {
  res.render("add-project");
}

function testimonial(req, res) {
  res.render("testimonial");
}
function contact(req, res) {
  res.render("contact");
}

function blogPost(req, res) {
  const { title, content } = req.body;

  console.log("Title : ", title);
  console.log("Content : ", content);

  res.json(req.body);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
