// პირველი დავალება
// create button to open modal window
const button = document.createElement("button");

button.setAttribute("class", "open-modal");
button.textContent = "გახსენით მოდალი";
button.style.cssText =
  "border-radius: 1rem; color: white; background-color: red; padding: 2rem; font-size: 1.5rem";

document.querySelector(".cont").appendChild(button);

// create content for modal window
const div = document.createElement("div");
const div1 = document.createElement("div");
const close = document.createElement("span");
const modalText = document.createElement("p");

div.setAttribute("class", "modal-container");
div.style.cssText =
  "display: none; position: fixed; z-index: 1; left: 0; top: 0; overflow: auto; height: 100%;" +
  "width: 100%; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);";
div1.style.cssText =
  " background-color: #fefefe; margin: 15% auto; paddin: 20px; border: 1px solid #888; width: 80%;" +
  "display: flex; flex-direction: column; justify-content: center";
close.textContent = "X";
close.setAttribute("class", "close");
close.style.cssText = "align-self: flex-end; padding: 0.5rem;";
modalText.textContent = "აირჩიეთ ფერი";
modalText.style.cssText = "align-self: center";

document.querySelector(".cont").appendChild(div);
div.appendChild(div1);
div1.append(close, modalText);

close.addEventListener("click", function () {
  div.style.display = "none";
});

button.addEventListener("click", function () {
  div.style.display = "block";
});

// მეორე დავალება
//add input for choosing color
const colorDiv = document.createElement("div");
const colorBtn = document.createElement("button");
const input = document.createElement("input");

colorDiv.style.cssText =
  "gap: 1rem; display:flex;  justify-content: center; margin-bottom: 1.5rem";
colorBtn.textContent = "შეცვალე ფერი";

div1.appendChild(colorDiv);
colorDiv.append(input, colorBtn);

colorBtn.addEventListener("click", () => {
  const val = input.value.toLocaleLowerCase();
  if (val === "") return;
  if (
    val !== "red" &&
    val !== "blue" &&
    val !== "green" &&
    val !== "black" &&
    val !== "white"
  ) {
    alert("აირჩიეთ შემდეგი ფერებიდან: red, blue, green, black, white");
  }

  document.querySelector("body").style.backgroundColor = input.value;
});

// მესამე დავალება
// calculate average of user input numbers
const div2 = document.createElement("div");
const numInput = document.createElement("input");
const avrBtn = document.createElement("button");
const txt = document.createElement("h3");
const dispSum = document.createElement("h2");

avrBtn.textContent = "გამოთვალე საშუალო";
txt.textContent = "ჩაწერეთ ციფრები და დააშორეთ : სიმბოლოს გამოყენებით";

document.querySelector(".cont").append(txt, div2, dispSum);
div2.append(numInput, avrBtn);

function calcSum(inp) {
  const arr = inp.split(":");
  const sum = arr.reduce((inite, cur) => inite + Number(cur), 0);
  if (arr.some((cur) => isNaN(Number(cur)))) {
    alert("შეიყვანეთ მხოლოდ ციფრები");
    return;
  }
  return sum / arr.length;
}

avrBtn.addEventListener("click", () => {
  const result = calcSum(numInput.value);
  if (result === undefined) return;
  dispSum.textContent = Math.floor(result);
});
