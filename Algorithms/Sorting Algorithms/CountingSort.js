const test = async () => {
    const size = Math.floor(Math.random() * 10000),
        array = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 10000)
        );
    const initialArray = [...array];
    console.time('Execution Time: ');
    const sortedArrayWithAlgorithm = await countingSort(array);
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
const countingSort = (array) => {
    let min = Math.min(...array),
        max = Math.max(...array),
        j = 0,
        count = [];
    for (let i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        count[array[i]] += 1;
    }
    for (let i = min; i <= max; i++) {
        while (count[i] > 0) {
            array[j] = i;
            j++;
            count[i]--;
        }
    }
    return array;
};

test();
