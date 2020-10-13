const binarySearch = (array, searchingElement, low, high) => {
    if (low > high) return false;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (array[mid] === searchingElement) return mid;
        else if (array[mid] < searchingElement) low = mid + 1;
        else if (array[mid] > searchingElement) high = mid - 1;
    }
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(binarySearch(array, 11, 0, array.length - 1));
