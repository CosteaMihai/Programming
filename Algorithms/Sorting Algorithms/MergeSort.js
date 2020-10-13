const test = async () => {
    const size = Math.floor(Math.random() * 10000),
        array = Array.from({ length: size }, () =>
            Math.floor(Math.random() * 10000)
        );
    const initialArray = [...array];
    console.time('Execution Time: ');
    const sortedArrayWithAlgorithm = await mergeSort(array);
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

const mergeSort = (array) => {
    if (array.length <= 1) return array;
    let mid = Math.ceil(array.length / 2),
        left = mergeSort(array.splice(0, mid)),
        right = mergeSort(array.splice(-mid));
    return merge(left, right);
};

const merge = (arr1, arr2) => {
    let result = [],
        i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};
test();
