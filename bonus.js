const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [5, 6, 7];

const FilterArray = array1.filter((data) => {
  return array2.includes(data);
});

console.log(FilterArray);

// node question1.js
