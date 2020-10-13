const test = async () => {
    const size = Math.floor(Math.random() * 10000),
        array = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 10000)
        );
    const initialArray = [...array];
    console.log('Initial array: ', array);
    console.time('Execution Time: ');
    const sortedArrayWithAlgorithm = await heapSort(array);
    console.timeEnd('Execution Time: ');
    console.log('Initial array: ', initialArray);
    initialArray.sort(function (a, b) {
        return a - b;
    });
    console.log('Sorted Array with Algorithm: ', sortedArrayWithAlgorithm);
    if (
        JSON.stringify(sortedArrayWithAlgorithm) ===
        JSON.stringify(initialArray)
    )
        console.log('Test passed!');
    else console.log('Test failed!');
};
const heapify = (array, length, index) => {
    const left = 2 * index + 1,
        right = 2 * index + 2;
    let highest = index;
    if (left < length && array[left] > array[highest]) highest = left;
    if (right < length && array[right] > array[highest]) highest = right;
    if (highest != index) {
        [array[highest], array[index]] = [array[index], array[highest]];
        heapify(array, length, highest);
    }
};

const heapSort = (array) => {
    const length = array.length;
    for (let i = Math.floor(length / 2); i >= 0; i--) {
        heapify(array, length, i);
    }
    for (let i = length - 1; i >= 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        heapify(array, i, 0);
    }
    return array;
};

test();
