import "./index.css";
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const note = document.querySelector(".note").value;
  const html = `
    <h1 class="head">${note}</h1>
    `;
  container.insertAdjacentHTML("beforeend", html);
});
