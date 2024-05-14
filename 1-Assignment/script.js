function equality(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

function toCelcius(temp) {
  if (typeof temp !== "number") {
    return false;
  } else {
    return ((temp - 32) * 5) / 9;
  }
}

function calculation(a, b, oper) {
  if (typeof a !== "number" || typeof b !== "number") {
    return false;
  } else if (oper === "+") {
    return a + b;
  } else if (oper === "-") {
    return a - b;
  } else if (oper === "*") {
    return a * b;
  } else if (oper === "/") {
    return a / b;
  }
}
