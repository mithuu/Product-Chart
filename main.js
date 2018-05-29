var needed__modal = document.querySelectorAll(".material__wrap");
var needed__modal__input = document.querySelectorAll(".material__wrap input");
var modal__open = false;

let tl = new TimelineMax();

// modal click

for (let modal of needed__modal) {
  modal.addEventListener("click", e => {
    if (!modal.classList.contains("active")) {
      var active__submit__button = document.querySelector(
        ".donation .submit__button.active"
      );

      active__submit__button !== null
        ? active__submit__button.classList.remove("active")
        : "";

      var needed__modal__active = document.querySelector(
        ".material__wrap.active"
      );

      needed__modal__active !== null
        ? needed__modal__active.classList.remove("active")
        : "";
      modal.classList.add("active");
    }
  });
}

// listen for input change

for (let input of needed__modal__input) {
  input.addEventListener("keyup", e => {
    var submit__button = input.nextSibling;
    submit__button.nextSibling.classList.add("active");
  });
}

// submit button

var circle = document.querySelector("#circle");
MorphSVGPlugin.convertToPath(circle);

var submit__button__rect = document.querySelectorAll(".submit__button rect")

for(let rect of submit__button__rect) {
  MorphSVGPlugin.convertToPath(rect);
}

var submit__button = document.querySelectorAll(".submit__button");
var submit__button__loader = document.querySelector(".loader");

for (let button of submit__button) {
  button.addEventListener("click", e => {
    if (button.classList.contains("active")) {
      submit__button__loader.classList.add("active");
      let buttonSVG = button.querySelector('#test');
      tl.to(buttonSVG, 0.2, {
        morphSVG: {
          shape: "#circle",
          shapeIndex: 4
        },
        scale: 0.3,
        x: 50,
        ease: Power4.easeOut
      })
    }
  });
}