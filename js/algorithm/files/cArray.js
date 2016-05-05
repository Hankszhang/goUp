//创建一个数组类，并风转一些常规的数组操作函数，以便操作数组
function CArray(numElements) {
    this.data = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (var i = 0; i < numElements; ++i) {
        this.data[i] = i;
    }
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.data[i] = Math.floor(Math.random() * (this.numElements+1));
    }
}

function clear() {
    for (var i = 0; i < this.data.length; ++i) {
        this.data[i] = 0;
    }
}

function insert(element) {
    this.data[this.pos++] = element;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.data.length; ++i) {
        retstr += this.data[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
