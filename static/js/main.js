const operations = document.querySelector("#operations");
const inputData = document.querySelector(".input");
const outputData = document.querySelector(".output");

operations.addEventListener("click", (e) => {
  if (e.target.innerText === "this") {
    thisFunction();
  } else if (e.target.innerText === "that") {
    thatFunction();
  }
});

const thisFunction = () => {
  inputData.addEventListener("change", (e) => {
    console.log(`this ${e.target.value}`);
    outputData.innerText = `this ${e.target.value}`;
  });
};

const thatFunction = () => {
  inputData.addEventListener("change", (e) => {
    console.log(`that ${e.target.value}`);
    outputData.innerText = `that ${e.target.value}`;
  });
};

let dark = true;
let light = false;
const darkMode = document.querySelector(".fa-moon");
const lightMode = document.querySelector(".fa-sun");
const bodyElement = document.querySelector('body')

darkMode.addEventListener("click", () => {
  bodyElement.classList.toggle('dark', !light)
  lightMode.classList.toggle("hide", !light);
  darkMode.classList.toggle("hide", !dark);
  dark = !dark;
});

lightMode.addEventListener("click", () => {
  bodyElement.classList.toggle('light', !light)
  lightMode.classList.toggle("hide", !light);
  darkMode.classList.toggle("hide", !dark);
  light = !light;
});
