//define the Stack datastructure.
//last-modified: 2016-4-25
//Author: Hanks

function Stack(){
    this.data = []; // Save the data
    this.top = 0; //save the position of the top of Stack
    this.push = push;
    this.pop = pop;
    this.peek = peek; 
    this.clear = clear;
    this.getLength = getLength;
}

function push(element){
    this.data[this.top++] = element;
}
function pop(){
    return this.data[--this.top];
}
function peek(){
    return this.data[this.top-1];
}
function clear(){
    this.top = 0;
}
function getLength(){
    return this.top;
}

// Test Case
//var s = new Stack();
//s.push("David");
//s.push("Hanks");
//s.push("Wade");
//print("length:"+s.getLength());
//print(s.peek());
//print("The popped element is:"+ s.pop());
//print(s.peek());
//s.push("Cynthia");
//print(s.peek());
//s.clear();
//print("length: " + s.getLength());
//print(s.peek());
//s.push("Clayton");
//print(s.peek());
