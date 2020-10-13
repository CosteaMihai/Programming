const test = async () => {
    const size = Math.floor(Math.random() * 50),
        array = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 20)
        );
    const initialArray = [...array];
    console.time('Execution Time: ');
    const sortedArrayWithAlgorithm = await bucketSort(array, 0.8);
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

//#region QuickSort
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
//#endregion QuickSort

const bucketSort = (array, bucketSize) => {
    if (array.length <= 1) return array;
    const sortedArray = [],
        buckets = createBuckets(array, bucketSize);
    buckets.forEach((bucket) => {
        if (!bucket.length) return;
        let sorted = quickSort(bucket, 0, bucket.length - 1);
        sortedArray.push(...sorted);
    });
    return sortedArray;
};

const createBuckets = (array, bucketSize) => {
    const min = Math.min(...array),
        max = Math.max(...array),
        bucketCount = Math.floor((max - min) / bucketSize) + 1,
        buckets = [];
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = [];
    }
    array.forEach((number) => {
        const bucketIndex = Math.floor((number - min) / bucketSize);
        buckets[bucketIndex].push(number);
    });
    return buckets;
};
test();
