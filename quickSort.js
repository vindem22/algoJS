function quickSort(array) {
	let randIndex = Math.floor(Math.random(0,array.length));
	let pivot = array[randIndex]

	const less = array.filter(item => item < pivot);
	const more = array.filter(item => item > pivot);

	if(array.length < 2) {
		return array;
	}

	return quickSort(less).concat(pivot,quickSort(more));
}

console.log(quickSort([23,4,56,8,89,5,32,1]));
