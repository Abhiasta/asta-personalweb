const blogs = [];

function addblog(event) {
  event.preventDefault();

  const inputprojectname = document.getElementById("project-name").value;
  const inputdescription = document.getElementById("desc").value;
  const inputimage = document.getElementById("blogimage").files;

  const image = URL.createObjectURL(inputimage[0]);

  const blog = {
    title: inputprojectname,
    description: inputdescription,
    createdAt: new Date(),
    image: image,
  };

  blogs.unshift(blog);
  renderblog();
  console.log(blogs);
}
function renderblog() {
  let html = ``;

  for (let index = 0; index < blogs.length; index++) {
    html += `
<div class="bloglist" >
    <div>
    <img class="blog-image" src="${blogs[index].image}" />
  </div>
  <div class="blog-content">
    <h1 class="blogtitle">
      <a href="blog-detail.html" target="_blank"
      >${blogs[index].title}</a>
    </h1>
    <div class="detail-blog-content">
      <div class="author">${blogs[index].createdAt} | Abhiasta Gustyanugra</div>
    </div>
    <p>
    ${blogs[index].description}
    </p>
    <p>

    </p>
    <div class="btn-group">
      <button class="btnedit">Edit Post</button>
      <button class="btndelete" onclick="deleteblog(${index})" >Delete Post</button>
    </div>
  </div>
</div>`;
  }
  document.getElementById("content").innerHTML = html;
}
function deleteblog(index) {
  blogs.splice(index, 1);
  renderblog();
}
// /* <img src="${blogs[index].image}" alt="" /> */
// >${blogs[index].title}</a
// ${getFullTime(blogs[index].createdAt)}
// ${blogs[index].content}
