// const testimonials = [
//   {
//     image: "../assets/image/pepePunch.png",
//     comment: "APAAN JIR!",
//     author: "pepo",
//     stars: 1,
//   },
//   {
//     image: "../assets/image/pepeCry.png",
//     comment: "mengsedih",
//     author: "jamsut",
//     stars: 2,
//   },
//   {
//     image: "../assets/image/pepeOmg.png",
//     comment: "ok",
//     author: "jay",
//     stars: 3,
//   },
//   {
//     image: "../assets/image/yeahBoi.png",
//     comment: "Not Bad",
//     author: "abhiasta",
//     stars: 4,
//   },
//   {
//     image: "../assets/image/pepeAnger.png",
//     comment: "Kacau!",
//     author: "pepe",
//     stars: 1,
//   },
// ];

// function fetchTestimonials() {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://api.npoint.io/4787c41971671ce47a80", true);

//     xhr.onerror = () => {
//       reject("network error!");
//     };

//     xhr.onload = () => {
//       const parsed = JSON.parse(xhr.response);

//       resolve(parsed);
//     };

//     xhr.send();
//   });
// }

async function getAllTestimonials() {
  try {
    let testimonials = await fetch(
      "https://api.npoint.io/4787c41971671ce47a80"
    );
    testimonials = await testimonials.json();

    const html = testimonials.map((testimonial) => {
      return `<div class="rateBody">
              <div class="rateBox">
              <img class="image" src="${testimonial.image}" >
              <div>
              <p class="comment" >"${testimonial.comment}"</p>
              </div>
              <div>
              <p class="user">- ${testimonial.author}</p>
              </div>
              <div class="rating" >
              <p>${testimonial.stars}</p>
              <i class="fa-solid fa-star"></i>
              </div>
              </div>
            </div>`;
    });

    document.getElementById("testimonials").innerHTML = html.join("");
  } catch (error) {
    console.error(error);
  }
}

async function getTestimonialByRate(stars) {
  try {
    let testimonials = await fetch(
      "https://api.npoint.io/4787c41971671ce47a80"
    );
    testimonials = await testimonials.json();

    const filteredTestimonials = testimonials.filter((testimonial) => {
      return testimonial.stars === stars;
    });

    const html = filteredTestimonials.map((testimonial) => {
      return `<div class="rateBody">
              <div class="rateBox">
              <img class="image" src="${testimonial.image}" >
              <div>
              <p class="comment" >"${testimonial.comment}"</p>
              </div>
              <div>
              <p class="user">- ${testimonial.author}</p>
              </div>
              <div class="rating" >
              <p>${testimonial.stars}</p>
              <i class="fa-solid fa-star"></i>
              </div>
              </div>
            </div>`;
    });

    document.getElementById("testimonials").innerHTML = html.join("");
  } catch (error) {
    console.error(error);
  }
}

getAllTestimonials();
