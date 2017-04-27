
let mazeData = [
    [1, 0, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 1]
];

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


for (let i = mazeData.length - 1; i >= 0; i--) {
    for (let j = mazeData[i].length - 1; j >= 0; j--) {

        let node = mazeData[i][j]// 遍历每个节点
        let queue = []; // 辅助队列

        if (!node.isVisited) {

            node.isVisited = true;
            queue.unshift(node); // 入队

            while (queue.length) { // 队列非空

                let u = queue.shift(); // 队首元素 出队
                // console.log(u);

                u.neighbor = [];

                if (mazeData[i - 1] && mazeData[i - 1][j].value) {// 上
                    u.neighbor.push(mazeData[i - 1][j]);
                }

                if (mazeData[i + 1] && mazeData[i + 1][j].value) {// 下
                    u.neighbor.push(mazeData[i + 1][j]);
                }

                if (mazeData[i][j - 1] && mazeData[i][j - 1].value) {// 左
                    u.neighbor.push(mazeData[i][j - 1]);
                }

                if (mazeData[i][j + 1] && mazeData[i][j + 1].value) {// 右
                    u.neighbor.push(mazeData[i][j + 1]);
                }

                for (neighborNode of u.neighbor) {
                    if (!neighborNode.isVisited) {
                        neighborNode.isVisited = true;
                        // console.log(neighborNode);
                        res.push({
                            x: neighborNode.x,
                            y: neighborNode.y

                        })
                        queue.unshift(neighborNode);
                    }
                }
            }
        }

    }

}


console.log(res);
