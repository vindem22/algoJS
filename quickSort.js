function quickSort(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let pivot = array[randomIndex];
  const smaller = array.filter((item) => item < pivot);
  const bigger = array.filter((item) => item > pivot);
  if (array.length < 2) {
    return array;
  }
  return quickSort(smaller).concat(pivot, quickSort(bigger));
}

function randomArray(size) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random(0, size) * i));
  }
  return array;
}

test_array1 = randomArray(30);
test_array2 = randomArray(1000);

console.log(quickSort(test_array2));
