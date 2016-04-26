// Use js to implement the linkedList
// Last-modified: 2016-4-26
// Author: Hanks

// Indicate the node of linkedList
function Node(element){
    this.element = element;
    this.next = null;
}

function LinkedList(){
    this.head = new Node("head");
    this.find = find;
    this.findPrevious = findPrevious;
    this.insertAfter = insertAfter;
    this.remove = remove;
    this.display = display;
}

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insertAfter(item, newElement){
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

function display(){
    var currNode = this.head;
    while(currNode.next !== null){
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

//找到待删除节点的上一个节点
function findPrevious(item){
    var currNode = this.head;
    while(currNode !== null && currNode.next.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var prevNode = this.findPrevious(item);
    //将带删除元素的next指向呆删除元素的下一个元素
    prevNode.next = prevNode.next.next;    
}

// Test Case
var cities = new LinkedList();
cities.insertAfter("head", "Conway");
cities.insertAfter("Conway", "Russellville");
cities.insertAfter("Russellville", "Carlisle");
cities.insertAfter("Carlisle", "Alma");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
