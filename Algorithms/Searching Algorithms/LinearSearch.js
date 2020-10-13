const linearSearch = (array, numberToSearch) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numberToSearch) {
            return i;
        }
    }
    return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(linearSearch(array, 11));
