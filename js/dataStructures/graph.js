// Implement Graph with JS
// Date: 2016-05-03
// Author: Hanks

function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];//用于标记已被访问的顶点
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
}

// 给两个顶点添加边
function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        putstr(i + " -> ");
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined)
                putstr(this.adj[i][j] + ' ');
        }
        print();
    }
}
//深度优先搜索
function dfs(v) {
    var adjV = this.adj[v];
    //将已访问过的顶点标记在marked中
    this.marked[v] = true;
    if (adjV != undefined) { 
        print("Visited vertex: " + v);
    }
    //通过递归，依次搜索每一条路径，直到到达最后一个顶点
    for(var w in adjV){
        if (!this.marked[adjV[w]]) {
            this.dfs(adjV[w]);
        }
    }
}
//广度优先搜索
//使用队列来对待访问过的顶点进行排序
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
        var v = queue.shift(); // 从队首移除
        var adjV = this.adj[v];
        //如果当前顶点存在
        if (adjV != undefined) {
            print("Visited vertex: " + v);
        }
        //将当前顶点的所有未被访问的邻接点依次推入队列
        for(var w in adjV) {
            if (!this.marked[adjV[w]]) {
                this.marked[adjV[w]] = true;
                queue.push(adjV[w]);
            }
        }
    }
}

//test cases
g = new Graph(6);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,5);
g.showGraph();
//g.dfs(0);
g.bfs(0);
