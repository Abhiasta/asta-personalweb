const blogs = [];

function addblog(event) {
  event.preventDefault();

  const inputprojectname = document.getElementById("project-name").value;
  const inputdescription = document.getElementById("desc").value;
  //   const inputimage = document.getElementById("blogimage").value

  //   const image = URL.createObjectURL(blogimage[0]);

  const blog = {
    title: inputprojectname,
    description: inputdescription,
    //   createdAt: new Date()
    //   image: image,
  };

  blogs.push(blog);
  renderblog();

  function renderblog() {
    let html = "";

    for (let index = 0; index < blogs.lengt; index++) {
      html += `<div>
            <img class="blog-image" src="${blogs[index].image}" />
          </div>
          <div class="blog-content">
            <h1 class="blogtitle">
              <a href="blog-detail.html" target="_blank"
              >${blogs[index].title}</a>
            </h1>
            <div class="detail-blog-content">
              <div class="author">12 Jul 2021 22:30 WIB | Abhiasta Gustyanugra</div>
            </div>
            <p>
            ${blogs[index].description}
            </p>
            <p>
              
            </p>
            <div class="btn-group">
              <button class="btnedit">Edit Post</button>
              <button class="btndelete">Delete Post</button>
            </div>`;
    }
    document.getElementById("content").innerHTML = html;
  }
  // /* <img src="${blogs[index].image}" alt="" /> */
  // >${blogs[index].title}</a
  // ${getFullTime(blogs[index].createdAt)}
  // ${blogs[index].content}
  console.log(blogs);
}
