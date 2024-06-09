function expo(num, pow, callback) {
  let times = num;

  for (let i = 1; i < pow; i++) {
    times = num * callback(times);
  }

  return times;
}

expo(2, 4, (n) => n);

const cont = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  posts();
});

async function posts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  data.map((cur, i) => {
    const cn = document.createElement("div");
    const title = document.createElement("h3");
    const bd = document.createElement("p");
    const ancon = document.createElement("div");
    const user = document.createElement("p");
    const id = document.createElement("p");

    ancon.style.cssText = "display: flex; justify-content: space-between;";
    user.textContent = `User: ${cur.userId}`;
    id.textContent = `Post number: ${cur.id}`;
    bd.textContent = cur.body;
    cn.style.cssText =
      "height: 17rem; width:17rem;background-color:rgb(151, 211, 229);border-radius:3rem;padding:1.5rem; display: flex; flex-direction: column;justify-content: space-between;";
    title.textContent = cur.title;
    cont.appendChild(cn);
    cn.appendChild(title);
    cn.appendChild(bd);
    cn.appendChild(ancon);
    ancon.append(user, id);
  });

  return data;
}

async function deepCopy(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject(new Error("Argument is not an object"));
    } else {
      const copy = (item) => {
        if (item === null || typeof item !== "object") {
          return item;
        }
        if (Array.isArray(item)) {
          return item.map(copy);
        }
        const result = {};
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            result[key] = copy(item[key]);
          }
        }
        return result;
      };

      resolve(copy(obj));
    }
  });
}
