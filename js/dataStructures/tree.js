// Implement BinarySearchTree with JS
// Date: 2016-05-03
// Author: Hanks

// Define the Node object
function Node(data, left, right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

// show the key-value of the node
function show(){
    return this.data;
}

// Define the BST constructor
function BST(){
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.getSize = getSize;
    this.getLeapNodeSize = getLeapNodeSize;
    this.getSides = getSides;
    this.getLevel = getLevel;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
}

function insert(data){
    var node = new Node(data, null, null);
    if(this.root == null){
        this.root = node;
    }else{
        var currNode = this.root;
        while(true){
            if(data < currNode.data){
                if(currNode.left == null){
                    currNode.left = node; //将待插入节点插入到当前节点的左节点
                    break;
                }
                currNode = currNode.left;
            }else{
                if(currNode.right == null){
                    currNode.right = node;
                    break;
                }
                currNode = currNode.right;
            }
        }
    }
}

//中序遍历
function inOrder(node){
    if(node !== null){
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}
//先序遍历
function preOrder(node){
    if(node !== null){
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}
//后序遍历
function postOrder(node){
    if(node !== null){
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

function getMin(){
    var currNode = this.root;
    while(currNode.left !== null){
        currNode = currNode.left;
    }
    return currNode.data;
}

function getMax(){
    var currNode = this.root;
    while(currNode.right !== null){
        currNode = currNode.right;
    }
    return currNode.data;
}
//获得节点个数
//节点个数=左子树节点个数+右子树节点个数+根节点个数
function getSize(node){
    if(node == null){
        return 0;
    } else{
        return getSize(node.left)+getSize(node.right)+1;
    }
}
//获得叶子节点的个数
//没有子节点的节点即为叶子节点
function getLeapNodeSize(node){
    if(node == null){
        return 0;
    } else if(node.left == null && node.right == null){
        return 1;
    } else{
        return getLeapNodeSize(node.left) + getLeapNodeSize(node.right);
    }
}
//获得边长的个数
//边数 = 节点数-1
function getSides(node){
    return getSize(node) - 1;
}
//获得BST的深度
//树的深度为其左/右子树深度的较大值加1
function getLevel(node){
    if(node == null) return 0;
    var ll = getLevel(node.left);
    var rl = getLevel(node.right);
    return ll>=rl ? ll+1: rl+1;
}

//查找给定值
function find(data){
    var currNode = this.root;
    while(currNode !== null){
        if(currNode.data == data){
            return currNode;
        } else if(data < currNode.data){
            currNode = currNode.left;
        } else{
            currNode = currNode.right;
        }
    }
    return null;
}
//获取某个子树的最小值所在的节点
function getSmallest(node) {
    if (node.left == null) {
        return node;
    }else {
        return getSmallest(node.left);
    }
}
//删除给定的节点
function remove(data){
    this.root = removeNode(this.root, data);
}
function removeNode(node, data){
    if(node == null) return null;
    if(data == node.data){
        //没有子节点的节点
        if(node.left == null && node.right == null) return node.right;
        //没有左子节点的节点
        if(node.left == null) return node.right;
        //没有右子节点的节点
        if(node.right == null) return node.left;
        //有两个子节点的节点
        //替换被删除节点的值应为待删除节点的左子树上的最大值
        //或者右子树上的最小值,这里选择后者
        var tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
    }else{
        node.right = removeNode(node.right, data);
        return node;
    }
}

// test cases
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(50);
nums.insert(103);
//print("Inorder traversal: ");
inOrder(nums.root);
print("\n");
//print("Preorder traversal: ");
//preOrder(nums.root);
//print("\n");
//print("Postorder traversal: ");
//postOrder(nums.root);
//print("\n");
//
var size = getSize(nums.root);
print("The nodes number of BST: " + size)
var lsize = getLeapNodeSize(nums.root);
print("The leap nodes number of BST: " + lsize)
var side = getSides(nums.root);
print("The sides number of BST: " + side)
var level = getLevel(nums.root);
print("The level of BST: " + level)
//var min = nums.getMin();
//print("The minimum value of the BST is: " + min);
//var max = nums.getMax();
//print("The maximum value of the BST is: " + max);
//
//putstr("Enter a value to search for: ");
//var value = parseInt(readline());
//var found = nums.find(value);
//if (found != null) {
//print("Found " + value + " in the BST.");
//}
//else {
//print(value + " was not found in the BST.");
//}
//

//putstr("Enter a value to remove: ");
//var value = parseInt(readline());
//nums.remove(value);
//inOrder(nums.root);
//print("\n");
