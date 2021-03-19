export const randomElementOfArray = (array) => {
	console.log(array);
	return array[Math.floor(Math.random() * array.length)];
};
