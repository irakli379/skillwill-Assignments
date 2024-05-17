const data = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

function yangest(arr) {
  let ageYoung = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]["age"] < ageYoung["age"]) ageYoung = arr[i];
  }
  return ageYoung["name"];
}

function newObject(obj) {
  return { ...obj };
}

function game() {
  let tryA = 0;
  let tryB = 0;

  function rand() {
    return Math.floor(Math.random() * 3 + 1);
  }

  let numA = 0;
  let numB = 0;

  while (numA !== 3) {
    tryA++;
    numA = rand();
  }

  while (numB !== 3) {
    tryB++;
    numB = rand();
  }

  return tryA < tryB
    ? "a is the winner"
    : tryA === tryB
    ? "It's' a draw"
    : "b is the winner";
}
