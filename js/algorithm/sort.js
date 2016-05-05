// Serveral kinds of sort-algorithm
// 2016-05-05

load('files/cArray.js')
// 冒泡排序
function bubbleSort(array){
    var count = 0;
    var numElements = array.length;
    for(var i=numElements-1; i>=2; i--){
        for(var j=0; j<=i; j++){
            if(array[j]>array[j+1]){
                swap(array, j, j+1);
            }
        }
        //count++;
        //print("Step " + count + ": " + array);
    }
}

//选择排序
function selectionSort(array){
    var count = 0;
    for(var i=0; i<array.length-1; i++){
        var min = i;
        for(var j=i+1; j<array.length; j++){
            if(array[j] < array[min]){
                min = j;
            }
        }
        swap(array, i, min);
        //count++;
        //print("Step " + count + ": " + array);
    }
}

//插入排序
function insertionSort(array){
    var count = 0;
    for(var outer=1; outer<array.length-1; outer++){
        var temp = array[outer];
        var inner = outer;
        //将比当前元素大元素向后移一位
        while(inner>0 && (array[inner-1]>=temp)){
            array[inner] = array[inner-1];
            inner--;
        }
        //将当前元素插入到移出的空位
        array[inner] = temp;
        //count++;
        //print("Step " + count + ": " + array);
    }
}

// Test cases
/*var numElements = 100000;
var mynums = new CArray(numElements);
mynums.setData();
//print("Original array: " + mynums.toString());
var nums1 = [],
    nums2 = [];
for(var i=0; i<mynums.data.length; i++){
    nums1[i] = mynums.data[i];
}
for(var j=0; j<mynums.data.length; j++){
    nums2[j] = mynums.data[j];
}
var start = new Date().getTime();
bubbleSort(mynums.data);
var stop = new Date().getTime();
var time = stop - start;
print("Sorted by bubble algorithm:");
print("Time used: " + time)
//print(mynums.toString());
start = new Date().getTime();
selectionSort(nums1);
var stop = new Date().getTime();
var time = stop - start;
print("Sorted by selection algorithm:");
print("Time used: " + time)
//print(mynums.toString());
start = new Date().getTime();
insertionSort(nums2);
stop = new Date().getTime();
time = stop - start;
print("Sorted by insertion algorithm:");
print("Time used: " + time)
//print(mynums.toString());*/
