const plusIcon = document.querySelectorAll(".plus");
const minIcon = document.querySelectorAll(".min");
const acc = document.querySelectorAll("h3");
const answear = document.querySelectorAll(".accordion__answer");

for (let i = 0; i < plusIcon.length; i++) {
  plusIcon[i].addEventListener("click", function () {
    plusIcon[i].classList.toggle("hide");
    minIcon[i].classList.toggle("hide");
    answear[i].classList.toggle("hide");
  });
}

for (let i = 0; i < minIcon.length; i++) {
  minIcon[i].addEventListener("click", function () {
    plusIcon[i].classList.toggle("hide");
    minIcon[i].classList.toggle("hide");
    answear[i].classList.toggle("hide");
  });
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    answear[i].classList.toggle("hide");
    plusIcon[i].classList.toggle("hide");
    minIcon[i].classList.toggle("hide");
  });
}
