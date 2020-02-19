const nodes = {
    0: {
        children: [{
            flag: 0,
            node: 1,
        }, {
            flag: 1,
            node: 2,
        }],
        name: 0
    },
    1: {
        name: 1
    },
    2: {
        children: [{
            flag: 0,
            node: 3,
        }, {
            flag: 1,
            node: 4,
        }],
        name: 2
    },
    3: {
        children: [{
            flag: 0,
            node: 5,
        }, {
            flag: 1,
            node: 6,
        }],
        name: 3
    },
    4: {
        name: 4
    },
    5: {
        name: 5
    },
    6: {
        name: 6
    },
}

// console.log(nodes)

// 递归深度遍历
function deepTraversal(node) {
    if (!node) return;
    console.log(node.name);
    if (node.children) {
        for (let childPoint of node.children) {
            deepTraversal(nodes[childPoint.node]);
        }
    }
}

// 栈
// 非递归深度遍历
function deepTraversal2(node) {
    if (!node) return;
    const list = [{node:0}];
    while (list.length) {
        const childPoint = list.pop();
        const childNode = nodes[childPoint.node]
        console.log(childNode.name);
        if (!childNode.children) continue;
        list.push(...childNode.children.reverse());
    }
}

// deepTraversal(nodes[0])
deepTraversal2(nodes[0]);

// function wideTraversal(node) {
//     if (!node) return;
//     console.log(node.name);
//     for (let child of node.children) {
//         console.log(nodes[child.node].name);
//     }
    
//     const list = [...node.children.map(c => nodes[c.node])]
// }

// 队列
function wideTraversal2(node) {
    if (!node) return;
    console.log(node.name);
    const list=[...node.children];

    while (list.length) {
        const childPoint = list.shift();
        const childNode = nodes[childPoint.node];
        console.log(childNode.name);
        if (childNode.children) {
            list.push(...childNode.children)
        }
    }
}

// wideTraversal2(nodes[0]);
