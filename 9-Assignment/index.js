var validator = require("validator");

const e = "test@test.com";
const f = "abcDE123";

console.log(validator.isEmail(f));
console.log(validator.isEmail(e));
