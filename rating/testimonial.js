const testimonials = [
  {
    image: "../assets/image/pepePunch.png",
    comment: "APAAN JIR!",
    author: "pepe",
    stars: 1,
  },
  {
    image: "../assets/image/pepeCry.png",
    comment: "mengsedih",
    author: "jamsut",
    stars: 2,
  },
];

function getAllTestimonials() {
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
}

function getTestimonialByRate(stars) {
  const filteredTestimonials = testimonials.filter((testimonial) => {
    return testimonial.stars === stars;
  });

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
}

getAllTestimonials();
