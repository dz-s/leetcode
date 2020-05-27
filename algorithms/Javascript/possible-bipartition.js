const dfs = (graph, node, c, colors) => {
    if (node in colors) {
        return colors[node] == c;
    }
    console.log(colors, node, graph[node])
    colors[node] = c;

    for (idx in graph[node]) {
        if (!dfs(graph, graph[node][idx], +!c , colors)) {
            return false;
        }
    }


    return true;
}
var possibleBipartition = function (N, dislikes) {


    let graph = []
    for (let i = 1; i <= N; i++) {
        graph[i] = []
    }

    let colors = {}

    for (let i = dislikes.length - 1; i >= 0; i--) {
        graph[dislikes[i][0]].push(dislikes[i][1])
        graph[dislikes[i][1]].push(dislikes[i][0])
    }

    for (let node = 1; node <= N; node++) {
        if (!colors[node] && !dfs(graph, node, 0, colors)) {
            return false;
        }

    }

    

    return true;
};


console.log(possibleBipartition(3, [[1, 2], [1, 3], [2, 3]]))