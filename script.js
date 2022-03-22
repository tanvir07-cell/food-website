const icons = document.querySelectorAll(".section-1__icons i");

let count = 1;

setInterval(() => {
  count++;
  const firstIcon = document.querySelector(".show");

  firstIcon.classList.remove("show");

  //   count er man jodi amar icons er nodelist theke boro

  if (count > icons.length) {
    icons[0].classList.add("show");
    i = 1;
  } else {
    firstIcon.nextElementSibling.classList.add("show");
  }
}, 3000);
