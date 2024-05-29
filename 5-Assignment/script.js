const parentNode = document.querySelector(".container1");
const div1 = document.createElement("div");
const button1 = document.createElement("button");

div1.setAttribute("id", "gaius");
div1.textContent = `Gaius Marius`;
div1.style.fontSize = "3.5rem";
div1.style.color = "red";

button1.textContent = "Hide Gaius";
button1.style.cssText =
  "background: black; color: white; font-size: 2.5rem; margin-top: 30px; border-radius: 3rem;";

parentNode.appendChild(div1);
parentNode.appendChild(button1);

button1.addEventListener("click", () => {
  Array.from(parentNode.childNodes).includes(div1)
    ? div1.remove()
    : parentNode.insertBefore(div1, button1);
});

const parentNode2 = document.querySelector(".container2");
const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const a = document.createElement("a");

h2.textContent = "Gandalf";
a.textContent = "Go to profile";
a.setAttribute("href", "#");
div2.setAttribute("id", "card");
parentNode2.append(div2);
div2.append(h2, a);

const quiz = document.querySelector(".quiz");
const sc = document.querySelector(".score");
const question1 = document.createElement("div");
const question2 = document.createElement("div");
const question3 = document.createElement("div");
const answers = document.querySelectorAll("h4");

let score = 0;

function right(el) {
  el.style.cssText = "background: green; color: white;";
  ++score;
  sc.textContent = score;
}

function wrong(el) {
  el.style.cssText = "background: red; color: white;";
}

const arr = Array.from(answers);

arr.map((cur, i, list) => {
  if (cur.classList.value === "right") {
    cur.addEventListener("click", () => right(cur));
  }
  if (cur.classList.value === "wrong") {
    cur.addEventListener("click", () => wrong(cur));
  }
});
