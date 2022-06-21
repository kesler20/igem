const operations = document.querySelector("#operations");
const inputData = document.querySelector(".input");
const outputData = document.querySelector(".output");
const logo = document.querySelector(".logo");
const bodyElement = document.querySelector("body");

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

let darkBg = true;

logo.addEventListener("click", () => {
  bodyElement.classList.toggle("dark", !darkBg);
  darkBg = !darkBg
});
