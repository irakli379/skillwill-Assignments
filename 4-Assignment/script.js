function replace(str, val, repl) {
  if (
    typeof str !== "string" ||
    typeof val !== "string" ||
    typeof repl !== "string"
  )
    return "invalid argument";

  const arr = str.split(`${val}`);
  return arr
    .map((cur, i, array) => {
      if (i === array.length - 1 && cur !== "") return cur;
      return cur + repl;
    })
    .join("");
}

function capitalise(str) {
  if (typeof str !== "string") "inputed value is not a String";
  return str
    .split(" ")
    .map((cur) => cur[0].toUpperCase() + cur.slice(1))
    .join(" ");
}

function sortAges(arr) {
  const ages = arr.map((cur) => cur.age).sort();
  const s = [];
  for (let i = 0; i < ages.length; i++) {
    for (let p = 0; p < arr.length; p++) {
      if (ages[i] === arr[p].age) s.push(arr[p]);
    }
  }
  return s;
}
