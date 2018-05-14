// Serveral kinds of sort-algorithm
// 2018-05-13

// utils
function swap (array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

function print (string) {
    console.log(string);
}


// 冒泡排序，时间复杂度为O(n^2)，最好为O(n)
function bubbleSort(array) {
    let length = array.length;
    for (let i = length - 1; i >= 2; i--) {
        for (let j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
}

//选择排序，时间复杂度为O(n^2)
function selectionSort(array){
    for(let i = 0; i < array.length - 1; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        if (array[i] !== array[min]) {
            swap(array, i, min);
        }
    }
}

//插入排序，时间复杂度为O(n^2)，最好为O(n)
function insertionSort(array){
    for(let i = 1; i < array.length - 1; i++){
        let temp = array[i];
        let j = i;
        //将比当前元素大的元素向后移一位
        while(j > 0 && (array[j-1] >= temp)){
            array[j] = array[j-1];
            j--;
        }
        //将当前元素插入到移出的空位
        array[j] = temp;
    }
}

// 希尔排序，时间复杂度为O(nlogn)，最好为O(n)
// 希尔排序基于插入排序，通过使用不同的间隔来提高效率
// 希尔排序的关键在于gap序列的选择：https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F
function shellSort(array){
    const length = array.length;
    let gap = Math.floor(length / 2);
    for(gap; gap > 0; gap = Math.floor(gap / 2)) {
        // 从数组第gap个元素开始分组比较
        for(let i = gap; i < length; i++) {
            let temp = array[i];
            let k = i - gap;
            // 每个元素与自己组内的数据进行插入排序
            while(k >= 0 && array[k] > temp) {
                array[k + gap] = array[k];
                k -= gap;
            }
            array[k + gap] = temp;
        }
    }
}

// 归并排序
// to be done

// 快速排序，时间复杂度为O(nlogn)
function quickSort(array){
    if (array.length == 0) {
        return [];
    }
    var left = [],
        right = [],
        pivot = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

// 快速排序，原地分区版本
function qSort(array) {
    function partition(array, left, right) {
        // index代表下一个可能要交换的位置
        let index = left;
        // 选择最右边的元素为基准元素
        let pivot = array[right];
        for (let i = left; i < right; i++) {
            if (array[i] < pivot) {
                index !== i && swap(array, index, i);
                // 交换位置后，index加1，代表下一个可能要交换的位置
                index++;
            }
        }
        // 将基准元素放置到最后的正确位置上
        swap(array, right, index);
        return index;
    }

    function sort(array, left, right) {
        if (left > right) {
            return;
        }

        let index = partition(array, left, right);
        sort(array, left, index - 1);
        sort(array, index - 1, right);
    }

    sort(array, 0, array.length - 1);
    return array;
}

const SIZE = 10000;
let mynums = (new Array(SIZE)).fill(0).map(() => {
    return Math.floor((Math.random()) * SIZE);
});

// Test cases for basic sorting algorithm
let array1 = [...mynums];
let start = new Date().getTime();
bubbleSort(array1);
let stop = new Date().getTime();
print("Sorted by bubble algorithm:");
print("Time used: " + (stop - start));

let array2 = [...mynums];
start = new Date().getTime();
selectionSort(array2);
stop = new Date().getTime();
print("Sorted by selection algorithm:");
print("Time used: " + (stop - start));

let array3 = [...mynums];
start = new Date().getTime();
insertionSort(array3);
stop = new Date().getTime();
time = stop - start;
print("Sorted by insertion algorithm:");
print("Time used: " + (stop - start));

let array4 = [...mynums];
start = new Date().getTime()
shellSort(array4);
stop = new Date().getTime();
time = stop - start;
print("Sorted by shellSort algorithm:");
print("Time used: " + (stop - start));

// start = new Date().getTime()
// var res = quickSort(nums2);
// stop = new Date().getTime();
// time = stop - start;
// print("Sorted by quickSort algorithm:");
// print("Time used: " + time)
//print(res);
