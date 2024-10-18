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
      html += `<div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[index].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post" onclick="deleteBlog(${index})">Delete Post</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[index].title}</a
              >
            </h1>
            <div class="detail-blog-content">
                ${getFullTime(blogs[index].createdAt)} | Ichsan Emrald Alamsyah
            </div>
            <p>
              ${blogs[index].content}
            </p>
            <p>
                ${getDistanceTime(blogs[index].createdAt)}
            </p>
          </div>
        </div>`;
    }
    document.getElementById("content").innerHTML = html;
  }

  console.log(blogs);
}
