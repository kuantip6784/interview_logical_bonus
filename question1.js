let input = 1;
function validate(input) {
  if (typeof input !== "number") {
    return false;
  }

  if (String(input).length < 6) {
    return false;
  }

  return true;
}

const validateResult = validate(input);
console.log(validateResult);

// node question1.js
