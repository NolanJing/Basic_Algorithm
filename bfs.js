function bfs(maze) {
    let mazeData = maze;
    for (let i = mazeData.length - 1; i >= 0; i--) {
        for (let j = mazeData[i].length - 1; j >= 0; j--) {
            mazeData[i][j] = {
                value: mazeData[i][j],
                isVisited: false,
                x: i,
                y: j
            }
        }
    }


    let res = [];

    let node = mazeData[mazeData.length - 1][mazeData.length - 1]// 遍历每个节点

    while (node) {
        // console(a)
        let queue = []; // 辅助队列

        if (!node.isVisited) {
            node.isVisited = true;
            // console.log(node)
            queue.unshift(node); // 入队
            while (queue.length) { // 队列非空
                // console.log(queue.length);
                let u = queue.shift(); // 队首元素 出队
                // console.log(u);
                u.neighbor = [];
                if (mazeData[node.x - 1] && mazeData[node.x - 1][node.y].value) {// 上
                    if (!mazeData[node.x - 1][node.y].isVisited)
                        u.neighbor.push(mazeData[node.x - 1][node.y]);
                }
                if (mazeData[node.x][node.y + 1] && mazeData[node.x][node.y + 1].value) {// 右
                    if (!mazeData[node.x][node.y + 1].isVisited)
                        u.neighbor.push(mazeData[node.x][node.y + 1]);
                }
                if (mazeData[node.x + 1] && mazeData[node.x + 1][node.y].value) {// 下
                    if (!mazeData[node.x + 1][node.y].isVisited)
                        u.neighbor.push(mazeData[node.x + 1][node.y]);
                }
                if (mazeData[node.x][node.y - 1] && mazeData[node.x][node.y - 1].value) {// 左
                    if (!mazeData[node.x][node.y - 1].isVisited)
                        u.neighbor.push(mazeData[node.x][node.y - 1]);
                }

                // console.log(u.neighbor);
                // 遍历邻居节点
                for (neighborNode of u.neighbor) {
                    if (!neighborNode.isVisited) {
                        neighborNode.isVisited = true;

                        /*res.push({
                         row: node.x,
                         col: node.y,
                         x: neighborNode.x,
                         y: neighborNode.y

                         });*/
                        // neighborNode.pre = u;
                        queue.push(neighborNode);
                    }
                }// for 遍历邻居节点

                node = queue[0];
                res.push(node);
                // console.log(node);
            }// while
        }// visited
    }

    // return res
    let pathTree = res[0];

    let endNode = printPathTree(pathTree);

    // console.log(endNode)

    let pathArray = [];
    while (endNode) {
        pathArray.push([endNode.x, endNode.y])
        endNode = endNode.pre;
    }

    // console.log(pathArray)
    pathArray.push([maze.length-1, maze.length-1]);
    return pathArray;
}






// console.log(pathTree);
// console.log(JSON.stringify(pathTree));


// 打印出所有路径树
function printPathTree(pathTree) {
    res = [];
    // console.info('x')
    function getChild(node) {
        // console.info(node)
        // console.info('x')
        if (node.x == 0 && node.y == 0) {
            res = node;
            // return res;
            // console.info(node)
        } else {
            node.neighbor.forEach(neighbor => {
                neighbor.pre = node;
                getChild(neighbor);
            })
        }// if
    }// getChild

    //
    getChild(pathTree);

    return res;

}



// console.log(pathArray)