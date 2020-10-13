const test = async () => {
    const size = Math.floor(Math.random() * 10000),
        array = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 10000)
        );

    console.time('Execution Time: ');
    const sortedArrayWithAlgorithm = await radixSort(array);
    console.timeEnd('Execution Time: ');
    console.log('Initial array: ', array);
    array.sort(function (a, b) {
        return a - b;
    });
    console.log('Sorted Array with Algorithm: ', sortedArrayWithAlgorithm);
    if (JSON.stringify(sortedArrayWithAlgorithm) === JSON.stringify(array))
        console.log('Test passed!');
    else console.log('Test failed!');
};

const radixSort = (array) => {
    const max = Math.max(...array) * 10;
    let divisor = 10;
    while (divisor < max) {
        let buckets = [...Array(10)].map(() => []);
        for (let element of array) {
            const index = Math.floor((element % divisor) / (divisor / 10));
            buckets[index].push(element);
        }
        array = buckets.flat();
        divisor *= 10;
    }
    return array;
};

test();
