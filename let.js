const arr1 = ["a", "b", "c", "d", "e", "f"];

const numerator = (array) => {
  let res = [];
  for (let i = 1; i < array.length; i++) {
    res.push(`${i} : ${array[i]}`);
  }
  return res;
};

console.log(numerator(arr1));
