const test = async () => {
    const size = Math.floor(Math.random() * 10000),
        array = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 10000)
        );
    const initialArray = [...array];

    console.time('Execution Time: ');
    const sortedArrayWithAlgorithm = await quickSort(
        array,
        0,
        array.length - 1
    );
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

const quickSort = (array, firstIndex, lastIndex) => {
    if (array.length <= 1) return array;
    if (firstIndex < lastIndex) {
        let pivotIndex = partition(array, firstIndex, lastIndex);
        quickSort(array, firstIndex, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, lastIndex);
        return array;
    }
};
const partition = (array, firstIndex, lastIndex) => {
    let pivot = array[lastIndex];
    iterator = firstIndex - 1;
    for (j = firstIndex; j <= lastIndex - 1; j++) {
        if (array[j] < pivot) {
            iterator++;
            if (iterator != j) {
                [array[iterator], array[j]] = [array[j], array[iterator]];
            }
        }
    }
    [array[iterator + 1], array[lastIndex]] = [
        array[lastIndex],
        array[iterator + 1],
    ];
    return iterator + 1;
};

test();
