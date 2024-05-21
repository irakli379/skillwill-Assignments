function addAndMultiply(a, b, ...args) {
  let num = a + b;

  for (const n of args) {
    num *= n;
  }

  return num;
}

function fieldReader({ banks: [, , { address: city }] }) {
  return city;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
