//define the List datastructure.
//last-modified: 2016-4-24
//Author: Hanks

function List(){
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // use a array to save data.
}
List.prototype = {
    //给列表添加元素
    append: function(element){
        this.dataStore[this.listSize++] = element;
    },
    //查找元素
    find: function(element){
        return this.dataStore.indexOf(element);
    },
    //从列表中删除元素
    remove: function(element){
        var index = this.find(element);
        if(index > -1){
            this.dataStore.splice(index, 1);
            this.listSize--;
            return true;
        }
        return false;
    },
    //获取列表长度
    length: function(){
        return this.listSize;
    },
    //显示列表中的元素
    toString: function(){
        return this.dataStore;
    },
    //在给定元素后面插入新元素
    insert: function(element, after){
        var index = this.find(after);
        if(index > -1){
            this.dataStore.splice(index+1, 0, element);
            this.listSize++;
            return true;
        }
        return false;
    },
    //清除列表中的所有元素
    clear: function(){
        delete this.dataStore;
        this.dataStore = [];
        this.pos = this.listSize = 0;
    },
    //判断某元素是否在列表中
    contains: function(element){
        if(this.find(element) > -1) return true;
        return false;
    },
    //遍历列表的相关方法
    front: function(){
        this.pos = 0;
    },
    end: function(){
        this.pos = this.listSize-1;
    },
    prev: function(){
        if(this.pos>0) this.pos--;
    },
    next: function(){
        if(this.pos<this.listSize) this.pos++;
    },
    currPos: function(){
        return this.pos;
    },
    moveTo: function(position){
        if(position>=0 && position<this.listSize){
            this.pos = position;
            return this.dataStore[this.pos];
        }
        return false;
    },
    getElement: function(){
        return this.dataStore[this.pos];
    }
}
/*
//test case
var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
print(names.moveTo(2));
print(names.toString());
names.remove("Raymond");
print(names.toString());
*/

