import "./index.css";
const container = document.querySelector(".container");

const html = `<div class="main">
<h1 class="head">This is weppack</h1>
<p>this is use to bunddel the code in our project</p>
</div>`;

container.insertAdjacentHTML("beforeend", html);
