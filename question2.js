let input = 112762;
function validate(input) {
  const inputSplit2 = String(input).match(/.{1,2}/g) || [];
  const validatePattenRepeatNumber = [
    "00",
    "11",
    "22",
    "33",
    "44",
    "55",
    "66",
    "77",
    "88",
    "99",
    "00",
  ];
  const filterInput = inputSplit2.filter((data) => {
    return validatePattenRepeatNumber.includes(data);
  });
  if (filterInput.length >= 2) {
    return false;
  }
  return true;
}

const validateResult = validate(input);
console.log(validateResult);

// node question1.js
