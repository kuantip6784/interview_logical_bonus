let input = 123743;
function validate(input) {
  const inputSplit3 = String(input).match(/.{1,3}/g) || [];
  const validatePattenArray = [
    "021",
    "123",
    "234",
    "345",
    "456",
    "567",
    "678",
    "789",
    "978",
    "876",
    "765",
    "654",
    "543",
    "432",
    "321",
    "210",
  ];
  const validatePattenArrayLength = validatePattenArray.length;
  for (let index = 0; index < validatePattenArrayLength; index++) {
    if (inputSplit3.includes(validatePattenArray[index])) {
      return false;
    }
  }
  return true;
}

const validateResult = validate(input);
console.log(validateResult);

// node question1.js
