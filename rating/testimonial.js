class testimonial {
  constructor(image, comment, author, stars) {
    this.image = image;
    this.comment = comment;
    this.author = author;
    this.stars = stars;
  }

  toHTML() {
    return `<div class="rateBody">
  <div class="rateBox">
    <img class="image" src="${this.image}" >
    <div>
    <p class="comment" >"${this.comment}"</p>
  </div>
<div>
<p class="user">- ${this.author}</p>
</div>
<div class="rating" >
  <p>${this.stars}</p>
  <i class="fa-solid fa-star"></i>
</div>
</div>
</div>`;
  }
}

const testimonial1 = new testimonial(
  "../assets/image/spongebob.png",
  "G Jls!",
  "abhi",
  3
);
const testimonial2 = new testimonial(
  "../assets/image/pepeAnger.png",
  "KACAU!",
  "bibo",
  2
);
const testimonial3 = new testimonial(
  "../assets/image/yeahBoi.png",
  "gokil sih",
  "ipul",
  4
);
const testimonial4 = new testimonial(
  "../assets/image/pepeCry.png",
  "mengsedih",
  "jamsut",
  2
);
const testimonial5 = new testimonial(
  "../assets/image/pepePunch.png",
  "APAAN JIR!",
  "pepe",
  1
);

const testimonials = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];

let html = "";
for (let index = 0; index < testimonials.length; index++) {
  html += testimonials[index].toHTML();
}

document.getElementById("testimonials").innerHTML = html;
